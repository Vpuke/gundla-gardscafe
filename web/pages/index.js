import client from "../client";
import groq from "groq";
import Navigation from "../components/Navigation/navigation";
import Footer from "../components/Footer/footer";
import Section from "../components/Section/section";
import MenuItem from "../components/MenuItem/menuItem";
import About from "../components/About/About";
import Event from "../components/Event/event";
import BackgroundVideo from "../components/BackgroundVideo/backgroundVideo";
import InstagramFeed from "../components/InstagramFeed/instagramFeed";
import styled from "styled-components";

const StyledLandingPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .main-logo {
    height: 260px;
    width: 264px;
    z-index: 2;
  }
`;

export default function Index({ data }) {
  const [instaData, setInstaData] = React.useState("");

  React.useEffect(() => {
    fetch("https://www.instagram.com/gundlagardscafe/?__a=1")
      .then((resp) => resp.json())
      .then((json) => setInstaData(json));
  }, [0]);

  let instaGrid = [];

  if (instaData) {
    instaGrid = instaData.graphql.user.edge_owner_to_timeline_media.edges;
  }

  return (
    <div>
      <StyledLandingPage id="home">
        <img loading="lazy" className="main-logo" src="/main-logo.svg"></img>
        <BackgroundVideo />
        <Navigation />
      </StyledLandingPage>
      <Section id="about" title="">
        <About data={data}></About>
        <InstagramFeed instagramData={instaGrid} />
      </Section>
      <Section id="menu" title="Meny">
        <MenuItem data={data}></MenuItem>
      </Section>
      <Section id="contact" title="Event">
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

  return {
    props: { data: data },
  };
}
