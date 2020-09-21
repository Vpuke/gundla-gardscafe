import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";
import { device } from "../MediaQueries/mediaQueries";

const StyledAbout = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px 0 20px;

  @media ${device.tablet} {
    text-align: start;
    width: 70%;

    h2 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }

  @media ${device.laptop} {
    text-align: start;
    width: 70%;

    h2 {
      font-size: 64px;
    }
    p {
      font-size: 18px;
    }
  }
`;

const About = ({ data }) => {
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

  return (
    <StyledAbout>
      <div>
        <PortableText
          blocks={data.aboutUs[0].headLine}
          serializers={serializers}
        />
        <PortableText
          blocks={data.aboutUs[0].description}
          serializers={serializers}
        />
      </div>
    </StyledAbout>
  );
};

export default About;
