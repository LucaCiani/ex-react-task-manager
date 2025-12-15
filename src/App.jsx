// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import TaskListPage from "./assets/pages/TaskListPage";
import AddListPage from "./assets/pages/AddListPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">
                            Homepage
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="task-list"
                                    >
                                        Tasks
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink className="nav-link" to="add-task">
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
        </>
    );
}

export default App;
