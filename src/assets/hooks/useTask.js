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

    const addTask = async (newTask) => {
        const res = await fetch(tasksApiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask),
        });
        const { success, message, task } = await res.json();
        if (!success) throw new Error(message);

        setTasks((prev) => [...prev, task]);
    };

    const removeTask = async (taskId) => {
        const res = await fetch(`${tasksApiUrl}/${taskId}`, {
            method: "DELETE",
        });
        const { success, message } = await res.json();
        if (!success) throw new Error(message);
        setTasks((prev) => prev.filter((t) => t.id !== taskId));
    };

    const updateTask = () => {};

    return { tasks, addTask, removeTask, updateTask };
}
