/**
 * Adds common fields to each other data class
 */
export abstract class Auditable {
  $id: string;
  created: string;
  createdBy: string;
  lastModified: string;
  lastModifiedBy: string;
}
