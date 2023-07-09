"use client";
import { Suspense, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { twMerge } from "tailwind-merge";

import { useStore } from "@/hooks/useStore";
import LoadingTask from "@/components/helpers/LoadingTask";
import EditTask from "@/components/sections/EditTask";
import DeleteTask from "@/components/sections/DeleteTask";
import SelectStatus from "@/components/helpers/SelectStatus";

const TaskList = observer(() => {
  const {
    rootStore: { taskStore },
  } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load task list from localStorage on the client-side
    const fetchData = async () => {
      await taskStore.getTasks();
      setLoading(false);
    };

    fetchData();
  }, [taskStore]);

  // Sort task list by status
  const sortedTaskList = taskStore.taskList
    ? taskStore.taskList.slice().sort((a, b) => {
        const statusOrder: any = { todo: 1, progress: 2, done: 3 };
        return statusOrder[a.status] - statusOrder[b.status];
      })
    : [];

  return (
    <div className="p-2 mt-5">
      {loading ? (
        <>
          <LoadingTask />
          <LoadingTask />
        </>
      ) : sortedTaskList.length > 0 ? (
        sortedTaskList.map((task, index) => {
          const bgColor =
            task.status === "done"
              ? "opacity-70 bg-neutral-50"
              : task.status === "progress"
              ? ""
              : "border-orange-300";

          return (
            <div
              key={index}
              className={twMerge(
                "flex flex-col justify-between gap-5 px-2 py-3 my-2 border sm:flex-row sm:gap-0 rounded-xl",
                bgColor
              )}>
              <div className="flex-1 pl-3">
                <h4 className="font-semibold font-mont">{task.title}</h4>
                <p className="text-sm text-neutral-400 ">{task.description}</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 px-2">
                <div className="">
                  <SelectStatus id={task.id} status={task.status} />
                </div>

                <EditTask task={task} />
                <DeleteTask task={task} />
              </div>
            </div>
          );
        })
      ) : (
        <div className="p-4 my-4 font-semibold text-center text-teal-700 border ">
          Task List is Empty.
          <p className="block pt-2 text-sm font-normal text-neutral-400">
            Add a task to get started.
          </p>
        </div>
      )}
    </div>
  );
});

export default TaskList;
