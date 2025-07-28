import { useState } from "react";
import { SelectorProps } from "./selector.interface";
import {
    StyledSelectorButton,
    StyledPopover,
    StyledOptionButton,
    OptionContent,
    OptionLabel
} from "./selector.styles";

const Selector = ({ options, selectedOption, onChange }: SelectorProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <StyledSelectorButton
                aria-label="select"
                aria-controls={open ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                {options.find(option => option.value === selectedOption)?.icon}
            </StyledSelectorButton>

            <StyledPopover
                id="simple-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <>
                    {options.map((option) => (
                        <StyledOptionButton
                            key={option.value}
                            onClick={() => {
                                onChange?.(option.value);
                                handleClose();
                            }}
                        >
                            <OptionContent>
                                {option.icon}
                                <OptionLabel>{option.label || option.value}</OptionLabel>
                            </OptionContent>
                        </StyledOptionButton>
                    ))}
                </>
            </StyledPopover>
        </>
    )
}
export default Selector;