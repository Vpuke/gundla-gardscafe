import { isSameDay } from "date-fns";

export default {
  name: "schedule",
  type: "object",
  title: "Schedule",
  validation: (Rule) =>
    Rule.custom((schedule) => {
      return (
        isSameDay(schedule.from, schedule.to) ||
        "Only one-day events are supported"
      );
    }),
  fields: [
    {
      name: "from",
      type: "datetime",
      title: "From",
    },
    {
      name: "to",
      type: "datetime",
      title: "To",
    },
  ],
};
