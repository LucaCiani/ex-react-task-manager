import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { useParams } from "react-router-dom";

export default function TaskDetailPage() {
    const { tasks } = useContext(GlobalContext);
    const { id } = useParams();

    const singleTask = tasks.find((task) => task.id == id);

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
                    </div>
                </div>
            </div>
        </>
    );
}
