import {Box, Td} from "@chakra-ui/react";
import CustomButton from "../CustomButton/CustomButton";

const ImportExportMenu = () => {

    const bigBtnStyle = {
        width: '150px',
    };



    const handleImport = () => {
        // some logic
        console.log("Import");
    };

    const handleExport = () => {
        // some logic
        console.log("Export ");
    };

    return (

        <Box   display='flex' width='400' gap='10px'
             justifyContent='space-between'>
            <CustomButton onClick={() => handleImport()} name='Import' type='button' size='lg'
                          customStyles={bigBtnStyle}/>
            <CustomButton onClick={() => handleExport()} name='Export' type='button' size='lg'
                          customStyles={bigBtnStyle}/>
        </Box>

    );
};

export default ImportExportMenu;