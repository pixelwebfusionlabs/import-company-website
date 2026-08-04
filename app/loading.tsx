import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-4 pt-32 pb-20 sm:px-6 lg:px-8">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-14 w-full max-w-2xl" />
      <Skeleton className="h-6 w-full max-w-xl" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/3] rounded-3xl" />
        ))}
      </div>
    </div>
  );
}
