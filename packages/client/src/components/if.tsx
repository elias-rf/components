interface IfProps {
  condition: boolean;
  children: React.ReactNode;
}

export function If({ condition, children }: IfProps) {
  if (condition) return <>{children}</>;
  return null;
}
