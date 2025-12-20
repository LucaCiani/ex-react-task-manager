import { memo } from "react";

const TaskRow = memo(({ task }) => {
    return (
        <tr>
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
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    );
});

export default TaskRow;
