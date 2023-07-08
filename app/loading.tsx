import { Skeleton } from "@/components/ui/Skeleton";

const loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Skeleton className="h-10 max-w-md" />
      <Skeleton className="h-10 max-w-md" />
      <Skeleton className="h-10 max-w-md" />
    </div>
  );
};

export default loading;
