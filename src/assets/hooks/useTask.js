import { useEffect, useState } from "react";

const tasksApiUrl = `${import.meta.env.VITE_API_URL}/tasks`;

export default function useTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(tasksApiUrl)
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error(error));
    }, []);

    const addTask = () => {};

    const removeTask = () => {};

    const updateTask = () => {};

    return { tasks, addTask, removeTask, updateTask };
}
