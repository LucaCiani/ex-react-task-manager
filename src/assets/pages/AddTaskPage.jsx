import { useMemo, useRef, useState } from "react";

const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

export default function AddTaskPage() {
    const [taskTitle, setTaskTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef();

    const taskTitleError = useMemo(() => {
        if (!taskTitle.trim()) {
            return "Il titolo non può essere vuoto";
        }
        if ([...taskTitle].some((char) => symbols.includes(char))) {
            return "Il titolo non può contenere simboli";
        }
        return "";
    }, [taskTitle]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskTitleError) {
            return;
        }

        const newTask = {
            title: taskTitle.trim(),
            description: descriptionRef.current.value,
            status: statusRef.current.value,
        };

        console.log(newTask);
    };
    return (
        <>
            <div className="container">
                <h2 className="py-3 text-center">Aggiungi Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Titolo Task</label>
                        <input
                            type="text"
                            className="form-control"
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value);
                            }}
                        />
                        {taskTitleError && (
                            <p style={{ color: "red" }}>{taskTitleError}</p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label>Descrizione</label>
                        <textarea
                            className="form-control"
                            ref={descriptionRef}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Stato</label>
                        <select
                            className="form-select"
                            ref={statusRef}
                            defaultValue="To do"
                        >
                            <option value="To do">To do</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={taskTitleError}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
