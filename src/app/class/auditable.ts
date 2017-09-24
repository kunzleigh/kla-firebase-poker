/**
 * Adds common fields to each other data class
 */
export abstract class Auditable {
  $key: string;
  created: string;
  createdBy: string;
  lastModified: string;
  lastModifiedBy: string;
}
