import { useState } from "react";

/**
 * Defines the properties required by the TaskForm component.
 */
interface TaskFormProps {
    onAddTask: (title: string, description?: string) => void;
}

/**
 * Displays input fields for creating a new task.
 * Manages the task title and description.
 * @param props - Contains the function for adding a task.
 * @returns The task creation interface.
 */
function TaskForm({ onAddTask }: TaskFormProps) {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    /**
     * Validates the task title and adds a new task.
     * Clears the input fields after adding the task.
     */
    function handleSubmit(): void {
        if (title.trim() === "") {
            return;
        }

        onAddTask(title.trim(), description.trim());

        setTitle("");
        setDescription("");
    }

    return (
        <div className="task-form">
            <h2>Create a new task</h2>

            <input
                type="text"
                placeholder="Task name"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <textarea
                placeholder="Description (optional)"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <button onClick={handleSubmit}>
                + Add Task
            </button>
        </div>
    );
}

export default TaskForm;