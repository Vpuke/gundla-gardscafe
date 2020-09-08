import styled from "styled-components";

const StyledFooter = styled.footer`
  background: url("../footer.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 511px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 56px 44px 72px 44px;

  .left-side-footer {
    width: 50vw;
  }

  .right-side-footer {
    width: 50vw;
  }

  .bottom-footer {
    position: absolute;
    bottom: 0;
  }

  img {
    margin: 15px 0 15px 0;
  }

  p {
    margin: 0;
  }

  div {
    padding: 10px 0;
  }
`;

const Footer = () => {
  return (
    <footer>
      <StyledFooter>
        <div className="left-side-footer">
          <div>
            <img src="../watch.svg" alt="watch-icon"></img>
            <p>Öppettider</p>
            <p>Lördag 11-19</p>
            <p>Söndag 10-17</p>
          </div>
          <div>
            <img src="../phone.svg" alt="phone-icon"></img>
            <p>Ring oss</p>
            <p>070-884 07 17</p>
          </div>
          <div>
            <img src="../facebook.svg" alt="facebook-icon"></img>
            <p>Facebook</p>
            <p>@gundlagardscafe</p>
          </div>
        </div>
        <div className="right-side-footer">
          <div>
            <img src="../map-pin.svg" alt="map-pin-icon"></img>
            <p>Hitta till oss:</p>
            <p>Gundla Mosse 32</p>
            <p>412 76 Göteborg</p>
          </div>
          <div>
            <img src="../email.svg" alt="email-icon"></img>
            <p>Maila</p>
            <p>gundlagardscafe@gmail.com</p>
          </div>
          <div>
            <img src="../instagram.svg" alt="instagram-icon"></img>
            <p>Instagram</p>
            <p>@gundlagardscafe</p>
          </div>
        </div>
        {/* <div classaName="bottom-footer">
          <p>2020 @ Gundla Gårdscafé</p>
        </div> */}
      </StyledFooter>
    </footer>
  );
};

export default Footer;
