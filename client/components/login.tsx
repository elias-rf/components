import { IEvent } from "../../types";
import { useField } from "../lib/hooks/use-field.hook";
import { Button } from "./button";
import { SpinnerIcon } from "./spinner-icon";
import { Textbox } from "./textbox";

interface LoginProps {
  onInput?: (e: IEvent) => void;
  title?: string;
  loading?: boolean;
  error?: string;
}

export function Login(props: LoginProps) {
  const {
    title = "Login",
    loading = false,
    error,
    onInput = () => null,
  } = props;

  const fieldUser = useField("");
  const fieldPassword = useField("");

  const handleLogin = () =>
    onInput({
      name: title,
      value: { user: fieldUser.value, password: fieldPassword.value },
      targetName: "Login",
      targetProps: props,
      eventName: "input",
    });

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
      <div className="flex flex-col w-64 px-4 py-4 bg-white border border-gray-400 rounded-lg">
        <div className="mb-4 text-2xl font-semibold text-center">{title}</div>
        <div className="flex flex-col mb-2">
          <Textbox
            {...fieldUser.register()}
            name="nome"
            placeholder="Nome"
          />
        </div>
        <div className="flex flex-col mb-6">
          <Textbox
            type="password"
            {...fieldPassword.register()}
            name="password"
            placeholder="Senha"
          />
        </div>
        <div className="flex flex-col mb-2">
          <div className="relative flex">
            <Button
              name="login"
              onClick={handleLogin}
            >
              <div className="inline-flex flex-nowrap">
                Login
                <div className="mt-1 ml-1">
                  <SpinnerIcon show={loading} />
                </div>
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col text-red-600">{error}</div>
      </div>
    </div>
  );
}
