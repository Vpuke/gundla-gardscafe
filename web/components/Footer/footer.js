import styled from "styled-components";
import Link from "next/link";
import { device } from "../MediaQueries/mediaQueries";

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
    flex-direction: column;
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

  .socialMediaDiv {
    padding: 10px 0;
    margin: 10px;
  }

  .resize-icon-big {
    height: 54px;
    width: 54px;
  }

  .resize-icon-small {
    height: 48px;
    width: 48px;
    margin-bottom: 20px;
  }
  .topFooter {
    display: flex;
  }

  .socialMedia {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .contactFooter {
    margin: 0 27px 0 20px;
  }

  .marginFooter {
    margin: 0 41px 0 20px;
  }

  @media ${device.mobileS} {
    p,
    a {
      font-size: 12px;
    }
    .resize-icon-small {
      height: 36px;
      width: 36px;
    }
    .resize-icon-big {
      height: 40px;
      width: 40px;
    }
    .socialMediaDiv {
      margin: 5px;
    }
    .marginFooter {
      margin: 0 -10px 0 20px;
    }
  }

  @media ${device.mobileM} {
    .marginFooter {
      margin: 0 10px 0 40px;
    }
  }

  @media ${device.mobileL} {
    .marginFooter {
      margin: 0 10px 0 40px;
    }
    .socialMediaDiv {
      padding: 10px 0;
      margin: 10px;
    }
    p,
    a {
      font-size: 16px;
    }
  }

  @media ${device.laptop} {
    .socialMedia {
      display: flex;
      flex-direction: row;
    }
    .middleFooter {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .bottomFooter {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .socialMediaDiv {
      width: 200px;
      margin-bottom: 80px;
    }
  }
`;

const Footer = ({ data }) => {
  const information = data.information[0];
  return (
    <footer>
      <StyledFooter>
        <div className="wrapper">
          <div className="topFooter">
            <div className="contactFooter marginFooter">
              <img loading="lazy" src="../watch.svg" alt="watch-icon"></img>
              <p>Öppettider</p>
              <p>Lördag {information.openingHours.saturday}</p>
              <p>Söndag {information.openingHours.sunday}</p>
            </div>

            <div className="contactFooter">
              <img loading="lazy" src="../map-pin.svg" alt="map-pin-icon"></img>
              <p>Hitta till oss:</p>
              <p>
                <Link href="/location">
                  <a>{information.address.address}</a>
                </Link>
              </p>
              <p>
                {information.address.postCode} {information.address.city}
              </p>
            </div>
          </div>
          <div className="socialMedia">
            <div className="middleFooter">
              <div className="socialMediaDiv">
                <img
                  loading="lazy"
                  className="resize-icon-big"
                  src="../phone.svg"
                  alt="phone-icon"
                ></img>
                <p>RING</p>
                <p>
                  <a href={"tel:" + information.phone}>{information.phone}</a>
                </p>
              </div>

              <div className="socialMediaDiv">
                <img
                  loading="lazy"
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
            <div className="bottomFooter">
              <div className="socialMediaDiv">
                <img
                  loading="lazy"
                  className="resize-icon-big"
                  src="../email.svg"
                  alt="email-icon"
                ></img>
                <p>MAILA</p>
                <p>
                  <a href={"mailto:" + information.mail}>{information.mail}</a>
                </p>
              </div>

              <div className="socialMediaDiv">
                <img
                  loading="lazy"
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
        </div>
        <div className="bottom-footer">
          <p>2020 &copy; Gundla Gårdscafé</p>
        </div>
      </StyledFooter>
    </footer>
  );
};

export default Footer;
