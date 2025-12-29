import { memo } from "react";
import { Link } from "react-router-dom";

const TaskRow = memo(({ task }) => {
    return (
        <tr>
            <th scope="row">{task.id}</th>
            <td>
                <Link
                    to={`/task-list/${task.id}`}
                    className="link-offset-2 link-underline link-underline-opacity-0"
                >
                    <span>{task.title}</span>
                </Link>
            </td>
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
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    );
});

export default TaskRow;
