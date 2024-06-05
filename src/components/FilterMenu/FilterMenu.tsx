import {Box} from "@chakra-ui/react";
import CustomSelect from "../commonUI/CustomSelect/CustomSelect";
import {useTDispatch, useTSelector} from "../hooks/reduxHooks";
import {filterTransaction} from "../../redux/transactionsSlice";

const FilterMenu = () => {
    const dispatch = useTDispatch();
    const currentStatus = useTSelector((state) => state.transactions.statusFilter);
    const currentType = useTSelector((state) => state.transactions.typeFilter);

    const statusOptions = [
        {value: "Pending", label: "Pending"},
        {value: "Completed", label: "Completed"},
        {value: "Cancelled", label: "Cancelled"},
    ];

    const typeOptions = [
        {value: "Withdrawal", label: "Withdrawal"},
        {value: "Refill", label: "Refill"},
    ];

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(filterTransaction({Status: e.target.value, Type: currentType}));
        console.log("handle Status " + e.target.value);
    };

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(filterTransaction({Status: currentStatus, Type: e.target.value}));
        console.log("handle Type " + e.target.value);
    };
    return (
        <Box width='50%' display='flex' justifyContent='column' gap='10px' marginBottom='90px'>

            <CustomSelect placeholder="Status"
                          onChange={handleStatusChange} options={statusOptions}/>
            <CustomSelect placeholder="Type"
                          onChange={handleTypeChange} options={typeOptions}/>
            {/*   <CustomSelect placeholder="Status"
                onChange={handleStatusChange} options={statusOptions} />
            <CustomSelect placeholder="Type"
                onChange={handleTypeChange} options={typeOptions} />*/}
        </Box>
    );
};

export default FilterMenu;