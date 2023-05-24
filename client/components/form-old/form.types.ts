export type TLabelProps = {
  children: string;
  name: string;
  status?: "success" | "error" | "";
  className?: string;
};

export type TFormfieldProps = {
  className?: string;
  children: React.ReactNode;
};
