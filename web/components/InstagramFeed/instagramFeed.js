import styled from "styled-components";
import { device } from "../MediaQueries/mediaQueries";

const StyledImage = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;

  .instagramImgWrapper {
    width: 170px;
    height: 170px;
    padding 8px 8px 8px 8px;
  }
  img {
    width: 100%;
    height: 100%;
  }

  @media ${device.mobileS}{
    margin-top: 0px;
    .instagramImgWrapper{
      width: 125px;
      height: 125px;
    }
  }

  @media ${device.mobileM}{
    margin-top: 20px;
    .instagramImgWrapper{
      width: 150px;
      height: 150px;
    }
  }

  @media ${device.mobileM} and (min-height: 812px) {
    margin-top: 50px;
  }

  @media ${device.mobileL}{
    .instagramImgWrapper{
      width: 170px;
      height: 170px;
    }
  }

  @media ${device.tablet}{
    .instagramImgWrapper{
      margin-top: 100px;
      width: 200px;
      height: 200px;
    }
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
  const url = props.instagramData.slice(0, 4);

  return (
    <StyledImage>
      {url.map((item, i) => (
        <div className="instagramImgWrapper" key={i}>
          <a href="https://www.instagram.com/gundlagardscafe/">
            <img loading="lazy" src={item.node.display_url} key={i}></img>
          </a>
        </div>
      ))}
    </StyledImage>
  );
};

export default InstagramFeed;
