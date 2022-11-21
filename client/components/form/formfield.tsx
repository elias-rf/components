import { twMerge } from "tailwind-merge";
import { TFormfieldProps } from "./form.types";

export function Formfield({ className, children }: TFormfieldProps) {
  return <div className={twMerge("flex flex-col", className)}>{children}</div>;
}
