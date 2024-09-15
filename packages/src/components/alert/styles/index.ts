import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tw-merge";
 
const AlertVariants = cva(["your", "base", "classes", "w-"], {
  variants: {
    intent: {
      primary: ["your", "primary", "classes"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});
 
export type AlertVariants = VariantProps<typeof AlertVariants>
 
export const Alert = (variants: AlertVariants) => twMerge(AlertVariants(variants));