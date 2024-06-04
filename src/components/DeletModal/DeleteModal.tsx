import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import CustomButton from "../commonUI/CustomButton/CustomButton";
import {Transaction} from "../../types/Transaction";


interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    transaction: Transaction;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onConfirm, transaction, }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign='center' paddingTop='40px'>Confirm Deletion</ModalHeader>
                <ModalCloseButton />
                <ModalBody padding='0 40px'>
                    Are you sure you want to delete the transaction with ID {transaction.TransactionId}?
                </ModalBody>
                <ModalFooter>
                    <CustomButton name='Delete' type='button' onClick={onConfirm} />
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DeleteModal;