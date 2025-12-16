// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import TaskListPage from "./assets/pages/TaskListPage";
import AddListPage from "./assets/pages/AddListPage";
import { GlobalProvider } from "./GlobalContext";

function App() {
    return (
        <>
            <GlobalProvider>
                <BrowserRouter>
                    <nav className="navbar navbar-expand-lg bg-body-secondary">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/">
                                Homepage
                            </NavLink>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="task-list"
                                        >
                                            Tasks
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="add-task"
                                        >
                                            Add Task
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/" Component={HomePage} />
                        <Route path="task-list" Component={TaskListPage} />
                        <Route path="add-task" Component={AddListPage} />
                    </Routes>
                </BrowserRouter>
            </GlobalProvider>
        </>
    );
}

export default App;
