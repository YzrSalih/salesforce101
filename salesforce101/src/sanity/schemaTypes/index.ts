import postType from "./postType";
import { authorType } from "./authorType";
import { categoryType } from "./categoryType";
import { blockContentType } from "./blockContentType";

export const schemaTypes = [
  postType,
  authorType,
  categoryType,
  blockContentType,
];

// Export the Sanity schema object expected by sanity.config.ts
export const schema = {
  types: schemaTypes,
};
