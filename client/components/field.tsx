import { Textbox } from "./textbox/textbox";

export function Field({ type, ...props }: any) {
  switch (type) {
    case "boolean":
      return <Textbox type="checkbox" {...props} />;
    default:
      return <Textbox {...props} />;
  }
}