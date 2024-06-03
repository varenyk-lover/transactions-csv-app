import {useForm} from "react-hook-form";
import {
    FormControl,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import CustomSelect from "../commonUI/CustomSelect/CustomSelect";
import CustomButton from "../commonUI/CustomButton/CustomButton";
import styled from "styled-components";


interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    //for test
    onSubmit: () => void;

}

const EditModal: React.FC<EditModalProps> = ({isOpen, onClose, onSubmit,}) => {
    const {register, handleSubmit, reset} = useForm<{ status: string }>();

    const statusOptions = [
        {value: "Pending", label: "Pending"},
        {value: "Completed", label: "Completed"},
        {value: "Cancelled", label: "Cancelled"},
    ];

    const handleClose = () => {
        reset();
        onClose();
    };

    //for test
    const handleSave = () => {

        handleClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalOverlay/>
            <ModalContent height='300px'>
                <ModalHeader textAlign='center' paddingTop='40px'>Edit Transaction Status</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <StyledForm onSubmit={handleSubmit(handleSave)}>
                        <FormControl id="status">
                            {/*for test*/}
                            <CustomSelect placeholder="Status"
                                          options={statusOptions}/>
                        </FormControl>

                        <CustomButton name='Save' type='submit'/>

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

