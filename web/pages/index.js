import client from "../client";
import groq from "groq";
import Link from "next/link";
import Navigation from "../components/Navigation/navigation";
import Footer from "../components/Footer/footer";
import Section from "../components/Section/section";
import MenuItem from "../components/MenuItem/menuItem";
import About from "../components/About/About";
import Event from "../components/Event/event";
import InstagramFeed from "../components/InstagramFeed/instagramFeed";
import styled from "styled-components";
// import PortableText from "@sanity/block-content-to-react";

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
  return (
    <div>
      <StyledLandingPage id="home">
        <Navigation />
        <img className="main-logo" src="/main-logo.svg"></img>
      </StyledLandingPage>
      <Section id="about" title="">
        <About data={data}></About>
        <InstagramFeed instagramData={instagram} />
      </Section>
      <Section id="menu" title="Meny">
        <MenuItem data={data}></MenuItem>
      </Section>
      <Section id="contact" title="Evenemang">
        <Event data={data} />
      </Section>
      <Footer data={data} />
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
    "event": (*[_type == 'event']),
  }`;

  const data = await client.fetch(query);

  const resInsta = await fetch(
    "https://www.instagram.com/gundlagardscafe/?__a=1"
  );
  const InstagramJson = await resInsta.json();

  return {
    props: { data: data, instagram: InstagramJson },
  };
}
