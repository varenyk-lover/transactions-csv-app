import {Th} from "@chakra-ui/react";

interface CustomTableHeaderProps {
    header: string;
}
const CustomTableHeader: React.FC<CustomTableHeaderProps> = ({header}) => {
    return (
        <>
            <Th textAlign="center" color='black'>{header}</Th>
        </>
    );
};

export default CustomTableHeader;