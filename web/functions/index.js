// Import the Firebase SDK for Google Cloud Functions.
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.setupNewUser = functions.auth.user().onCreate(event => {
  const user = event.data;

  admin.database().ref('/users/' + user.uid).set({
    name: user.displayName,
    created: new Date().toISOString(),
    createdBy: user.uid,
    isAdmin: user.email.split('@')[1] === 'kunzleigh.com',
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/kla-scrum-poker.appspot.com/o/user-profile-images%2Fno-image.png?alt=media&token=663c6ead-4d9d-4e78-8233-0c4e8da22636"
  });
});

exports.ticketStats = functions.https.onRequest((req, res) => {
  // Result object that will be returned
  const result = {
    totalTickets: 0,
  };

  // This will not scale well. A database trigger would be better.
  admin.database().ref('/tickets').once("value").then(function(snapshot) {
    const collection = snapshot.val();

    // Count of tickets
    result.totalTickets = Object.keys(collection).length;

    res.send(result);
  });

});

function voteSync(event, isCreate) {
  if (event.data.exists()) {
    const $uid = event.params.$uid;
    const data = event.data.val();
    const $ticketId = data.ticketId;

    if (isCreate) {
      data.created = new Date().toISOString();
      data.createdBy = $uid;
    } else {
      data.lastModified = new Date().toISOString();
      data.lastModifiedBy = $uid;
    }

    return admin.database().ref('/tickets/' + $ticketId + '/votes/' + $uid).set(data);
  }
}
exports.voteSyncCreate = functions.database.ref('/users/{$uid}/votes/{$voteId}').onCreate(event => {
  return voteSync(event, true);
});
exports.voteSyncUpdate = functions.database.ref('/users/{$uid}/votes/{$voteId}').onUpdate(event => {
  return voteSync(event, false);
});

function modes(array) {
  if (!array.length) return [];
  let modeMap = {},
    maxCount = 0,
    modes = [];

  array.forEach(function (val) {
    if (!modeMap[val]) modeMap[val] = 1;
    else modeMap[val]++;

    if (modeMap[val] > maxCount) {
      modes = [val];
      maxCount = modeMap[val];
    }
    else if (modeMap[val] === maxCount) {
      modes.push(val);
      maxCount = modeMap[val];
    }
  });
  return modes;
}

exports.voteStats = functions.database.ref('/tickets/{$ticketId}/votes/{$voteId}').onWrite(event => {
  if (event.data.exists() && event.params && event.params.$ticketId) {

    admin.database().ref('/tickets/' + event.params.$ticketId + '/votes').once("value").then(function(snapshot) {
      const collection = snapshot.val();

      const keys = Object.keys(collection);
      const votes = keys.map((k, i) => {
        return collection[k]['value'];
      });

      // Count of votes
      const countVote = keys.length;
      const sumVote = votes.reduce((a, b) => (a + b));
      const avgVote = sumVote / countVote;
      const minVote = Math.min.apply(Math, votes);
      const maxVote = Math.max.apply(Math, votes);
      const modeVote = modes(votes).join(',');

      admin.database().ref('/tickets/' + event.params.$ticketId + '/stats').update({
        avgVote: avgVote,
        countVote: countVote,
        maxVote: maxVote,
        minVote: minVote,
        modeVote: modeVote,
        sumVote: sumVote,
      });
    });
  }
});

exports.resizePhoto = functions.storage.object().onChange(event => {
    const object = event.data;

  const fileBucket = object.bucket; // The Storage bucket that contains the file.
  const filePath = object.name; // File path in the bucket.
  const contentType = object.contentType; // File content type.
  const resourceState = object.resourceState; // The resourceState is 'exists' or 'not_exists' (for file/folder deletions).
  const metageneration = object.metageneration; // Number of times metadata has been generated. New objects have a value
  
  // Exit if this is triggered on a file that is not an image.
  if (!contentType.startWith('image/')) {
    return;
  }
  
  // Exit if this is a move or deletion event.
  if (resourceState === 'not_exists') {
    return;
  }
  
  // Exit if file exists but is not new and is only being triggered
  // because of a metadata change.
  if (resourceState === 'exists' && metageneration > 1) {
    return;
  }
  
  // Download file from bucket.
  const bucket = gcs.bucket(fileBucket);
  const tempFilePath = path.join(os.tmpdir(), fileName);
  return bucket.file(filePath).download({
      destination: tempFilePath
    }).then(() => {
      // Generate a thumbnail using ImageMagick.
      return spawn('convert', [tempFilePath, '-thumbnail', '200x200>', tempFilePath]);
  }).then(() => {
    // Uploading the thumbnail overwriting the original file.
    return bucket.upload(tempFilePath, {destination: filePath});
  // Once the thumbnail has been uploaded delete the local file to free up disk space.
  }).then(() => fs.unlinkSync(tempFilePath));

});
