import styled from 'styled-components';

const StyledForm = styled.div`
background: #2b2b2b;
color: #fff;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

h1 {
    font-weight: 400;
}

form {
    width: 90%;
    display: flex;
    flex-direction: column;
}

.radio-buttons {
    display: flex;
    flex-direction: column;
}

p, input[type=text], textarea {
    background: #2b2b2b;
    color: #fff;
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
    border-bottom: 2px solid #fff;
  }

  input[type=radio] {
    cursor: pointer;
    margin-right: 10px;
  }

  button {
    outline: none;
    border: none;
    border-left: 2px solid #fff;
    background: #2b2b2b;
    color: #fff;
    font-family: IBM Plex Sans;
    font-weight: 700;
    font-size: 16px;
    text-align: left;
    margin-top: 30px;
    cursor: pointer;
    padding: 6px 0 6px 10px;
  }
`;

const Contact = () => {
    return (
        <StyledForm>
            <h1>Boka event/catering</h1>
            <form action="https://formspree.io/mknqdqdb" method="POST">
                <div className="radio-buttons">
                    <p>Vänligen välj ett alternativ:</p>
                    <div>
                        <input type="radio" id="event" name="request" value="event" required/>
                        <label htmlFor="event">Event</label>
                    </div>
                    <div>
                        <input type="radio" id="catering" name="request" value="catering" />
                        <label htmlFor="catering">Catering</label>
                    </div>
                </div>

                <label htmlFor="name">Ditt namn</label>
                <input type="text" id="name" name="name" placeholder="Skriv ditt namn här" required/>

                <label htmlFor="email">Din mailadress</label>
                <input type="text" id="email" name="_replyto" placeholder="Skriv din mailadress här" required/>

                <label htmlFor="message">Ditt meddelande</label>
                <textarea name="message" id="message" rows="6" cols="50" placeholder="Skriv ditt meddelande här" required></textarea>
                
                <button type="submit">Skicka förfrågan</button>
            </form>
        </StyledForm>
    );
  };

  export default Contact;