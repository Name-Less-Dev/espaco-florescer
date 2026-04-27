import { cn } from "@/lib/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({
  className,
  variant = "primary",
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "h-14 px-7 rounded-full",
        "text-sm font-medium whitespace-nowrap",
        "transition-all duration-300",
        "select-none",
        variant === "primary" &&
          "bg-primary text-white hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)]",
        variant === "ghost" &&
          "border border-[var(--color-line)] bg-white text-dark hover:bg-soft",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}