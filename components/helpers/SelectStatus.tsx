"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "../ui/Select";
import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react-lite";
import { toast } from "react-hot-toast";

const SelectStatus = observer(
  ({
    id,
    status,
    handleChange,
  }: {
    id?: number;
    status?: string;
    handleChange?: (val: any) => void;
  }) => {
    const {
      rootStore: { taskStore },
    } = useStore();

    const currentStatus = status ? status : "todo";

    // change the status of the task.
    const handleStatusChange = (val: any) => {
      // change only if task exists
      if (id) {
        taskStore.updateTask(id, { status: val });

        toast.success("Task Status changed successfully");
      }
    };

    // select the task status for add tasks
    const handleValueChange = (val: any) => {
      // check if adding or updating task
      if (handleChange) {
        //adding the task
        handleChange(val);
      } else {
        // updating the task
        handleStatusChange(val);
      }
    };

    return (
      <Select onValueChange={handleValueChange} value={currentStatus}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Change Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="todo">To Do</SelectItem>
            <SelectItem value="progress">In Progress</SelectItem>
            <SelectItem value="done">Completed</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
);

export default SelectStatus;
