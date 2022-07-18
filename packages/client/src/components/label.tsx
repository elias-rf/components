interface LabelProps {
  children: string;
}

export function Label({ children, ...other }: LabelProps) {
  return (
    <label
      className="h-6"
      {...other}
    >
      {children}
    </label>
  );
}
