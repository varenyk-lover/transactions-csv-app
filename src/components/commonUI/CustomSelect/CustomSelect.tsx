import {Select} from "@chakra-ui/react";

interface OptionType {
    value: string;
    label: string;
}

interface SelectProps {
    onChange?: () => void;
    placeholder: string;
    options: OptionType[];
}

const CustomSelect: React.FC<SelectProps> = ({onChange, placeholder, options}) => {
    return (
        <Select variant="outline" placeholder={placeholder} borderRadius='0' border='2px solid black '
                onChange={onChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Select>
    );
};

export default CustomSelect;