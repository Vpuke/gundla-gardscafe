export default {
  name: "drinkMenu",
  type: "document",
  title: "Drink Menu",
  fields: [
    {
      name: "description",
      type: "text",
      title: "Description of Drink",
      description: "Short description of menu item",
    },
    {
      name: "price",
      type: "number",
      title: "Price of menu item in SEK",
    },
  ],
};
