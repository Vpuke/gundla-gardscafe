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
  list-style:none;
  font-size: 16px;
}

a {
  color: #FCFDF7;
}

.btn {
  border-left: 2px solid #FCFDF7;
  padding:5px 10px;
  cursor: pointer;
  font-family: IBM Plex Sans;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
}

.btn:hover{
  background-color: white;
  color: black;
}

.imageWrapper {
  widht: 100%;
  margin: 20px 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.imageContainer {
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

.formBtn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.formBtn img {
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


  @media ${device.mobileS} {
    p {
      font-size: 12px;
    }

    li {
      font-size: 12px;
    }

    a.btn {
      font-size: 12px;
    }

    .imageWrapper {
      margin: 10px 0;
    }

    .contact a {
      font-size: 14px;
    }

    .formBtn img{
      width 30px;
    }

    div.formBtn{
      text-align: center;
    }
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

  @media ${device.mobileM} and (min-height: 812px) {
    div.contact{
      margin: 60px 10px 20px 10px;
    }

    .contact{
      text-align:center;
    }

    ul{
      margin:40px 0 40px 0;
    }

    div.formBtn{
      margin-right:10px;
    }

    div.imageWrapper{
      margin: 40px 0 10px 0;
    }
  }

  @media ${device.mobileL}{
    p{
      font-size: 16px;
    }

    li{
      font-size 16px;
    }

    a.btn{
      font-size: 16px;
    }

    .imageWrapper{
      margin: 20px 0 ;
    }

    .contact a {
      font-size: 16px;
    }

    .formBtn img{
      width 40px;
    }

    .marginFooter{
      margin: 0px -5px 0 20px;
    }
  }

  @media ${device.tablet} {
    .container {
      padding: 0 100px;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    
    .eventList {
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

    .imageWrapper {
      width: 40%;
      margin: 0;
    }

    .imageContainer {
      max-width: 100%;
    }

    .forms {
      margin-top: 32px;
    }

    .formBtn:last-child {
      padding-left: 100px;
    }

    .formBtn img {
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
        <div className="eventList">
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
        <div className="imageWrapper">
          <div className="imageContainer">
            <picture>
              <source srcSet="/yoga.png" media="(min-width: 1024px)" />
              <img
                loading="lazy"
                src="/yoga-mobile.png"
                alt="Outdoor yoga class"
              />
            </picture>
          </div>
        </div>
        <div className="contact">
          <p className="bold">Vill du boka ett eget event eller catering?</p>
          <p>Tryck här nedan för att komma till våra formulär.</p>
          <div className="forms">
            <div className="formBtn">
              <img
                loading="lazy"
                src="../calendar.svg"
                alt="calendar-icon"
              ></img>
              <Link href="/contact">
                <a>Boka event</a>
              </Link>
              <small>Ha ditt evenemang hos oss</small>
            </div>
            <div className="formBtn">
              <img
                loading="lazy"
                src="../catering.svg"
                alt="catering-icon"
              ></img>
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
