import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("font-sans", {
  variants: {
    size: {
      xs: "text-xs", // 12px
      sm: "text-sm", // 14px
      base: "text-base", // 16px (default)
      lg: "text-lg", // 18px
      xl: "text-xl", // 20px
      "2xl": "text-2xl", // 24px
      "3xl": "text-3xl", // 30px
      "4xl": "text-4xl", // 36px
      "5xl": "text-5xl", // 48px
    },
    weight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
  },
});

type AsElement =
  | "p"
  | "span"
  | "div"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "label"
  | "li"
  | "a";

interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: AsElement;
  children: React.ReactNode;
  color?: string;
  handleClick?: () => void;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({
    className,
    as: Component = "p",
    size,
    weight,
    color,
    children,
    ...props
  }) => {
    return (
      <Component
        className={twMerge(
          textVariants({ size, weight, className }),
          color ? `text-${color}` : "",
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
Text.displayName = "Text";

export { Text, textVariants };
