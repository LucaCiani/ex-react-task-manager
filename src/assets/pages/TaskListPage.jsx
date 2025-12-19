import { memo, useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

export default function TaskListPage() {
    const { tasks } = useContext(GlobalContext);

    const ShowTasks = memo(() => {
        return (
            <>
                {tasks.map((task) => {
                    return (
                        <tr key={task.id}>
                            <th scope="row">{task.id}</th>
                            <td>{task.title}</td>
                            <td
                                className={
                                    task.status === "To do"
                                        ? "table-danger"
                                        : task.status === "Doing"
                                        ? "table-warning"
                                        : "table-success"
                                }
                            >
                                {task.status}
                            </td>
                            <td>{task.createdAt.slice(0, 10)}</td>
                        </tr>
                    );
                })}
            </>
        );
    });

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
                        <ShowTasks />
                    </tbody>
                </table>
            </div>
        </>
    );
}
