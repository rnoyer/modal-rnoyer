import { useEffect, useRef } from "react";
import "./modal.css";

export default function Modal({ open, setOpen, content }) {
  const dialogElement = useRef(null);
  const handleCloseModal = () => setOpen(false);

  useEffect(() => {
    const dialog = dialogElement.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog ref={dialogElement} id="modal" className="modal-dialog">
      <form method="dialog" className="modal-form">
        <button
          className="modal-button"
          onClick={handleCloseModal}
          type="button"
        >
          ✕
        </button>
        <p className="modal-content">{content}</p>
      </form>
    </dialog>
  );
}
