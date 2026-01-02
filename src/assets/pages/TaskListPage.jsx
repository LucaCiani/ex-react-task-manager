import { useContext, useMemo, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import TaskRow from "../components/TaskRow";

export default function TaskListPage() {
    const { tasks } = useContext(GlobalContext);

    const [sortBy, setSortBy] = useState("createdAt");
    const [sortOrder, setSortOrder] = useState(1);

    const sortIcon = sortOrder === 1 ? "🔽" : "🔼";

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder((prev) => prev * -1);
        } else {
            setSortBy(field);
            setSortOrder(1);
        }
        console.log("Cliccato");
    };

    const sortedTask = useMemo(() => {
        return [...tasks].sort((a, b) => {
            let comparison;

            if (sortBy === "id") {
                comparison = a.id - b.id;
            } else if (sortBy === "title") {
                comparison = a.title.localeCompare(b.title);
            } else if (sortBy === "status") {
                const statusOptions = ["To Do", "Doing", "Done"];
                comparison =
                    statusOptions.indexOf(a.status) -
                    statusOptions.indexOf(b.status);
            } else if (sortBy === "createdAt") {
                const dateA = new Date(a.createdAt).getTime();
                const dateB = new Date(b.createdAt).getTime();
                comparison = dateA - dateB;
            }

            return comparison * sortOrder;
        });
    }, [tasks, sortBy, sortOrder]);

    return (
        <>
            <div className="container">
                <h2 className=" py-3 text-center">Lista Tasks</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" onClick={() => handleSort("id")}>
                                # {sortBy === "id" && sortIcon}
                            </th>
                            <th scope="col" onClick={() => handleSort("title")}>
                                Nome {sortBy === "title" && sortIcon}
                            </th>
                            <th
                                scope="col"
                                onClick={() => handleSort("status")}
                            >
                                Stato {sortBy === "status" && sortIcon}
                            </th>
                            <th
                                scope="col"
                                onClick={() => handleSort("createdAt")}
                            >
                                Data di Creazione{" "}
                                {sortBy === "createdAt" && sortIcon}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedTask.map((task) => (
                            <TaskRow key={task.id} task={task} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
