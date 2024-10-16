import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter } from "@nextui-org/modal";
import { CheckmarkIcon } from "./icons";

interface TransactionSubmitedModal {
  isOpen: boolean;
  onClose: () => void;
}

const TransactionSubmitedModal = (props: TransactionSubmitedModal) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs" placement={"center"}>
      <ModalContent>
        <ModalBody>
          <div className="flex flex-col justify-center items-center gap-2">
            <CheckmarkIcon />

            <p>Transaction submitted</p>
          </div>
        </ModalBody>
        
        <ModalFooter>
          <Button color="primary" onClick={onClose} fullWidth>
            OK
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TransactionSubmitedModal;
