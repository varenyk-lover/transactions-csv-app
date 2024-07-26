import {Box, Table, Tbody, Td, Thead, Tr} from "@chakra-ui/react";
import CustomButton from "../commonUI/CustomButton/CustomButton";
import {Transaction} from "../../types/Transaction";
import CustomTableHeader from "../CustomTableHeader/CustomTableHeader";
import CustomTableData from "../CustomTableData/CustomTableData";


interface TransactionTableProps {
    paginatedTransactions: Transaction[];
    onEdit: (transaction: Transaction) => void;
    onDelete: (transaction: Transaction) => void;
    tableHeaders: string[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({paginatedTransactions, onEdit, onDelete, tableHeaders}) => {

    const editBtnStyle = {
        width: "80px",
    };


    return (
        <>

            <Box minHeight='600px'>
                <Table border="2px solid black" variant='striped' colorScheme="gray" size='sm'>
                    <Thead backgroundColor="#A0AEC0">
                        <Tr>
                            {tableHeaders.map(header => (
                                <CustomTableHeader key={header} header={header}/>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {paginatedTransactions.map((transaction: Transaction) => (
                            <Tr key={transaction.TransactionId}>

                                {Object.entries(transaction).map(([key, value]) => (
                                    <CustomTableData
                                        key={`${transaction.TransactionId}-${key}`}
                                        datainfo={value}
                                    />
                                ))}
                                <Td display='flex' justifyContent='space-around'>
                                    <Box display='flex' width="170px" gap='10px' justifyContent='space-between'>
                                        <CustomButton onClick={() => onEdit(transaction)} btnName='Edit' type='button'
                                                      customStyles={editBtnStyle}/>
                                        <CustomButton onClick={() => onDelete(transaction)} btnName='Delete'
                                                      type='button'/>
                                    </Box>
                                </Td>
                            </Tr>


                        ))}
                    </Tbody>
                </Table>

            </Box>


        </>
    );
};

export default TransactionTable;
