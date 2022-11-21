interface LabelErrorProps {
  children: string;
}

export function LabelError({ children }: LabelErrorProps) {
  if (children) {
    return <div className="h-4 text-sm italic text-red-400">{children}</div>;
  }
  return null;
}
