import {Box, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import CustomButton from "../CustomButton/CustomButton";

export interface TransactionProps {
    /*    id: number;
        status: string;
        type: string;
        clientName: string;
        amount: string;*/
}


const TransactionTable: React.FC<TransactionProps> = () => {

    const editBtnStyle = {

        width: "80px",
    };


    const handleDelete = () => {
        // some logic
        console.log("Delete");
    };

    const handleEdit = () => {
        // some logic
        console.log("Edit");
    };

    return (

        <Table border="2px solid black" variant='striped' colorScheme="gray">
            <Thead backgroundColor="#A0AEC0">
                <Tr>
                    <Th textAlign="center" color='black'>ID</Th>
                    <Th textAlign="center" color='black'>Status</Th>
                    <Th textAlign="center" color='black'>Type</Th>
                    <Th textAlign="center" color='black'>Client Name</Th>
                    <Th textAlign="center" color='black'>Amount</Th>
                    <Th textAlign="center" color='black'>Action</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td textAlign="center">1</Td>
                    <Td textAlign="center">Pending</Td>
                    <Td textAlign="center">Refill</Td>
                    <Td textAlign="center">Viktor Bulkin</Td>
                    <Td textAlign="center">$100.59</Td>
                    <Td display='flex' justifyContent='space-around'>
                        <Box display='flex' width="170px" gap='10px' justifyContent='space-between'>
                            <CustomButton onClick={() => handleEdit()} name='Edit' type='button'
                                          customStyles={editBtnStyle}/>
                            <CustomButton onClick={() => handleDelete()} name='Delete' type='button'/>
                        </Box>
                    </Td>
                </Tr>

                <Tr>
                    <Td textAlign="center">2</Td>
                    <Td textAlign="center">Fulfilled</Td>
                    <Td textAlign="center">Refill</Td>
                    <Td textAlign="center">Loom Fill</Td>
                    <Td textAlign="center">$20.59</Td>
                    <Td display='flex' justifyContent='space-around'>
                        <Box display='flex' width="170px" gap='10px' justifyContent='space-between'>
                            <CustomButton onClick={() => handleEdit()} name='Edit' type='button'
                                          customStyles={editBtnStyle}/>
                            <CustomButton onClick={() => handleDelete()} name='Delete' type='button'/>
                        </Box>
                    </Td>
                </Tr>

            </Tbody>
        </Table>
    );
};

export default TransactionTable;
