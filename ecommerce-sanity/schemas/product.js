export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
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
    {
      name: "short_description",
      title: "Short Description",
      type: "string",
      // validation: (Rule) => [
      //   Rule.required()
      //     .min(10)
      //     .error("A short description of min. 10 characters is required"),
      //   Rule.max(100).warning("Shorter titles are usually better"),
      // ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "categorey",
      title: "Categorey",
      type: "string",
    },
    {
      name: "code",
      title: "Code",
      type: "string",
    },
    {
      name: "additional_info",
      title: "Additional Information",
      type: "object",
      fields: [
        { name: "weight", title: "Weight", type: "string" },
        { name: "dimensions", title: "Dimensions", type: "string" },
        { name: "materials", title: "Materials", type: "string" },
        { name: "colors", title: "Colors", type: "string" },
        { name: "sizes", itle: "Sizes", type: "string" },
        { name: "description", title: "Description", type: "string" },
      ],
    },
  ],
};
