type TIfProps = {
  condition: boolean;
  children: React.ReactNode;
};

export function If({ condition, children }: TIfProps) {
  if (condition) return <>{children}</>;
  return null;
}
