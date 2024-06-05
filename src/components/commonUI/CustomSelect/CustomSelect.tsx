import { Select, SystemStyleObject, SelectProps as ChakraSelectProps } from "@chakra-ui/react";
import * as React from "react";
import { forwardRef } from "react";

interface OptionType {
    value: string;
    label: string;
}

interface CustomSelectProps  {
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    options: OptionType[];
    defaultValue?: string;
    name?: string;
}

const CustomSelect = forwardRef<HTMLSelectElement, CustomSelectProps>(
    ({ onChange, placeholder, options, defaultValue,  name }, ref) => {
        return (
            <Select variant="outline" placeholder={placeholder}  defaultValue={defaultValue} name={name} ref={ref} borderRadius='0' border='2px solid black '
                onChange={onChange}>
                {options.map(option => (
                    <option  key={option.value} value={option.value}  >
                        {option.label}
                    </option>
                ))}
            </Select>
        );
    }
);



export default CustomSelect;