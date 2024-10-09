import { Card } from "../ui/card"; 
import { Skeleton } from "../ui/skeleton";

export default function CardSkeleton() {
  return (
    <Card className="h-[350px] w-[250px] hover:cursor-pointer">
      <Skeleton className="h-[200px] rounded-md flex justify-center relative">
      </Skeleton>
      <div className="p-2">
        <Skeleton className="flex gap-1 my-2"></Skeleton>
        <Skeleton className="flex flex-col text-sm"></Skeleton>
      </div>
    </Card>
  );
}
