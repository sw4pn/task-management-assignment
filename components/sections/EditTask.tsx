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
import { useState } from "react";

const EditTask = ({ task }: { task: ITask }) => {
  const {
    rootStore: { taskStore },
  } = useStore();

  const [details, setDetails] = useState({
    title: task.title,
    description: task.description,
    status: task.status,
  });

  const handleEdit = () => {
    taskStore.updateTask(task.id, details);
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
            <Label htmlFor="edit_title">Description:</Label>
            <Input
              id="edit_title"
              placeholder="Title"
              className="max-w-xs"
              value={details.description}
              onChange={(e) => handleChange({ description: e.target.value })}
            />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleEdit}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditTask;
