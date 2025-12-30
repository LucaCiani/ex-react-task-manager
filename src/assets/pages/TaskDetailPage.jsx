import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskDetailPage() {
    const { tasks, removeTask } = useContext(GlobalContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const singleTask = tasks.find((task) => task.id == parseInt(id));

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
                            <b>Stato:</b> {singleTask.description}
                        </p>
                        <p className="card-text">
                            <b>Data di creazione:</b>{" "}
                            {new Date(
                                singleTask.createdAt
                            ).toLocaleDateString()}
                        </p>
                        <button
                            onClick={handleDelete}
                            className="btn btn-primary"
                        >
                            Elimina Task
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
