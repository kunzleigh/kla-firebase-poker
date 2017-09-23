import {Auditable} from "./auditable";

/**
 * User (profile) data.
 */
export class User extends Auditable {
  name: String;
  imageUrl: String;
}
