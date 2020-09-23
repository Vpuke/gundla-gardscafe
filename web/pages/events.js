import styled from 'styled-components';
import groq from "groq";
import client from "../client";
import Navigation from "../components/Navigation/navigation";
import { device } from '../components/MediaQueries/mediaQueries';

const StyledEvent = styled.div`
  background: #2b2b2b;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: white;
  box-sizing: border-box;
  padding: 20px 20px 0 20px;

  h1 {
    margin: 0;
    padding: 0 0 24px 0;
    text-align: center;
    font-size: 36px;
  }

  h2 {
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: 16px;
  }

  .activities {
    padding-bottom: 24px;
  }

  .activities p, .info p {
    margin: 0;
    padding-top: 4px;
    font-size: 16px;
}

@media ${device.laptop} {
  align-items: center;

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 80px 0;
  }

  .activitiesContainer {
    width: 70%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
 }

 .activities {
    width: 45%;
    height: 100px;
 }
}
`;

export default function Events({ data }) {
    return (
        <StyledEvent>
          <Navigation />
            <h1>Våra aktiviteter</h1>
          <div className="wrapper">
            <div className="activitiesContainer">
              {data.eventInformation.map((item, key) => (
                <div key={key} className="activities">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="info">
            <h2>Program för sommaren 2021 kommer i maj.</h2>
            <p>Kontakta oss för biljetter.</p>
        </div>
       </StyledEvent>
    );
  };


export async function getStaticProps() {
    const query = groq`{
      "eventInformation": (*[_type == 'eventInformation'] | order(_updatedAt)),
    }`;
  
    const data = await client.fetch(query);
  
    return {
      props: { data: data },
    };
  }
  