import styled from 'styled-components';
import groq from "groq";
import client from "../client";

export default function Events({ data }) {
    console.log(data.eventInformation)
    return (
        <div>
            <h1>Våra aktiviteter</h1>
            {data.eventInformation.map((item, key) => (
          <div key={key}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
        </div>
    );
  };


export async function getStaticProps() {
    const query = groq`{
      "eventInformation": (*[_type == 'eventInformation'] | order(_createdAt)),
    }`;
  
    const data = await client.fetch(query);
  
    return {
      props: { data: data },
    };
  }
  