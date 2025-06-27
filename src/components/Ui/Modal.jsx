import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
 
  useEffect(() => {
    const handleKeyDown = () => {
      onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose} 
      className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'
    >
      <div
        onClick={(e) => e.stopPropagation()} 
        className='bg-title rounded-xl  p-8 w-full max-w-lg shadow-xl relative'
      >
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-desc2 hover:text-black text-xl'
        >
          ✕
        </button>
        {title && <h2 className='text-2xl font-bold mb-4'>{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
