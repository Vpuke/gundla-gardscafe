export default {
    name: "information",
    type: "document",
    title: "Information",
    fields: [
        {
        name: "facebookUrl",
        type: "string",
        title: "Länk till Facebook",
        },
        {
        name: "instagramUrl",
        type: "string",
        title: "Länk till Instagram",
        },

        {
        name: "phone",
        type: "string",
        title: "Telefonnummer",
        },
        {
        name: "mail",
        type: "string",
        title: "Emailadress",
        },
        {
        name: "address",
        type: "address",
        title: "Adress",
        },
        {
        name: "openingHours",
        type: "openingHours",
        title: "Öppettider",
        },
    ],
};