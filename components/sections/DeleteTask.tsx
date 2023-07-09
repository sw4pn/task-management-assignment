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
import { RiDeleteBinLine } from "react-icons/ri";
import { ITask } from "@/store/TaskStore";
import { useStore } from "@/hooks/useStore";

const DeleteTask = ({ task }: { task: ITask }) => {
  const {
    rootStore: { taskStore },
  } = useStore();

  const handleDelete = () => {
    taskStore.deleteTask(task.id);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="icon">
          <RiDeleteBinLine className="w-4 h-4 text-red-600" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Do you want to delete this task?</AlertDialogTitle>
          <AlertDialogDescription>
            This task will be deleted and will not be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTask;
