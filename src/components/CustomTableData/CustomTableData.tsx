import {Td} from "@chakra-ui/react";

interface CustomTableDataProps {
    datainfo: string;
}

const CustomTableData: React.FC<CustomTableDataProps> = ({datainfo}) => {
    return (
        <>
            <Td textAlign="center">{datainfo}</Td>
        </>
    );
};

export default CustomTableData;