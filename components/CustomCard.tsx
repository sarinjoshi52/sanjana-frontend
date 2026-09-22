import { cn } from "cn";
import { Card, CardDescription, CardTitle } from "./ui/card";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const CustomCard = ({ className, children }: Props) => {
  return (
    <Card
      className={cn("rounded-2xl border border-[#E2E8F0] bg-white", className)}
    >
      {children}
    </Card>
  );
};

export const CustomCardIcon = ({ className, children }: Props) => {
  return <span className={cn(className)}>{children}</span>;
};

export const CustomCardTitle = ({ className, children }: Props) => {
  return (
    <CardTitle className={cn("font-bold text-sm", className)}>
      {children}
    </CardTitle>
  );
};

export const CustomCardDescription = ({ className, children }: Props) => {
  return (
    <CardDescription className={cn("text-xs", className)}>
      {children}
    </CardDescription>
  );
};
