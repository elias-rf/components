import { TFormfieldProps } from "./form.types";

export function Formfield({ className, children }: TFormfieldProps) {
  return <div className={("flex flex-col", className)}>{children}</div>;
}
