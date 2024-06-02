import {Box} from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import MainBlock from "./components/MainBlock/MainBlock";
import Header from "./components/Header/Header";


const App = () => {
    return (
        <>
            <Header/>
            <Box display='flex' w='100%' justifyContent="space-between" p="10px">
                <NavBar/>
                <MainBlock/>
            </Box>
        </>
    );
};

export default App;
