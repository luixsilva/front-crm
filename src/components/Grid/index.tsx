import { cn } from "../../lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "stretch";
  children: React.ReactNode;
}

export const Grid = ({
  cols = 1,
  gap = 3,
  align = "start",
  justify = "center",
  children,
  className,
  ...props
}: GridProps) => {
  // Mapeia as propriedades para classes completas do Tailwind CSS
  const colsClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12",
  }[cols];

  const gapClass = {
    0: "gap-0",
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    8: "gap-8",
    10: "gap-10",
    12: "gap-12",
  }[gap];

  const alignClass = {
    start: "items-start", // Alinha os itens ao início (vertical)
    center: "items-center", // Centraliza os itens (vertical)
    end: "items-end", // Alinha os itens ao final (vertical)
    stretch: "items-stretch", // Estica os itens (vertical)
  }[align];

  const justifyClass = {
    start: "justify-items-start", // Alinha os itens ao início (horizontal)
    center: "justify-items-center", // Centraliza os itens (horizontal)
    end: "justify-items-end", // Alinha os itens ao final (horizontal)
    stretch: "justify-items-stretch", // Estica os itens (horizontal)
  }[justify];

  const gridClasses = cn(
    "grid",
    colsClass,
    gapClass,
    alignClass,
    justifyClass,
    className
  );

  return (
    <div {...props} className={gridClasses}>
      {children}
    </div>
  );
};
