import styled from "styled-components";
import Menu from "../components/Menu/menu";
import Burger from "../components/Hamburger/hamburger";
import { device } from "../components/MediaQueries/mediaQueries";

const StyledLocation = styled.div`
  background: #2b2b2b;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  h1 {
    margin: 10px 0 10px 0;
  }

  .directions {
    width: 80%;
  }

  .locationContent {
    padding: 20px 100px 0 20px;
  }

  .locationParagraph {
    font-size: 12px;
  }

  .directionsImage {
    margin: 20px;
    text-align: center;
  }

  @media ${device.mobileS} {
    h1 {
      font-size: 25px;
    }
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 12px;
    }
    .locationParagraph {
      font-size: 10px;
    }
  }

  @media ${device.mobileM} {
    h1 {
      font-size: 36px;
    }
    h2{
      font-size 25px;
    }
    p{
      font-size: 14px;
    }
    .locationParagraph{
      font-size: 12px;
    }
  }

  @media ${device.mobileL} {
    .directionsImage {
      text-align: center;
    }
  }

  @media ${device.laptop} {
    display: flex;
    height: 100vh;

    h1 {
      font-size: 48px;
    }
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 14px;
    }

    .locationContentWrapper {
      display: flex;
      margin: auto 0;
    }

    .locationContent {
      width: 485px;
    }
  }
`;

const Location = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <StyledLocation>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <div>
        <h1>Hitta hit</h1>
      </div>
      <div className="locationContentWrapper">
        <div className="locationContent">
          <h2>Buss</h2>
          <p>
            Buss Buss 50 & 86 går till Kallebäck. Röd & Grön Express går till
            delsjömotet. Det är en promenad på ca 20 min från båda hållplatser.
            Ifrån Kallebäck har man en uppförsbacke som kan vara jobbig
          </p>
          <h2>Bil</h2>
          <p>
            Här finns tyvärr ingen parkering. Man kan antingen ställa sig vid
            Kolerakyrkogården på Frans Perssons väg eller Delsjöbadets
            parkering. Det är en promenad på ca 15 min från båda parkeringarna.
          </p>
          <p className="locationParagraph">
            Har du något rörelsehinder och inte kan ta dig hit på annat vis än
            bil? Kontakta oss i förhand så löser vi plats åt er
          </p>
        </div>
        <div className="directionsImage">
          <img
            loading="lazy"
            className="directions"
            src="../location.png"
            alt="directions"
          />
        </div>
      </div>
    </StyledLocation>
  );
};

export default Location;
