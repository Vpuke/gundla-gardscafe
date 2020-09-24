export default {
    name: "information",
    type: "document",
    title: "Contact information",
    fields: [
        {
        name: "facebookUrl",
        type: "string",
        title: "Facebook URL",
        },
        {
        name: "instagramUrl",
        type: "string",
        title: "Instagram URL",
        },

        {
        name: "phone",
        type: "string",
        title: "Phone number",
        },
        {
        name: "mail",
        type: "string",
        title: "Email address",
        },
        {
        name: "address",
        type: "address",
        title: "Address",
        },
        {
        name: "openingHours",
        type: "openingHours",
        title: "Opening hours",
        },
    ],
};