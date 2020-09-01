export default {
  name: "eventInformation",
  type: "document",
  title: "Event information",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Event name",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your event (Seo purposes)",
    },
    {
      name: "image",
      type: "mainImage",
      title: "Event Image",
      description: "The highest resolution",
    },
    {
      name: "schedule",
      type: "schedule",
      title: "Pick date and time",
      description: "please choose date and time",
    },
  ],
};
