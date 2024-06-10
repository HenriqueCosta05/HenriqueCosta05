import PropTypes from "prop-types";
import { Container } from "../../style/components/Container";
import { Cover } from "../../style/components/Cover";
import { Wrapper } from "../../style/components/Wrapper";
import { Heading } from "../../style/components/Heading";
import { Subheading } from "../../style/components/Subheading";
import { Button } from "../../style/components/Button";

export default function About(props) {
  const handleClick = () => {
    window.location.href = props.buttonLink;
  };

  return (
    <section id="about">
      <Wrapper background="primary">
        <Container>
          <Heading>{props.heading}</Heading>
          <Subheading>{props.subheading}</Subheading>
          <Button onClick={handleClick}>{props.buttonText}</Button>
        </Container>
        <Cover imageType="about" />
      </Wrapper>
    </section>
  );
}

About.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};
