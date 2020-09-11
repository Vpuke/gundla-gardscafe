import styled from "styled-components";
import Link from "next/link";

const StyledList = styled.ul`
  padding: 0;

  li {
      list-style:none;
  }
  `;

const Event = ({ data }) => {
    const event = data.event[0];
    console.log(event);

  return (
    <div>
        <p>{event.description}</p>
        <StyledList>
            <li>Måndag: {event.monday}</li>
            <li>Tisdag: {event.tuesday}</li>
            <li>Onsdag: {event.wednesday}</li>
            <li>Torsdag: {event.thursday}</li>
            <li>Fredag: {event.friday}</li>
            <li>Lördag: {event.saturday}</li>
            <li>Söndag: {event.sunday}</li>
        </StyledList>
        <Link href="/events">
            <a>Mer info om våra aktiviteter</a>
        </Link>
        <p>Vill du boka event eller catering?</p>
        <Link href="/contact">
          <a>Fyll i vårt fomulär!</a>
        </Link>
    </div>
  );
};

export default Event;