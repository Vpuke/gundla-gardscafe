import styled from "styled-components";

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
`;

const InstagramFeed = (props) => {
  const url =
    props.instagramData.graphql.user.edge_owner_to_timeline_media.edges;
  const images = url.slice(0, 4);

  return (
    <StyledImage>
      {images.map((item, i) => (
        <div className="instagramImgWrapper" key={i}>
          <img src={item.node.display_url} key={i}></img>
        </div>
      ))}
    </StyledImage>
  );
};

export default InstagramFeed;
