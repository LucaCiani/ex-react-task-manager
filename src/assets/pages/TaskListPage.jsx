import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import TaskRow from "../components/TaskRow";

export default function TaskListPage() {
    const { tasks } = useContext(GlobalContext);

    return (
        <>
            <div className="container">
                <h2 className=" py-3 text-center">Lista Tasks</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Stato</th>
                            <th scope="col">Data di Creazione</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <TaskRow key={task.id} task={task} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
