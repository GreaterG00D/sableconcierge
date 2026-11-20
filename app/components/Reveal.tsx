import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

// Plain wrapper. The scroll-in fade was removed because it made sections
// flash (dim to 35% and back) as visitors scrolled.
export default function Reveal({ children, className = "" }: RevealProps) {
  return (
    <div data-reveal className={className}>
      {children}
    </div>
  );
}
