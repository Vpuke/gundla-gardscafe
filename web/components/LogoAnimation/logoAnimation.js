import styled from "styled-components";

const StyledLogoAnimation = styled.div`
  .logoAnimation {
    overflow: hidden;
    position: absolute;
    z-index: 11;
    left: 0;
    top: 0;
    right: 0;
  }
`;

const LogoAnimation = () => {
  const videoSource = "/logo-animation.mov";
  return (
    <StyledLogoAnimation>
      <div className="logoAnimation">
        <video autoPlay="autoplay" muted>
          <source src={videoSource} type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>
    </StyledLogoAnimation>
  );
};

export default LogoAnimation;
