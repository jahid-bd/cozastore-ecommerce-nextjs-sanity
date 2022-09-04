export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "header",
      title: "Header",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 90,
      },
    },
  ],
};
