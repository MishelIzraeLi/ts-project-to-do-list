import type { Task } from "../types/Task";

/**
 * Defines the properties required by the TaskItem component.
 */
interface TaskItemProps {
    task: Task;
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
}

/**
 * Displays an individual task, including its title and description.
 * Allows the user to delete the task or change its completion status.
 * @param props - The task object and its action functions.
 * @returns An individual task item.
 */
function TaskItem({ task, onDelete, onToggle }: TaskItemProps) {
    return (
        <li className={`task-item ${task.completed ? "completed" : ""}`}>
            <input
                type="checkbox"
                checked={task.completed}
                aria-label={`Mark ${task.title} as ${task.completed ? "pending" : "completed"}`}
                onChange={() => onToggle(task.id)}
            />

            <div className="task-content">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>

            <button
                className="delete-button"
                onClick={() => onDelete(task.id)}
            >
                Delete
            </button>
        </li>
    );
}

export default TaskItem;