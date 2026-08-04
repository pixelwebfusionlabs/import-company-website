import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { cn } from "@/lib/utils";

export function IconBadge({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex size-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-md shadow-brand-pink/15",
        className,
      )}
    >
      <DynamicIcon name={name} className="size-5" />
    </div>
  );
}
