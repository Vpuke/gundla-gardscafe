// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Eventinformation
import eventInformation from "./eventInformation";

// Images
import mainImage from "./mainImage";

// date
import schedule from "./schedule";

// Sandwich menu
import sandwichMenu from "./sandwichMenu";

// Salad menu
import saladMenu from "./saladMenu";

// Drink menu
import drinkMenu from "./drinkMenu";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "events",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    eventInformation,
    mainImage,
    schedule,
    sandwichMenu,
    saladMenu,
    drinkMenu,
    /* Your types here! */
  ]),
});
