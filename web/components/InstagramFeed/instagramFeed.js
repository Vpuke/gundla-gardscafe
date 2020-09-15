import styled from "styled-components";
import { device } from "../MediaQueries/mediaQueries";

const StyledImage = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .instagramImgWrapper {
    width: 170px;
    height: 170px;
    padding 10px 0 10px 10px;
  }
  img {
    width: 100%;
    height: 100%;
  }

  @media ${device.laptop}{
    .instagramImgWrapper{
        margin-top:50px;
        width: 250px;
        height:250px;
    }
  }
`;

const InstagramFeed = (props) => {
  const url =
    props.instagramData.graphql.user.edge_owner_to_timeline_media.edges;
  const images = url.slice(0, 4);

  return (
    <StyledImage>
      {images.map((item, i) => (
        <div className="instagramImgWrapper" key={i}>
          <a href="https://www.instagram.com/gundlagardscafe/">
            <img src={item.node.display_url} key={i}></img>
          </a>
        </div>
      ))}
    </StyledImage>
  );
};

export default InstagramFeed;
