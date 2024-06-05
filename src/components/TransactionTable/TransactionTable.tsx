import {Box, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import CustomButton from "../commonUI/CustomButton/CustomButton";
import {useState} from "react";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeletModal/DeleteModal";
import {useTDispatch, useTSelector} from "../hooks/reduxHooks";
import {Transaction} from "../../types/Transaction";
import PaginationMenu from "../PaginationMenu/PaginationMenu";
import {deleteTransactions, updateTransactionStatus} from "../../redux/transactionsSlice";


const TransactionTable: React.FC = () => {
    const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const dispatch = useTDispatch();
    const transactions = useTSelector((state) => state.transactions.allTransactions);
    const transactionsInPage = 10;
    console.log(currentPage);
    const paginatedTransactions = transactions.slice((currentPage - 1) * transactionsInPage, currentPage *
        transactionsInPage);

    console.log(transactions);

    const editBtnStyle = {
        width: "80px",
    };

    //Deleting logic
    const openDeleteModal = (transaction: Transaction) => {
        setSelectedTransaction(transaction);
        setDeleteModalOpen(true);
        console.log("open DeleteModal");
    };

    const closeDeleteModal = () => {
        console.log("close DeleteModal");
        setDeleteModalOpen(false);
        setSelectedTransaction(null);
    };

    const handleDeleteConfirm = () => {
       if (selectedTransaction) {
                    dispatch(deleteTransactions(selectedTransaction.TransactionId));
                    closeDeleteModal();
                    console.log("Deleted ID " + selectedTransaction.TransactionId);
                }
    };


    //Editing logic
    const openEditModal = (transaction: Transaction) => {
        setSelectedTransaction(transaction);
        setEditModalOpen(true);
        console.log("open EditModal");
    };

    const closeEditModal = () => {
        console.log("close closeEditModal");
        setEditModalOpen(false);
        setSelectedTransaction(null);
    };

    const handleEditSubmit = (data: {   Status: string }) => {
        if (selectedTransaction) {
            dispatch(updateTransactionStatus({TransactionId: selectedTransaction.TransactionId, Status: data.Status}));

        }
    };

    return (

        <>
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
                    {paginatedTransactions.map((transaction: Transaction) => (
                        <Tr key={transaction.TransactionId}>
                            <Td textAlign="center">{transaction.TransactionId}</Td>
                            <Td textAlign="center">{transaction.Status}</Td>
                            <Td textAlign="center">{transaction.Type}</Td>
                            <Td textAlign="center">{transaction.ClientName}</Td>
                            <Td textAlign="center">{transaction.Amount}</Td>
                            <Td display='flex' justifyContent='space-around'>
                                <Box display='flex' width="170px" gap='10px' justifyContent='space-between'>
                                    <CustomButton onClick={() => openEditModal(transaction)} btnName='Edit' type='button'
                                                  customStyles={editBtnStyle}/>
                                    <CustomButton onClick={() => openDeleteModal(transaction)} btnName='Delete'
                                                  type='button'/>
                                </Box>
                            </Td>
                        </Tr>


                    ))}
                </Tbody>
            </Table>

            <PaginationMenu transactions={transactions} currentPage={currentPage} onPageChange={setCurrentPage}
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
            )}
        </>
    );
};

export default TransactionTable;
