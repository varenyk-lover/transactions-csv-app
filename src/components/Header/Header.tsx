import {Heading} from "@chakra-ui/react";
import styled from "styled-components";

const Header = () => {
    return (
        <StyledHeader>
            <Heading m="0" textAlign="center">Transaction Management</Heading>
        </StyledHeader>
    );
};

export default Header;


const StyledHeader = styled.header`
border: 2px solid black;
margin: 10px 10px 20px 10px;
`;

