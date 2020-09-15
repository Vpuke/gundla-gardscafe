import styled from "styled-components";

const StyledBackgroundVideo = styled.div`
  .backgroundVideo {
    overflow: hidden;
    position: absolute;
    height: 100vh;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;
    background-size: cover;
  }

  videoSource {
    width: 100%;
    height: 100%;
    object-position: center bottom;
    object-fit: fill;
  }
`;

const BackgroundVideo = () => {
  const videoSourceSmall = "/hero-video.mp4";
  const videoSourceLarge = "/hero-desktop.mp4";

  return (
    <StyledBackgroundVideo>
      <div className="backgroundVideo">
        <video className="videoSource" autoPlay="autoplay" loop="loop" muted>
          <source src={videoSourceLarge} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </StyledBackgroundVideo>
  );
};

export default BackgroundVideo;
