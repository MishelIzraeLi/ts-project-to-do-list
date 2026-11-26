/**
 * Represents a task in the application.
 */
export interface Task {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
}