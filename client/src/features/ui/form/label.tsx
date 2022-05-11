import React from "react";

interface LabelProps {
  children: string;
}

export default function Label({ children, ...other }: LabelProps) {
  return (
    <label className="h-6" {...other}>
      {children}
    </label>
  );
}
