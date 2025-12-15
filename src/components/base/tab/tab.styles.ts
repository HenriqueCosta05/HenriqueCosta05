import { Tab, Tabs } from "@mui/material";
import styled from "styled-components";

export const StyledTab = styled(Tab)`
    text-transform: none !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    color: #666 !important;
    min-width: 120px !important;
    transition: all 0.3s ease !important;

    &.Mui-selected {
        font-weight: 700 !important;
        background: linear-gradient(to right, #1e40af, #1e3a8a, #000000) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
        border-bottom: 2px solid transparent !important;
        border-image: linear-gradient(to right, #1e40af, #1e3a8a, #000000) 1 !important;
    }

    &:hover {
        background: linear-gradient(to right, #1e40af, #1e3a8a, #000000) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
    }
`;


export const StyledTabsContainer = styled(Tabs)`
    border-bottom: 1px solid #e5e7eb !important;
    margin-bottom: 16px !important;

    .MuiTabs-indicator {
        height: 0 !important;
    }
`;

export const TabsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 8px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const TabLabel = styled.span`
    font-size: 16px;
    font-weight: 500;
`;
