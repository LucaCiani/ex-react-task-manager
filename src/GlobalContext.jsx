import { createContext } from "react";
import useTasks from "./assets/hooks/useTask";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const taskData = useTasks();

    return (
        <GlobalContext.Provider value={{ ...taskData }}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalProvider };
