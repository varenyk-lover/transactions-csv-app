import { useForm } from "react-hook-form";
import {
    FormControl,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay, Select,
} from "@chakra-ui/react";
import CustomSelect from "../commonUI/CustomSelect/CustomSelect";
import CustomButton from "../commonUI/CustomButton/CustomButton";
import styled from "styled-components";
import {Transaction} from "../../types/Transaction";


interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { Status: string }) => void;
    transaction: Transaction;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSubmit, transaction }) => {
    const { handleSubmit, reset , register} = useForm<{ Status: string }>();


    const statusOptions = [
        { value: "Pending", label: "Pending" },
        { value: "Completed", label: "Completed" },
        { value: "Cancelled", label: "Cancelled" },
    ];

    const handleClose = () => {
        reset();
        onClose();
    };

    //for test
    const handleSave = (data: {  Status: string }) => {
        console.log(data)
        onSubmit(data);
        handleClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent height='300px'>
                <ModalHeader textAlign='center' paddingTop='40px'>Edit Transaction Status</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <StyledForm onSubmit={handleSubmit(handleSave)}>
                        <FormControl id="status">
                            {/*for test*/}
                      {/*      <CustomSelect {...register('status', { required: true })} placeholder="Status"
                                options={statusOptions} />*/}

                            {/*for test*/}
                            <Select defaultValue={transaction.Status} {...register('Status', { required: true })}>
                                {statusOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Select>

                        </FormControl>

                        <CustomButton name='Save' type='submit' />

                    </StyledForm>
                </ModalBody>

            </ModalContent>
        </Modal>
    );
};

export default EditModal;


const StyledForm = styled.form`
display: flex;
gap: 90px;
flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

