import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import TaskListPage from "./assets/pages/TaskListPage";
import AddListPage from "./assets/pages/AddListPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="task-list" Component={TaskListPage} />
                    <Route path="add-task" Component={AddListPage} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
