import type { Task } from "../types/Task";
import TaskItem from "./TaskItem";

/**
 * Defines the properties required by the TaskList component.
 */
interface TaskListProps {
    tasks: Task[];
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
}

/**
 * Displays a list of tasks using TaskItem components.
 * Displays a message when there are no tasks to show.
 * @param props - The task list and its action functions.
 * @returns The task list or an empty state message.
 */
function TaskList({ tasks, onDelete, onToggle }: TaskListProps) {
    if (tasks.length === 0) {
        return (
            <p className="empty-state">
                No tasks to display.
            </p>
        );
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    );
}

export default TaskList;