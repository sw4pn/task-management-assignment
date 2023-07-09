import Container from "@/components/commons/Container";
import AddTask from "@/components/sections/AddTask";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import Link from "next/link";

const page = () => {
  return (
    <Container>
      <div className="">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Go Back
        </Link>
      </div>

      <div className="max-w-md mx-auto mt-5">
        <AddTask />
      </div>
    </Container>
  );
};

export default page;
