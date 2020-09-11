// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import eventInformation from "./eventInformation";
import mainImage from "./mainImage";
import schedule from "./schedule";
import pastryMenu from "./pastryMenu";
import foodMenu from "./foodMenu";
import drinkMenu from "./drinkMenu";
import aboutUs from "./aboutUs";
import information from "./information";
import openingHours from "./objects/openingHours";
import address from "./objects/address";
import event from "./event";


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
    pastryMenu,
    foodMenu,
    drinkMenu,
    information,
    address,
    openingHours,
    aboutUs,
    event,
    /* Your types here! */
  ]),
});
