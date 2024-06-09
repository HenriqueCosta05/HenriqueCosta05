import PropTypes from "prop-types";
import { BannerContainer } from "../../style/components/Banner/BannerContainer";
import { BannerHeading } from "../../style/components/Banner/BannerHeading";
import { BannerSubheading } from "../../style/components/Banner/BannerSubheading";
import { BannerButton } from "../../style/components/Banner/BannerButton";
import { BannerCover } from "../../style/components/Banner/BannerCover";
import { BannerWrapper } from "../../style/components/Banner/BannerWrapper";

export default function Banner(props) {
  const handleClick = () => {
    window.location.href = props.buttonLink;
  };
  return (
    <>
      <BannerWrapper>
        <BannerContainer>
          <BannerHeading>{props.heading}</BannerHeading>
          <BannerSubheading>{props.subheading}</BannerSubheading>
          <BannerButton onClick={handleClick}>{props.buttonText}</BannerButton>
        </BannerContainer>{" "}
        <BannerCover src={props.coverImage} />
      </BannerWrapper>
    </>
  );
}

Banner.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  coverImage: PropTypes.string,
};
