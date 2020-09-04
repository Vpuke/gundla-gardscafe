import client from "../client";
import Menu from "../components/Menu/menu";
import Burger from "../components/Hamburger/hamburger";
import Footer from "../components/Footer/footer";
import Section from "../components/Section/section";
//import MenuItem from "../components/MenuItem/menuItem";

import styled from "styled-components";

const StyledLandingPage = styled.div`
  .main-logo {
    height: 260px;
    width: 264px;
  }

  background-image: url("hero-image.png");
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Index = (props) => {
  console.log(props);
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <StyledLandingPage>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <img className="main-logo" src="/main-logo.svg"></img>
      </StyledLandingPage>
      <Section id="about" title="Om oss">
        <p>blabla</p>
      </Section>
      <Section id="menu" title="Vår Meny">
        <p></p>
      </Section>
      <Section id="contact" title="Kontakta oss">
        <p>Formulär</p>
      </Section>
      <Footer />
    </div>
  );
};

Index.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(`
  *[_type == "drinkMenu"]
  `, { slug })
}

export default Index;
