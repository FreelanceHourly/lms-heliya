// Modal.tsx
import { useState } from "react";

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white p-6 rounded-lg z-10">
            <button onClick={closeModal} className="absolute top-0 right-0 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 hover:text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
