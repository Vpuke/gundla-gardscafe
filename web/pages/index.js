import client from "../client";
import groq from "groq";
import Link from 'next/link'
import Menu from "../components/Menu/menu";
import Burger from "../components/Hamburger/hamburger";
import Footer from "../components/Footer/footer";
import Section from "../components/Section/section";
import MenuItem from "../components/MenuItem/menuItem";
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

export default function Index({ menuItems }) {
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
      <Section id="about" title="Om oss">
        <div>
          {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgundlagardscafe&tabs=events&width=300&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" height="300"></iframe> */}
        </div>
      </Section>
      <Section id="menu" title="Meny">
        <MenuItem menuItems={menuItems}></MenuItem>
      </Section>
      <Section id="contact" title="Kontakta oss">
        <p>Vill du boka event eller catering?</p>
        <Link href="/contact">
          <a>Fyll i vårt fomulär!</a>
        </Link>
      </Section>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const query = groq`{
    "drinkMenu": (*[_type == 'drinkMenu']),
    "saladMenu": (*[_type == 'saladMenu']),
    "sandwichMenu":(*[_type == 'sandwichMenu'])
  }`;

  const menuItems = await client.fetch(query);

  return {
    props: { menuItems: menuItems },
  };
}
