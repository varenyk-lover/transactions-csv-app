import { Box } from "@chakra-ui/react";
import CustomSelect from "../commonUI/CustomSelect/CustomSelect";


const FilterMenu = () => {
    const statusOptions = [
        { value: "Pending", label: "Pending" },
        { value: "Completed", label: "Completed" },
        { value: "Cancelled", label: "Cancelled" },
    ];

    const typeOptions = [
        { value: "Withdrawal", label: "Withdrawal" },
        { value: "Refill", label: "Refill" },
    ];

    const handleStatusChange = () => {
        console.log("handle Status ");
    };

    const handleTypeChange = () => {
        console.log("handle Type");
    };
    return (
        <Box width='50%' display='flex' justifyContent='column' gap='10px' marginBottom='125px'>
            <CustomSelect placeholder="Status"
                onChange={handleStatusChange} options={statusOptions} />
            <CustomSelect placeholder="Type"
                onChange={handleTypeChange} options={typeOptions} />
        </Box>
    );
};

export default FilterMenu;