import {Box} from "@chakra-ui/react";
import CustomButton from "../commonUI/CustomButton/CustomButton";
import {parse, unparse} from "papaparse";
import {saveAs} from "file-saver";
import {useTDispatch, useTSelector} from "../hooks/reduxHooks";
import {addTransactions} from "../../redux/transactionsSlice";
import styled from "styled-components";

const ImportExportMenu = () => {
    const transactions = useTSelector((state) => state.transactions.allTransactions);
    const dispatch = useTDispatch();

    const bigBtnStyle = {
        width: "150px",
    };

    const handleImport = (event) => {
        const file = event.target.files[0];
        if (file) {
            parse(file, {
                header: true,
                complete: (results) => {
                    dispatch(addTransactions(results.data));
                },
                error: (error) => {
                    console.error("Error parsing CSV file:", error);
                }
            });
        }


        console.log("Import");
    };

    const handleExport = () => {
        const csvCol = unparse(transactions, {
            header: false,
            columns:
                // ["id", "status", "type", "clientName", "amount"]
            [ "TransactionId",
      "Status",
      "Type",
     "ClientName",
    "Amount"]
        });

        const csvFields = unparse({fields: ["ID", "STATUS", "TYPE", "CLIENT NAME", "AMOUNT"], data: []});
        const result = csvFields + csvCol;
        const blob = new Blob([result], {type: "text/csv;charset=utf-8;"});
        saveAs(blob);
    };

    return (

        <Box display='flex' width='400' gap='10px'
             justifyContent='space-between'>
            {/*     <CustomButton onClick={() => handleImport()} name='Import' type='button' size='lg'
                          customStyles={bigBtnStyle}/>*/}

            {/*   <input
                type="file"
                accept=".csv"
                onChange={handleImport}
                style={{ display: 'none' }}
                id="import-csv"
            />
            <CustomButton
                as="label"
                htmlFor="import-csv"
                name='Import'
                type='button'
                size='lg'
                customStyles={bigBtnStyle}
            />*/}

            <Box>
                <StyledLabel
                    htmlFor="import-csv"

                >
                    Import CSV
                </StyledLabel>
                <StyledInput
                    type="file"
                    accept=".csv"
                    id="import-csv"
                    onChange={handleImport}
                />
            </Box>


            <CustomButton onClick={handleExport} name='Export' type='button' size='lg'
                          customStyles={bigBtnStyle}/>


        </Box>

    );
};

export default ImportExportMenu;

const StyledLabel = styled.label`
 display: inline-block;
 padding: 10px 20px;
 cursor: pointer;
 borderRadius: 0;
 text-align: center;
 font-weight: bold; border: 2px solid black;
 background-color: white;
box-shadow: 2px 2px black; 
transition: all ease-in 0.3s;
 width: 150px;
 &:hover {
    background-color: lightskyblue;
  }  
`;


const StyledInput = styled.input`
display: none;
`;

