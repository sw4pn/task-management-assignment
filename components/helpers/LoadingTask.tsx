import { Skeleton } from "../ui/Skeleton";

const LoadingTask = () => {
  return (
    <>
      <div className="flex flex-col justify-between gap-5 px-2 py-3 my-5 border sm:gap-0 sm:flex-row rounded-xl">
        <div className="flex flex-col flex-1 gap-2 pl-3">
          <Skeleton className="h-4 w-[150px] sm:w-[250px]" />
          <Skeleton className="h-4 w-[150px] sm:w-[250px]" />
        </div>
        <div className="flex items-center justify-center gap-3 px-2">
          <Skeleton className="h-8 w-[250px]" />
        </div>
      </div>
    </>
  );
};

export default LoadingTask;
