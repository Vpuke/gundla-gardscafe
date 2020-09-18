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
  font-family: IBM Plex Sans;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
}

.images {
  widht: 100%;
  margin: 20px 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
 
  width: 268px;
}

img {
  height: auto;
  width: 100%;
  object-fit: cover;
}

.forms {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0 20px 0;
}

.form-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

small {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 300;
  font-size: 12px;
}

.contact p {
  margin: 0;
}

.contact .bold {
  font-weight: 500;
}

.contact a {
  font-size: 18px;
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
            <img src="/yoga-mobile.png"></img>
          </div>
        </div>
        <div className="contact">
          <p className="bold">Vill du boka ett eget event eller catering?</p>
          <p>Tryck här nedan för att komma till våra formulär.</p>
          <div className="forms">
            <div className="form-btn">
              <Link href="/contact">
                <a>Boka event</a>
              </Link>
              <small>Ha ditt evenemang hos oss</small>
            </div>
            <div className="form-btn">
              <Link href="/contact">
                <a>Boka catering</a>
              </Link>
              <small>Mat till ditt privata evenemang</small>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Event;