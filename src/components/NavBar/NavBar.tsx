import {Box} from "@chakra-ui/react";
import styled from "styled-components";


const NavBar = () => {
    return (
        <StyledNavBar>

            <Box borderColor='black' backgroundColor="#A0AEC0" padding="5px">
                Transactions
            </Box>
            <Box height="100px" borderTop="2px solid black">
            </Box>

        </StyledNavBar>
    );
};

export default NavBar;


const StyledNavBar = styled.nav`
  width: 20%; 
  border: 2px solid black;
`;
