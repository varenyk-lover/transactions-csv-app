import {Box, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import CustomButton from "../commonUI/CustomButton/CustomButton";
import {useState} from "react";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeletModal/DeleteModal";
import {useTSelector} from "../hooks/reduxHooks";
import {Transaction} from "../../types/Transaction";

const TransactionTable: React.FC = () => {
    const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

    const transactions = useTSelector((state) => state.transactions.allTransactions);

    console.log(transactions);

    const editBtnStyle = {
        width: "80px",
    };

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


    const handleDeleteConfirm = () => {
        console.log("handle Delete Submit");
        closeDeleteModal();
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
                    {transactions.map((transaction: Transaction) => (
                        <Tr key={transaction.id}>
                            <Td textAlign="center">{transaction.id}</Td>
                            <Td textAlign="center">{transaction.status}</Td>
                            <Td textAlign="center">{transaction.type}</Td>
                            <Td textAlign="center">{transaction.clientName}</Td>
                            <Td textAlign="center">{transaction.amount}</Td>
                            <Td display='flex' justifyContent='space-around'>
                                <Box display='flex' width="170px" gap='10px' justifyContent='space-between'>
                                    <CustomButton onClick={() => openEditModal(transaction)} name='Edit' type='button'
                                                  customStyles={editBtnStyle}/>
                                    <CustomButton onClick={() => openDeleteModal(transaction)} name='Delete'
                                                  type='button'/>
                                </Box>
                            </Td>
                        </Tr>


                    ))}
                </Tbody>
            </Table>

            {selectedTransaction && (
                <EditModal
                    isOpen={isEditModalOpen}
                    onClose={closeEditModal}
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
