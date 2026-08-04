import * as Lucide from "lucide-react";
import type { LucideProps } from "lucide-react";

const iconMap = Lucide as unknown as Record<
  string,
  React.ComponentType<LucideProps>
>;

export function DynamicIcon({
  name,
  className,
  ...props
}: { name: string } & LucideProps) {
  const Icon = iconMap[name] || Lucide.Circle;
  return <Icon className={className} aria-hidden {...props} />;
}
