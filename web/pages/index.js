import client from "../client";
import groq from "groq";
import Link from "next/link";
import Menu from "../components/Menu/menu";
import Burger from "../components/Hamburger/hamburger";
import Footer from "../components/Footer/footer";
import Section from "../components/Section/section";
import MenuItem from "../components/MenuItem/menuItem";
import About from "../components/About/About";
import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";

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

export default function Index({ data }) {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <StyledLandingPage id="home">
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <img className="main-logo" src="/main-logo.svg"></img>
      </StyledLandingPage>
      <Section id="about" title="">
        <About data={data}></About>
      </Section>
      <Section id="menu" title="Meny">
        <MenuItem data={data}></MenuItem>
      </Section>
      <Section id="contact" title="Kontakta oss">
        <p>Vill du boka event eller catering?</p>
        <Link href="/contact">
          <a>Fyll i vårt fomulär!</a>
        </Link>
      </Section>
      <Footer data={data}/>
    </div>
  );
}

export async function getStaticProps() {
  const query = groq`{
    "drinkMenu": (*[_type == 'drinkMenu']),
    "foodMenu": (*[_type == 'foodMenu']),
    "pastryMenu":(*[_type == 'pastryMenu']),
    "aboutUs": (*[_type == 'aboutUs']),
    "information": (*[_type == 'information']),
  }`;

  const data = await client.fetch(query);

  return {
    props: { data: data },
  };
}
