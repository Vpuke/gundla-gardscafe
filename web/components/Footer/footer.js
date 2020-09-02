import styled from "styled-components";

const StyledFooter = styled.footer`
background: #ada4a3;
color: #000;

p {
    margin: 0;
}

div {
    padding: 10px 0;
}
`;

const Footer = () => {
    return (
      <StyledFooter>
          <div>
              <p>Öppettider</p>
              <p>Lördag 11-19</p>
              <p>Söndag 10-17</p>
          </div>
          <div>
              <p>Kontakta oss</p>
              <p>070-884 07 17</p>
              <p>gundlagardscafe@gmail.com</p>
          </div>
      </StyledFooter>
    );
  };
  
  export default Footer;