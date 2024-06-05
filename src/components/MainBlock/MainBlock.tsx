import {Box} from "@chakra-ui/react";
import TransactionTable from "../TransactionTable/TransactionTable";
import styled from "styled-components";
import FilterMenu from "../FilterMenu/FilterMenu";
import ImportExportMenu from "../ImportExportMenu/ImportExportMenu";
import PaginationMenu from "../PaginationMenu/PaginationMenu";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeletModal/DeleteModal";
import {useEffect, useState} from "react";
import {Transaction} from "../../types/Transaction";
import {useTDispatch, useTSelector} from "../hooks/reduxHooks";
import {deleteTransactions, updateTransactionStatus} from "../../redux/transactionsSlice";


const MainBlock = () => {
    const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const transactionsInPage = 10;

    const dispatch = useTDispatch();
    const transactions = useTSelector((state) => state.transactions.filteredTransactions);

    const paginatedTransactions = transactions.slice((currentPage - 1) * transactionsInPage, currentPage *
        transactionsInPage);


    //check current page after filtration and deleting
    useEffect(() => {
        const maxPage = Math.ceil(transactions.length / transactionsInPage);
        if (currentPage > maxPage) {
            setCurrentPage(maxPage || 1);
        }
    }, [transactions, transactionsInPage, currentPage]);

    //Deleting logic
    const openDeleteModal = (transaction: Transaction) => {
        setSelectedTransaction(transaction);
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
        setSelectedTransaction(null);
    };

    const handleDeleteConfirm = () => {
        if (selectedTransaction) {
            dispatch(deleteTransactions(selectedTransaction.TransactionId));
            closeDeleteModal();
        }
    };


    //Editing logic
    const openEditModal = (transaction: Transaction) => {
        setSelectedTransaction(transaction);
        setEditModalOpen(true);
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
        setSelectedTransaction(null);
    };

    const handleEditSubmit = (data: { Status: string }) => {
        if (selectedTransaction) {
            dispatch(updateTransactionStatus({TransactionId: selectedTransaction.TransactionId, Status: data.Status}));

        }
    };
    return (
        <StyledMain>
            <Box display="flex" gap='100px' width="100%" justifyContent='space-between' marginBottom="10px">
                <FilterMenu/>
                <ImportExportMenu/>
            </Box>

            <Box>
                <TransactionTable paginatedTransactions={paginatedTransactions} onEdit={openEditModal}
                                  onDelete={openDeleteModal}/>

                <PaginationMenu transactions={transactions} currentPage={currentPage} onPageChange={setCurrentPage}
                                transactionsInPage={transactionsInPage}/>
            </Box>


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
        </StyledMain>
    );
};

export default MainBlock;


const StyledMain = styled.main`
  width: 77%; 
`;