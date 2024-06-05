import {Box, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import CustomButton from "../commonUI/CustomButton/CustomButton";
import {Transaction} from "../../types/Transaction";


interface TransactionTableProps {
    paginatedTransactions: Transaction[];
    onEdit: (transaction: Transaction) => void;
    onDelete: (transaction: Transaction) => void;
}

const TransactionTable: React.FC<TransactionTableProps> = ({paginatedTransactions, onEdit, onDelete}) => {

    const editBtnStyle = {
        width: "80px",
    };

    return (
        <>

            <Box     minHeight='560px'>
                <Table border="2px solid black" variant='striped' colorScheme="gray" size='sm' >
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
                        {paginatedTransactions.map((transaction: Transaction) => (
                            <Tr key={transaction.TransactionId}>
                                <Td textAlign="center">{transaction.TransactionId}</Td>
                                <Td textAlign="center">{transaction.Status}</Td>
                                <Td textAlign="center">{transaction.Type}</Td>
                                <Td textAlign="center">{transaction.ClientName}</Td>
                                <Td textAlign="center">{transaction.Amount}</Td>
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


          {/*  <PaginationMenu transactions={transactions} currentPage={currentPage} onPageChange={setCurrentPage}
                            transactionsInPage={transactionsInPage}/>

            {selectedTransaction && (
                <EditModal
                    isOpen={isEditModalOpen}
                    onClose={closeEditModal}
                    onSubmit={handleEditSubmit}
                    transaction={selectedTransaction}
                />
            )}

            {selectedTransaction && (
                <DeleteModal
                    isOpen={isDeleteModalOpen}
                    onClose={closeDeleteModal}
                    onConfirm={handleDeleteConfirm}
                    transaction={selectedTransaction}
                />
            )}*/}
        </>
    );
};

export default TransactionTable;
