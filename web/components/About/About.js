import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";

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
  );
};

export default About;
