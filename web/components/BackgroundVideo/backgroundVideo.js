import styled from "styled-components";

const StyledBackgroundVideo = styled.div`
  .backgroundVideo {
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
  }
`;

const BackgroundVideo = () => {
  const videoSource = "/hero-video.mp4";
  return (
    <StyledBackgroundVideo>
      <div className="backgroundVideo">
        <video autoPlay="autoplay" loop="loop" muted>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </StyledBackgroundVideo>
  );
};

export default BackgroundVideo;
