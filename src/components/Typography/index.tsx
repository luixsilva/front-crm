import { cn } from "../../lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "code";
  color?: "text-foreground" | "primary";
  children: React.ReactNode;
}

export const Typography = ({
  variant = "p",
  className,
  children,
  color = "text-foreground",
  ...props
}: TypographyProps) => {
  const Component = variant;

  const baseStyles = "text-foreground";

  const variantStyles = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    p: "leading-7 [&:not(:first-child)]:mt-6",
    blockquote: "mt-6 border-l-2 pl-6 italic",
    code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  };

  const colorsStyles = {
    "text-foreground": "text-foreground",
    primary: "text-gray-500",
  };

  return (
    <Component
      className={cn(
        baseStyles,
        variantStyles[variant],
        colorsStyles[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
