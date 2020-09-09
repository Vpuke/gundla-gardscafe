import styled from 'styled-components';

const StyledForm = styled.div`
background: #ada4a3;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

form {
    width: 70%;
    display: flex;
    flex-direction: column;
}
`;

const Contact = () => {
    return (
        <StyledForm>
            <h1>Formulär</h1>
            <form action="https://formspree.io/mknqdqdb" method="POST">
                <label htmlFor="name">Namn:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="_replyto" />

                <label htmlFor="message">Meddelande:</label>
                <textarea name="message" id="message" rows="8" cols="50"></textarea>
                
                <button type="submit">Skicka förfrågan</button>
            </form>
        </StyledForm>
    );
  };

  export default Contact;