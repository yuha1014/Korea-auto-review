import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold", {
  variants: {
    variant: {
      default: "bg-emerald-50 text-emerald-800",
      warning: "bg-amber-50 text-amber-800",
      danger: "bg-rose-50 text-rose-700",
      neutral: "bg-slate-100 text-slate-600",
      outline: "border border-slate-200 bg-white text-slate-600",
    },
  },
  defaultVariants: { variant: "default" },
});

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
