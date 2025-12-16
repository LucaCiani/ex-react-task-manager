import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

export default function TaskListPage() {
    const { tasks } = useContext(GlobalContext);
    console.log(tasks);

    return (
        <>
            <h2>Lista Tasks</h2>
        </>
    );
}
