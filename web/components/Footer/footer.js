import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
  background: url("../dark-background.png");
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

  .resize-icon-big {
    height: 54px;
    width: 54px;
  }

  .resize-icon-small {
    height: 48px;
    width: 48px;
  }
`;

const Footer = ({ data }) => {
  const information = data.information[0];
  console.log(information.address);
  return (
    <footer>
      <StyledFooter>
        <div className="wrapper">
          <div className="left-side-footer">
            <div>
              <img src="../watch.svg" alt="watch-icon"></img>
              <p>Öppettider</p>
              <p>Lördag {information.openingHours.saturday}</p>
              <p>Söndag {information.openingHours.sunday}</p>
            </div>
            <div>
              <img
                className="resize-icon-big"
                src="../phone.svg"
                alt="phone-icon"
              ></img>
              <p>RING</p>
              <p>
                <a href={"tel:" + information.phone}>{information.phone}</a>
              </p>
            </div>
            <div>
              <img
                className="resize-icon-small"
                src="../facebook.svg"
                alt="facebook-icon"
              ></img>
              <p>FACEBOOK</p>
              <p>
                <a href={information.facebookUrl}>@gundlagardscafe</a>
              </p>
            </div>
          </div>
          <div className="right-side-footer">
            <div>
              <img src="../map-pin.svg" alt="map-pin-icon"></img>
              <p>Hitta till oss:</p>
              <p>
                <Link href="/location">{information.address.address}</Link>
              </p>
              <p>
                {information.address.postCode} {information.address.city}
              </p>
            </div>
            <div>
              <img
                className="resize-icon-big"
                src="../email.svg"
                alt="email-icon"
              ></img>
              <p>MAILA</p>
              <p>
                <a href={"mailto:" + information.mail}>{information.mail}</a>
              </p>
            </div>
            <div>
              <img
                className="resize-icon-small"
                src="../instagram.svg"
                alt="instagram-icon"
              ></img>
              <p>INSTAGRAM</p>
              <p>
                <a href={information.instagramUrl}>@gundlagardscafe</a>
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <p>2020 &copy; Gundla Gårdscafé</p>
        </div>
      </StyledFooter>
    </footer>
  );
};

export default Footer;
