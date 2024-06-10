import PropTypes from "prop-types";
import { Linkedin, Github, Mail } from "lucide-react";
import { Wrapper } from "../../style/components/Wrapper";
import { Cover } from "../../style/components/Cover";
import { Container } from "../../style/components/Container";
import { Heading } from "../../style/components/Heading";
import { Subheading } from "../../style/components/Subheading";
import { Button } from "../../style/components/Button";
import { SocialButton } from "../../style/components/SocialButton";
import { ButtonGroup } from "../../style/components/ButtonGroup";

export default function Banner(props) {
  const handleClick = () => {
    window.location.href = props.buttonLink;
  };
  return (
    <>
      <Wrapper>
        <Cover imageType="cover" />
        <Container>
          <Heading>{props.heading}</Heading>
          <Subheading>{props.subheading}</Subheading>
          <ButtonGroup>
            <SocialButton href="https://www.linkedin.com/in/henriquecosta05/">
              <Linkedin color="#fff" />
            </SocialButton>
            <SocialButton href="https://github.com/HenriqueCosta05">
              <Github color="#fff" />
            </SocialButton>
            <SocialButton href="mailto:henriquebenedictocostadev@gmail.com">
              <Mail color="#fff" />
            </SocialButton>
          </ButtonGroup>
          <Button onClick={handleClick}>{props.buttonText}</Button>
        </Container>
      </Wrapper>
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
