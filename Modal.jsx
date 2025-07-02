import { useEffect, useRef } from "react";
import "./modal.css";

export default function Modal({ open, onClose, content }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
    // Close handler for pressing Esc
    const handleClose = () => onClose && onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [open, onClose]);

  return (
    <dialog ref={dialogRef} id="modal" className="modal-dialog">
      <form method="dialog" className="modal-form">
        <button className="modal-button" onClick={onClose} type="button">
          ✕
        </button>
        <p className="modal-content">{content}</p>
      </form>
    </dialog>
  );
}
