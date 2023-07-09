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
      </div>

      <TaskList />
    </Container>
  );
}
