import { useState } from "react";
import styled from "styled-components";
import { device } from "../components/MediaQueries/mediaQueries";

const StyledForm = styled.div`
background: #2b2b2b;
color: #FCFDF7;
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

h1 {
    font-weight: 400;
}

h3 {
    font-family: IBM Plex Sans;
    font-weight: 300;
    font-size: 24px;
    margin: 0;
}

form {
    width: 90%;
    display: flex;
    flex-direction: column;
}

.radioButtons {
    display: flex;
    flex-direction: column;
}

p, input[type=text], textarea {
    background: #2b2b2b;
    color: #FCFDF7;
    font-family: IBM Plex Sans;
    font-weight: 300;
    font-size: 16px;
}

label {
    font-family: IBM Plex Sans;
    font-weight: 300;
    font-size: 16px;
    margin: 26px 0 8px 0;
}

input[type=text], textarea {
    width: 100%;
    padding: 0 0 4px 0;
    display: inline-block;
    outline: none;
    border: none;
    border-bottom: 2px solid #FCFDF7;
  }

  input[type=radio] {
    cursor: pointer;
    margin-right: 10px;
  }

  button {
    outline: none;
    border: none;
    border-left: 2px solid #FCFDF7;
    background: #2b2b2b;
    color: #FCFDF7;
    font-family: IBM Plex Sans;
    font-weight: 700;
    font-size: 16px;
    text-align: left;
    margin-top: 30px;
    cursor: pointer;
    padding: 6px 0 6px 10px;
  }

  .btn {
    position: absolute;
    bottom: 60px;
    border-left: 2px solid #FCFDF7;
    color: #FCFDF7;
    font-family: IBM Plex Sans;
    font-weight: 700;
    font-size: 16px;
    text-align: left;
    margin-top: 30px;
    cursor: pointer;
    padding: 6px 0 6px 10px;
    text-decoration: none;
  }

  .success {
      width: 90%;
  }
  
  .successText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  img {
      margin: 70px 0 32px 0;
      width: 132px;
  }

  @media ${device.tablet} {
    form {
        width: 60%;
  }

  @media ${device.laptop} {
    form {
        width: 40%;
  }
`;

const Contact = () => {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const req = new XMLHttpRequest();
    req.open(form.method, form.action);
    req.setRequestHeader("Accept", "application/json");
    req.onreadystatechange = () => {
      if (req.readyState !== XMLHttpRequest.DONE) return;
      if (req.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    req.send(data);
  };

  return (
    <StyledForm>
      <h1>Boka event/catering</h1>
      {status === "SUCCESS" ? (
        <div className="success">
          <div className="successText">
            <img loading="lazy" src="../success.svg" alt="success-icon"></img>
            <h3>Din förfrågan har skickats!</h3>
            <p>
              Vi kommer att kontakta dig så snart vi kan, vanligtvis inom 24
              timmar.
            </p>
          </div>
          <a className="btn" href="/">
            Tillbaka till startsidan
          </a>
        </div>
      ) : (
        <form
          action="https://formspree.io/mknqdqdb"
          method="POST"
          onSubmit={sendEmail}
        >
          <div className="radioButtons">
            <p>Vänligen välj ett alternativ:</p>
            <div>
              <input
                type="radio"
                id="event"
                name="request"
                value="event"
                required
              />
              <label htmlFor="event">Event</label>
            </div>
            <div>
              <input
                type="radio"
                id="catering"
                name="request"
                value="catering"
              />
              <label htmlFor="catering">Catering</label>
            </div>
          </div>
          <label htmlFor="name">Ditt namn</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Skriv ditt namn här"
            required
          />
          <label htmlFor="email">Din mailadress</label>
          <input
            type="text"
            id="email"
            name="_replyto"
            placeholder="Skriv din mailadress här"
            required
          />
          <label htmlFor="message">Ditt meddelande</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            cols="50"
            placeholder="Skriv ditt meddelande här"
            required
          ></textarea>
          <button type="submit">Skicka förfrågan</button>
          {status === "ERROR" && <p>Något gick fel. Försök igen.</p>}
        </form>
      )}
    </StyledForm>
  );
};

export default Contact;
