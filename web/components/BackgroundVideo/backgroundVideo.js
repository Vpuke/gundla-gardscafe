import styled from "styled-components";

const StyledBackgroundVideo = styled.div`
  overflow: hidden;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;

  .videoSource {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
  }

  @media (min-aspect-ratio: 16/9) {
    .videoSource {
      width: 100%;
      height: auto;
    }
  }
  @media (max-aspect-ratio: 16/9) {
    .videoSource {
      width: auto;
      height: 100%;
    }
  }
`;

const BackgroundVideo = () => {
  // const videoSourceSmall = "/hero-video.mp4";
  const videoSourceLarge = "/hero-desktop.mp4";

  return (
    <StyledBackgroundVideo>
      {/* <div className="backgroundVideo"> */}
      <video className="videoSource" autoPlay="autoplay" loop="loop" muted>
        <source src={videoSourceLarge} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* </div> */}
    </StyledBackgroundVideo>
  );
};

export default BackgroundVideo;
