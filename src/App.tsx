import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import MainBlock from "./components/MainBlock/MainBlock";
import Header from "./components/Header/Header";
import { useTDispatch } from "./components/hooks/reduxHooks";
import { useQuery } from "react-query";
import { fetchTransactions } from "./api/fetchTransactions";
import { useEffect } from "react";
import { setTransactions } from "./redux/transactionsSlice";
import { Transaction } from "./types/Transaction";

const App: React.FC = () => {
    const dispatch = useTDispatch();

    const { data } = useQuery<Transaction[]>("transactions", fetchTransactions);

    useEffect(() => {
        if (data) {
            dispatch(setTransactions(data));
            console.log(data);
        }
    }, [data]);

    return (
        <>
            <Header />

            <Box display='flex' w='100%' justifyContent="space-between" p="10px">
                <NavBar />
                <MainBlock />
            </Box>
        </>
    );
};

export default App;
