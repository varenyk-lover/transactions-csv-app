import {Box, Button} from "@chakra-ui/react";
import CustomButton from "../commonUI/CustomButton/CustomButton";
import {useEffect, useState} from "react";
import {Transaction} from "../../types/Transaction";

interface PaginationMenuProps {
    transactions: Transaction[];
    currentPage: number;
    onPageChange: (page: number) => void;
    transactionsInPage: number;
}

const PaginationMenu: React.FC<PaginationMenuProps> = ({
                                                           transactions, currentPage, onPageChange, transactionsInPage
                                                       }) => {

    const [countPage, setCountPage] = useState<number>(1);

    const paginateBtnStyle = {

        _disabled: {
            backgroundColor: "red",
        }
    };

    useEffect(() => {
        setCountPage(Math.ceil(transactions.length / transactionsInPage));
    }, [transactions, transactionsInPage]);

    const goToPrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < countPage) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <Box display='flex' justifyContent='space-around' padding='20px 0' gap='5px'>
            <CustomButton name='&lt;' type='button' onClick={goToPrevPage}    disabled={currentPage === 1}
                          /*customStyles={currentPage === 1 ? paginateBtnStyle : {}}*/
            />

            {Array.from({length: countPage}, (_, index) => (
                <CustomButton key={index + 1} name={index + 1} type='button'  onClick={() => onPageChange(index + 1)}
                              customStyles={currentPage === index + 1 ? { bg: "#035689", color: "white" } : {}}

                />
            ))}

            <CustomButton name='&gt;' type='button' onClick={goToNextPage}
                          disabled={currentPage === countPage}/>
        </Box>
    );
};

export default PaginationMenu;