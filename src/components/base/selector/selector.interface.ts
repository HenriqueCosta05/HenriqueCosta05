export interface SelectorProps {
    options: {
        label?: string;
        value: string;
        icon?: React.ReactNode;
    }[];
    selectedOption?: string;
    onChange?: (value: string) => void;
}