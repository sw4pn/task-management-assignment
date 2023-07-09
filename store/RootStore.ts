import { TaskStore } from "./TaskStore";

export interface IRootStore {
  taskStore: TaskStore;
}

//  Root Store for all other stores
export class RootStore implements IRootStore {
  taskStore: TaskStore;

  constructor() {
    this.taskStore = new TaskStore();
  }
}
