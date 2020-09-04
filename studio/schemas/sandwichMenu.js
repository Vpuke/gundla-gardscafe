export default {
  name: "sandwichMenu",
  type: "document",
  title: "Sandwich Menu",
  fields: [
    {
      name: "description",
      type: "text",
      title: "Description of sandwich",
      description: "Short description of menu item",
    },
    {
      name: "price",
      type: "number",
      title: "Price of menu item in SEK",
    },
  ],
};
