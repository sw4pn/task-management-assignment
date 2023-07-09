"use client";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useStore } from "@/hooks/useStore";
import { FormEvent, useState } from "react";
import { observer } from "mobx-react-lite";
import SelectStatus from "../helpers/SelectStatus";
import { toast } from "react-hot-toast";

const TASK_DEFAULTS = {
  title: "",
  description: "",
  status: "todo",
};

const AddTask = observer(() => {
  const {
    rootStore: { taskStore },
  } = useStore();

  // save initial values as state
  const [taskDetails, setTaskDetails] = useState(TASK_DEFAULTS);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Assign task values to taskStore.task
    taskStore.task.title = taskDetails.title;
    taskStore.task.description = taskDetails.description;
    taskStore.task.status = taskDetails.status;
    // Call the addTask method
    taskStore.addTask();
    toast.success("Task successfully added.");
    setTaskDetails(TASK_DEFAULTS);
  };

  const updateTaskDetails = (property: string, value: string) => {
    setTaskDetails((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-xs gap-4">
      <Input
        id="add_title"
        placeholder="Title"
        value={taskDetails.title}
        onChange={(e) => updateTaskDetails("title", e.target.value)}
      />
      <Input
        id="add_title"
        placeholder="Description"
        value={taskDetails.description}
        onChange={(e) => updateTaskDetails("description", e.target.value)}
      />
      <SelectStatus
        status={taskDetails.status}
        handleChange={(val) => updateTaskDetails("status", val)}
      />

      <Button type="submit">Add Task</Button>
    </form>
  );
});

export default AddTask;
