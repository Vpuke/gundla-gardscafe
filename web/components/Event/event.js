import styled from "styled-components";
import Link from "next/link";
import { device } from "../MediaQueries/mediaQueries";

const StyledWrapper = styled.div`
  .container {
    padding: 0 15px;
    display: flex;
    flex-direction: column;
  }

  p {
    padding: 0 5px;
    font-size: 16px;
  }

  ul {
    padding: 5px;
    background: rgba(54, 54, 54, 0.8);
    border-radius: 5px;
  }

  li {
    list-style: none;
    font-size: 16px;
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

  .image-wrapper {
    widht: 100%;
    margin: 20px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-container {
    max-width: 268px;
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
    margin: 24px 10px 20px 10px;
  }

  .form-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-btn img {
    width: 40px;
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
    margin: 6px 0;
  }

  @media ${device.mobileM} {
    p {
      font-size: 14px;
    }
    li {
      font-size: 14px;
    }
    a.btn {
      font-size: 14px;
    }
  }

  @media ${device.tablet} {
    .container {
      padding: 0 100px;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .event-list {
      width: 40%;
    }
  }

  @media ${device.laptop} {
    padding-top: 42px;

    .container {
      padding: 0 200px;
    }

    ul {
      background: rgba(196, 196, 196, 0.2);
      padding: 25px;
    }

    .image-wrapper {
      width: 40%;
      margin: 0;
    }

    .image-container {
      max-width: 100%;
    }

    .forms {
      margin-top: 32px;
    }

    .form-btn:last-child {
      padding-left: 100px;
    }

    .form-btn img {
      width: 50px;
    }
  }

  @media screen and (min-width: 1350px) {
    .contact {
      margin-top: -100px;
    }
  }
`;

const Event = ({ data }) => {
  const event = data.event[0];

  return (
    <StyledWrapper>
      <div className="container">
        <div className="event-list">
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
        </div>
        <div className="image-wrapper">
          <div className="image-container">
            <picture>
              <source srcSet="/yoga.png" media="(min-width: 1024px)" />
              <img src="/yoga-mobile.png" alt="Outdoor yoga class" />
            </picture>
          </div>
        </div>
        <div className="contact">
          <p className="bold">Vill du boka ett eget event eller catering?</p>
          <p>Tryck här nedan för att komma till våra formulär.</p>
          <div className="forms">
            <div className="form-btn">
              <img src="../calendar.svg" alt="calendar-icon"></img>
              <Link href="/contact">
                <a>Boka event</a>
              </Link>
              <small>Ha ditt evenemang hos oss</small>
            </div>
            <div className="form-btn">
              <img src="../catering.svg" alt="catering-icon"></img>
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
