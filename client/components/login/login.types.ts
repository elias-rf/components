import { TEvent } from "../../../types";

export type TLoginEvent = TEvent & {
  component: "Login";
  event: "onInputEvent";
};

export type TLoginProps = {
  onInputEvent?: (event: TLoginEvent) => void;
  title?: string;
  loading?: boolean;
  error?: string;
};
