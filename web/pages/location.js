import styled from "styled-components";
import Menu from "../components/Menu/menu";
import Burger from "../components/Hamburger/hamburger";

const StyledLocation = styled.div`
  background: #2b2b2b;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  h1 {
    margin: 10px 0 10px 0;
  }

  .directions {
    width: 335px;
    height: 284px;
  }

  .locationContent {
    padding: 20px;
  }

  .locationParagraph {
    font-size: 12px;
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
          Kolerakyrkogården på Frans Perssons väg eller Delsjöbadets parkering.
          Det är en promenad på ca 15 min från båda parkeringarna.
        </p>
        <p className="locationParagraph">
          Har du något rörelsehinder och inte kan ta dig hit på annat vis än
          bil? Kontakta oss i förhand så löser vi plats åt er
        </p>
        <img className="directions" src="../location.png" alt="directions" />
      </div>
    </StyledLocation>
  );
};

export default Location;
