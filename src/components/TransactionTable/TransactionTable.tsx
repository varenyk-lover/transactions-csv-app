import {Box, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import CustomButton from "../commonUI/CustomButton/CustomButton";
import {useState} from "react";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeletModal/DeleteModal";

const TransactionTable: React.FC = () => {
    const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
    const [selectedTransaction, setSelectedTransaction] = useState<number | null>(null);


    // for test
    const transactionID = 1;

    const editBtnStyle = {
        width: "80px",
    };

    const openDeleteModal = (transaction) => {
        setSelectedTransaction(transaction);
        setDeleteModalOpen(true);
        console.log("open DeleteModal");
    };

    const closeDeleteModal = () => {
        console.log("close DeleteModal");
        setDeleteModalOpen(false);
        setSelectedTransaction(null);
    };

    const openEditModal = (transaction) => {
        setSelectedTransaction(transaction);
        setEditModalOpen(true);
        console.log("open EditModal");
    };

    const closeEditModal = () => {
        console.log("close closeEditModal");
        setEditModalOpen(false);
        setSelectedTransaction(null);
    };


    const handleEditSubmit = () => {
        console.log("handle Edit Submit");
        closeEditModal();
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
                    <Tr>
                        <Td textAlign="center">{transactionID}</Td>
                        <Td textAlign="center">Pending</Td>
                        <Td textAlign="center">Refill</Td>
                        <Td textAlign="center">Viktor Bulkin</Td>
                        <Td textAlign="center">$100.59</Td>
                        <Td display='flex' justifyContent='space-around'>
                            <Box display='flex' width="170px" gap='10px' justifyContent='space-between'>
                                <CustomButton onClick={() => openEditModal(1)} name='Edit' type='button'
                                              customStyles={editBtnStyle}/>
                                <CustomButton onClick={() => openDeleteModal(1)} name='Delete'
                                              type='button'/>
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
                                <CustomButton onClick={() => console.log("test")} name='Edit' type='button'
                                              customStyles={editBtnStyle}/>
                                <CustomButton onClick={() => console.log("test")} name='Delete' type='button'/>
                            </Box>
                        </Td>
                    </Tr>

                </Tbody>
            </Table>

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
