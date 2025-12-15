import { TabsProps } from "@mui/material";

export interface TabProps extends TabsProps{
  label: string;
  isActive: boolean;
  onClick: () => void;
}
