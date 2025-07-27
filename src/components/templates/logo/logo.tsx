import { LogoProps } from "./logo.interface";
import { StyledLogoContainer, StyledGradientText } from "./logo.styles";

const Logo = ({ text = "Henrique", highlightedText = "Costa", onClick }: LogoProps) => {
    return (
        <StyledLogoContainer href="/" onClick={onClick}>
            {"<"}{text}
            <StyledGradientText>{" "}{highlightedText}{" />"}
            </StyledGradientText>
        </StyledLogoContainer>
    );
};

export default Logo;
