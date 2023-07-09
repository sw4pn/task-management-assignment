import Link from "next/link";
import Container from "@/components/commons/Container";
import { buttonVariants } from "@/components/ui/Button";
import TaskList from "@/components/sections/TaskList";

export default function Home() {
  return (
    <Container>
      <div className="flex justify-between">
        <Link
          href="/add-task"
          className={buttonVariants({ variant: "default" })}>
          Add Task
        </Link>
        <div className="text-neutral-600 text-sm max-w-sm italic font-mont">
          {" "}
          Task are automatically sorted by: ToDo, In Progress, Completed
        </div>
      </div>

      <TaskList />
    </Container>
  );
}
