import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const tasksApiUrl = `${import.meta.env.VITE_API_URL}/tasks`;

function GlobalProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(tasksApiUrl)
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalProvider };
