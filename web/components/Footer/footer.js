import styled from "styled-components";

const StyledFooter = styled.footer`
  background: url("../footer.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 56px 44px 20px 44px;

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .bottom-footer {
    position: absolute;
    bottom: 0;
  }

  img {
    margin: 15px 0 15px 0;
  }

  p,
  a {
    margin: 0;
    font-size: 14px;
    font-weight: normal;
    color: #fff;
  }

  div {
    padding: 10px 0;
  }
`;

const Footer = () => {
  return (
    <footer>
      <StyledFooter>
        <div className="wrapper">
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
              <p>
                <a href="tel:070-884 07 17">070-884 07 17</a>
              </p>
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
              <p>
                <a href="mailto:gundlagardscafe@gmail.com">
                  gundlagardscafe@gmail.com
                </a>
              </p>
            </div>
            <div>
              <img src="../instagram.svg" alt="instagram-icon"></img>
              <p>Instagram</p>
              <p>@gundlagardscafe</p>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <p>2020 @ Gundla Gårdscafé</p>
        </div>
      </StyledFooter>
    </footer>
  );
};

export default Footer;
