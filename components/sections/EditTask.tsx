"use client";

import { Button } from "../ui/Button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "../ui/AlertDialog";
import { FaEdit } from "react-icons/fa";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";

import { ITask } from "@/store/TaskStore";
import { useStore } from "@/hooks/useStore";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const EditTask = ({ task }: { task: ITask }) => {
  const {
    rootStore: { taskStore },
  } = useStore();

  const [disabled, setDisabled] = useState(true);

  const [details, setDetails] = useState({
    title: task.title,
    description: task.description,
    status: task.status,
  });

  useEffect(() => {
    if (details.title.trim() === "" || details.description.trim() === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [details]);

  const handleEdit = () => {
    // Validate title and description
    if (details.title.trim() === "" || details.description.trim() === "") {
      toast.error("Title and description cannot be empty.");
      return;
    }
    taskStore.updateTask(task.id, details);
    toast.success("Task updated successfully");
  };

  const handleChange = (val: {}) => {
    setDetails({ ...details, ...val });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="icon">
          <FaEdit className="w-4 h-4 text-slate-500" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit task</AlertDialogTitle>
          <AlertDialogDescription>
            Update the title and description of task.
            <p className="text-sm">* fields cannot be empty.</p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="edit_title">Title:</Label>
            <Input
              id="edit_title"
              placeholder="Title"
              className="max-w-xs"
              value={details.title}
              onChange={(e) => handleChange({ title: e.target.value })}
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="edit_desc">Description:</Label>
            <Input
              id="edit_desc"
              placeholder="Description"
              className="max-w-xs"
              value={details.description}
              onChange={(e) => handleChange({ description: e.target.value })}
            />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={disabled} onClick={handleEdit}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditTask;
