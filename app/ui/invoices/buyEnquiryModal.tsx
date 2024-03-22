// BuyEnquiryModal.tsx
import Modal from "./buyModal";
import BuyForm from "../buy-form";

export default function BuyEnquiryModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <BuyForm onClose={onClose} />
    </Modal>
  );
}
