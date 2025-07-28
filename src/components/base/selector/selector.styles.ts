import styled from "styled-components";
import { IconButton, Popover } from "@mui/material";

export const StyledSelectorButton = styled(IconButton)`
  color: black !important;
  border-radius: 8px !important;
  padding: 8px 12px !important;
  min-width: 48px !important;
  transition: all 0.3s ease !important;
  backdrop-filter: blur(10px) !important;

  &:hover {
    transform: translateY(-1px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const StyledPopover = styled(Popover)`
  .MuiPopover-paper {
    background: #fffffff !important;
    backdrop-filter: blur(20px) !important;
    border-radius: 12px !important;
    padding: 8px !important;
    margin-top: 8px !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4) !important;
  }
`;

export const StyledOptionButton = styled(IconButton)`
  color: black !important;
  padding: 8px 16px !important;
  border-radius: 8px !important;
  margin: 2px 0 !important;
  width: 100% !important;
  justify-content: flex-start !important;
  gap: 8px !important;
  transition: all 0.2s ease !important;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const OptionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
`;

export const OptionLabel = styled.span`
  color: black !important;
  font-size: 14px;
`;
