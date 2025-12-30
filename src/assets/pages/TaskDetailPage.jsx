import { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";

export default function TaskDetailPage() {
    const { tasks, removeTask, updateTask } = useContext(GlobalContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const singleTask = tasks.find((task) => task.id == parseInt(id));

    const [showModal, setShowModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    if (!singleTask) {
        return <h2>Task non trovata!</h2>;
    }

    const handleDelete = async () => {
        try {
            await removeTask(singleTask.id);
            alert("Task eliminata con successo!");
            navigate("/task-list");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    const handleUpdate = async (updatedTask) => {
        try {
            await updateTask(updatedTask);
            setEditModal(false);
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    return (
        <>
            <div className="container">
                <div className="card my-5 border border-0">
                    <div className="card-body">
                        <h3 className="card-title">{singleTask.title}</h3>
                        {singleTask.description && (
                            <p className="card-text">
                                <b>Descrizione:</b> {singleTask.description}
                            </p>
                        )}
                        <p className="card-text">
                            <b>Stato:</b> {singleTask.status}
                        </p>
                        <p className="card-text">
                            <b>Data di creazione:</b>{" "}
                            {new Date(
                                singleTask.createdAt
                            ).toLocaleDateString()}
                        </p>
                        <button
                            onClick={() => {
                                setShowModal(true);
                            }}
                            className="btn btn-primary"
                        >
                            Elimina Task
                        </button>
                        <button
                            onClick={() => {
                                setEditModal(true);
                            }}
                            className="btn btn-primary"
                        >
                            Modifica Task
                        </button>
                    </div>
                    <Modal
                        title="Conferma Eliminazione"
                        content={"Sei sicuro di voler eliminare questa task?"}
                        show={showModal}
                        onClose={() => {
                            setShowModal(false);
                        }}
                        onConfirm={handleDelete}
                        confirmText="Elimina"
                    />
                    <EditTaskModal
                        task={singleTask}
                        show={editModal}
                        onClose={() => {
                            setEditModal(false);
                        }}
                        onSave={handleUpdate}
                    />
                </div>
            </div>
        </>
    );
}
