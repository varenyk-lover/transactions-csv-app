import {Select} from "@chakra-ui/react";
import * as React from "react";
import {forwardRef} from "react";
import {Option} from "../../../types/Option";


interface CustomSelectProps {
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    options: Option[];
    defaultValue?: string;

}

const CustomSelect = forwardRef<HTMLSelectElement, CustomSelectProps>(
    ({onChange, placeholder, options, defaultValue}, ref) => {
        return (
            <Select variant="outline" placeholder={placeholder} defaultValue={defaultValue}   ref={ref}
                    borderRadius='0' border='2px solid black '
                    onChange={onChange}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
        );
    }
);


export default CustomSelect;