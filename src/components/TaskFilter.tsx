import type { Filter } from "../types/Filter";

/**
 * Defines the properties required by the TaskFilter component.
 */
interface TaskFilterProps {
    filter: Filter;
    onFilterChange: (filter: Filter) => void;
}

/**
 * Displays buttons for filtering tasks by completion status.
 * Disables the button of the currently selected filter.
 * @param props - The current filter and filter update function.
 * @returns The task filtering interface.
 */
function TaskFilter({ filter, onFilterChange }: TaskFilterProps) {
    return (
        <div className="task-filter">
            <button
                disabled={filter === "all"}
                onClick={() => onFilterChange("all")}
            >
                All
            </button>

            <button
                disabled={filter === "completed"}
                onClick={() => onFilterChange("completed")}
            >
                Completed
            </button>

            <button
                disabled={filter === "pending"}
                onClick={() => onFilterChange("pending")}
            >
                Pending
            </button>
        </div>
    );
}

export default TaskFilter;