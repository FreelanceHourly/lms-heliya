// BuyEnquiryModal.tsx
import Modal from "./buyModal";
import ScholarshipForm from "../scholarship-form";

export default function ScholarshipFormModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <Modal onClose={onClose}>
      <ScholarshipForm onClose={onClose} />
    </Modal>
  );
}
