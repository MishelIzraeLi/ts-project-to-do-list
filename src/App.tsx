import { useState, useEffect } from "react";
import type { Task } from "./types/Task";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import type { Filter } from "./types/Filter";
import TaskFilter from "./components/TaskFilter";
import QuoteBox from "./components/QuoteBox";

/**
 * Main application component.
 * Manages tasks, filtering and localStorage.
 * @returns The main application interface.
 */
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  /**
   * Loads saved tasks from localStorage
   * when the application is first mounted.
   */
  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");

      if (savedTasks) {
        const parsedTasks: Task[] = JSON.parse(savedTasks);
        setTasks(parsedTasks);
      }
    } catch (error) {
      console.error("Failed to load tasks:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  /**
   * Saves tasks to localStorage whenever the task list changes.
   * Waits until the initial loading process is completed.
   */
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      } catch (error) {
        console.error("Failed to save tasks:", error);
      }
    }
  }, [tasks, isLoaded]);

  /**
   * Creates a new task with a unique ID and adds it to the list.
   * @param title - The name of the new task.
   * @param description - An optional description of the task.
   */
  function addTask(title: string, description?: string): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
      completed: false
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  /**
   * Removes a task from the task list using its ID.
   * @param id - The unique identifier of the task to delete.
   */
  function deleteTask(id: string): void {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== id)
    );
  }

  /**
   * Changes the completion status of a specific task.
   * @param id - The unique identifier of the task to update.
   */
  function toggleTask(id: string): void {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  /**
   * Filters the tasks according to the selected filter.
   * The original task list remains unchanged.
   */
  const filteredTasks: Task[] = tasks.filter(task => {
    if (filter === "completed") {
      return task.completed;
    }

    if (filter === "pending") {
      return !task.completed;
    }

    return true;
  });

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My To-Do List</h1>
      </header>
      <QuoteBox />

      <TaskForm onAddTask={addTask} />

      <div className="tasks-header">
        <h2>Your tasks</h2>

        <p>
          {tasks.length} tasks ·{" "}
          {tasks.filter(task => task.completed).length}
          {" "}completed
        </p>
      </div>

      <TaskFilter
        filter={filter}
        onFilterChange={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
    </div>
  );
}

export default App;