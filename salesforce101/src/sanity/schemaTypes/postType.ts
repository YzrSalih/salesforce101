import { defineType } from "sanity";

const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    { name: "date", title: "Date", type: "datetime" },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "author", title: "Author", type: "string" },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "cover",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
});

export default postType;
