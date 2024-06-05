import { Button, SystemStyleObject } from "@chakra-ui/react";


interface CustomButtonProps {
    btnName: string;
    onClick?: () => void;
    disabled?: boolean;
    type: "button" | "submit" | "reset";
    customStyles?: SystemStyleObject;
    size?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    btnName,
    onClick,
    type,
    disabled,
    customStyles,
    size,
}) => {
    return (

        <Button colorScheme="gray" variant='outline' border='2px solid black' backgroundColor='white' borderRadius='0' margin="0 5px"
            width='80px' boxShadow=" 2px 2px #000" transition="all ease-in 0.3s" _hover={{ bg: "lightskyblue" }} _disabled={{ bg: "red" }}
            onClick={onClick} type={type} disabled={disabled} sx={{ ...customStyles }} size={size}>
            {btnName}
        </Button>

    );
};

export default CustomButton;