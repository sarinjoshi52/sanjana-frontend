import { cn } from "cn";
import { Card, CardDescription, CardTitle } from "../ui/card";

type Props = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export const CustomCard = ({ className, children, onClick }: Props) => {
  return (
    <Card
      onClick={onClick}
      className={cn("rounded-2xl border border-gray-50 bg-white", className)}
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
    <CardTitle className={cn("font-bold text-base", className)}>
      {children}
    </CardTitle>
  );
};

export const CustomCardDescription = ({ className, children }: Props) => {
  return (
    <CardDescription className={cn("text-sm", className)}>
      {children}
    </CardDescription>
  );
};
