import styled from "styled-components";
import Link from "next/link";

const StyledWrapper = styled.div`

.container {
  padding: 0 15px;
}

p {
  padding: 0 5px;
}

ul {
  padding: 5px;
  background: rgba(196, 196, 196, 0.2);
  border-radius: 5px;
}

li {
  list-style:none;
}

a {
  color: #fff;
}

.btn {
  border-left: 2px solid #fff;
  padding-left: 10px;
  cursor: pointer;
}

.images {
  background: grey;
  height: 186px;
  widht: 100%;
  margin: 36px -15px;
  display: flex;
  flex-direction: row;
}

.image-container {
  widht: 50%;
  overflow: hidden;
  object-fit: cover;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.forms {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0 20px 0;
}

.contact p {
  margin: 0;
}

.contact a {
  background: white;
  color: black;
}
`;


const Event = ({ data }) => {
    const event = data.event[0];

  return (
    <StyledWrapper>
      <div className="container">
        <p>{event.description}</p>
        <ul>
            <li>Måndag: {event.monday}</li>
            <li>Tisdag: {event.tuesday}</li>
            <li>Onsdag: {event.wednesday}</li>
            <li>Torsdag: {event.thursday}</li>
            <li>Fredag: {event.friday}</li>
            <li>Lördag: {event.saturday}</li>
            <li>Söndag: {event.sunday}</li>
        </ul>
        <Link href="/events">
            <a className="btn">Mer info om våra aktiviteter</a>
        </Link>
        <div className="images">
          <div className="image-container">
            <img src="/location.png"></img>
          </div>
          <div className="image-container">
            <img src="/location.png"></img>
          </div>
        </div>
        <div className="contact">
          <p>Vill du boka ett eget event eller catering?</p>
          <p>Tryck här nedan för att komma till våra formulär där ni får fylla i mer info.</p>
          <div className="forms">
            <Link href="/contact">
              <a>Fomulär</a>
            </Link>
            <Link href="/contact">
              <a>Fomulär</a>
            </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Event;