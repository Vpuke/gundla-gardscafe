export default {
  name: "aboutUs",
  type: "document",
  title: "About us",
  fields: [
    {
      name: "headLine",
      type: "array",
      title: "Write a headline for about page",
      description: "Write a headline",
      of: [{ type: "block" }],
    },
    {
      name: "description",
      type: "array",
      title: "Write a description about us",
      description: "Write a description about us",
      of: [{ type: "block" }],
    },
  ],
};
