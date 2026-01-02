import { useCallback, useContext, useMemo, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import TaskRow from "../components/TaskRow";

function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay);
    };
}

export default function TaskListPage() {
    const { tasks } = useContext(GlobalContext);

    const [searchQuery, setSearchQuery] = useState("");
    const deboucedSearch = useCallback(debounce(setSearchQuery, 500), []);

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

    const filteredAndSortedTasks = useMemo(() => {
        return [...tasks]
            .filter((t) => {
                return t.title
                    .toLowerCase()
                    .includes(searchQuery.toLocaleLowerCase());
            })
            .sort((a, b) => {
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
    }, [tasks, sortBy, sortOrder, searchQuery]);

    return (
        <>
            <div className="container">
                <h2 className=" py-3 text-center">Lista Tasks</h2>
                <input
                    type="text"
                    placeholder="Cerca per titolo..."
                    onChange={(e) => deboucedSearch(e.target.value)}
                />
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
                        {filteredAndSortedTasks.map((task) => (
                            <TaskRow key={task.id} task={task} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
