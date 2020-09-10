export default {
  name: "pastryMenu",
  type: "document",
  title: "Pastry Menu",
  fields: [
    {
      name: "name",
      type: "text",
      title: "Name of Pastry",
      description: "Name of the pastry",
    },
    {
      name: "description",
      type: "text",
      title: "Description of pastry",
      description: "Short description of pastry",
    },
    {
      name: "price",
      type: "number",
      title: "Price of menu item in SEK",
    },
  ],
};
