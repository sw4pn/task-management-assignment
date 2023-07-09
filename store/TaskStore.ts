import { makeObservable, observable, action } from "mobx";

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: string;
}

export class TaskStore {
  taskList: ITask[] = [];
  task: ITask = this.resetTaskData();

  resetTaskData() {
    return {
      // Generate a unique id using timestamp
      id: Date.now(),
      title: "",
      description: "",
      status: "",
    };
  }

  constructor() {
    makeObservable(this, {
      taskList: observable,
      task: observable,
      resetTaskData: action,
      addTask: action,
      updateTask: action,
      deleteTask: action,
      getTasks: action,
    });
  }

  addTask() {
    this.taskList.push(this.task);
    // reset current task
    this.task = this.resetTaskData();
    // Save taskList to localStorage after adding a task
    this.saveTaskListToLocalStorage();
  }

  updateTask(taskId: number, updatedFields: Partial<ITask>) {
    const taskToUpdate = this.taskList.find((task) => task.id === taskId);
    if (taskToUpdate) {
      Object.assign(taskToUpdate, updatedFields);
      // save to local storage
      this.saveTaskListToLocalStorage();
    }
  }

  deleteTask = (id: number) => {
    this.taskList = this.taskList.filter((task) => task.id !== id);
    // Save taskList to localStorage after deleting a task
    this.saveTaskListToLocalStorage();
  };

  getTasks = () => {
    // load tasks from localStorage
    this.loadTaskListFromLocalStorage();
  };

  private saveTaskListToLocalStorage() {
    try {
      localStorage.setItem("taskList", JSON.stringify(this.taskList));
    } catch (err: any) {
      console.error("Error saving taskList to localStorage:", err);
    }
  }

  private loadTaskListFromLocalStorage() {
    try {
      const taskListString = localStorage.getItem("taskList");
      if (taskListString) {
        this.taskList = JSON.parse(taskListString);
      }
    } catch (err: any) {
      console.error("Error retrieving taskList from localStorage:", err);
    }
  }
}
