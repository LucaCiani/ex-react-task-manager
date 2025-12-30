import { createPortal } from "react-dom";

export default function Modal({
    title,
    content,
    show,
    onClose,
    onConfirm,
    confirmText = "Conferma",
}) {
    if (!show) return null;

    return createPortal(
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{content}</p>
                <button className="btn btn-secondary" onClick={onClose}>
                    Annulla
                </button>
                <button className="btn btn-primary" onClick={onConfirm}>
                    {confirmText}{" "}
                </button>
            </div>
        </div>,
        document.body
    );
}
