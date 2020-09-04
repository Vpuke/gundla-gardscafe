export default {
  name: "saladMenu",
  type: "document",
  title: "Salad Menu",
  fields: [
    {
      name: "description",
      type: "text",
      title: "Description of salad",
      description: "Short description of menu item",
    },
    {
      name: "price",
      type: "number",
      title: "Price of menu item in SEK",
    },
  ],
};
