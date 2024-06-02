import {Box} from "@chakra-ui/react";
import TransactionTable from "../TransactionTable/TransactionTable";
import styled from "styled-components";
import FilterMenu from "../FilterMenu/FilterMenu";
import ImportExportMenu from "../ImportExportMenu/ImportExportMenu";


const MainBlock = () => {
    return (
        <StyledMain>
            <Box display="flex" gap='100px' width="100%" justifyContent='space-between'  marginBottom="10px">
              <FilterMenu/>
              <ImportExportMenu/>
            </Box>
            <TransactionTable/>
        </StyledMain>
    );
};

export default MainBlock;


const StyledMain = styled.main`
  width: 77%; 
`;