import { Button, SystemStyleObject } from "@chakra-ui/react";


interface CustomButtonProps {
    name: string;
    onClick?: () => void;
    disabled?: boolean;
    type: "button" | "submit" | "reset";
    customStyles?: SystemStyleObject;
    size?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    name,
    onClick,
    type,
    disabled,
    customStyles,
    size,
}) => {
    return (

        <Button colorScheme="gray" variant='outline' border='2px solid black' backgroundColor='white' borderRadius='0'
            width='80px' boxShadow=" 2px 2px #000" transition="all ease-in 0.3s" _hover={{ bg: "lightskyblue" }}
            onClick={onClick} type={type} disabled={disabled} sx={{ ...customStyles }} size={size}>
            {name}
        </Button>

    );
};

export default CustomButton;