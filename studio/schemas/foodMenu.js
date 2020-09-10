export default {
  name: "foodMenu",
  type: "document",
  title: "Food Menu",
  fields: [
    {
      name: "food",
      type: "text",
      title: "Name of dish",
      description: "Name of the dish",
    },
    {
      name: "description",
      type: "text",
      title: "Description of dish",
      description: "Short description of dish",
    },
    {
      name: "price",
      type: "number",
      title: "Price of menu item in SEK",
    },
  ],
};
