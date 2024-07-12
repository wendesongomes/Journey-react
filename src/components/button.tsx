import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-lg px-5 font-medium flex items-center justify-center gap-2",
  variants: {
    variant: {
      primary: "bg-lime-300 text-lime-950 hover:bg-lime-400",
      secondary: "bg-zinc-800 text-zinc-200s hover:bg-zinc-700",
    },

    size: {
      default: "py-2",
      full: "w-full h-11",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={buttonVariants({ variant: props.variant, size: props.size })}
    >
      {props.children}
    </button>
  );
}
