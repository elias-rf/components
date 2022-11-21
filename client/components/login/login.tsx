import { useField } from "../../lib/hooks/use-field.hook";
import { Button } from "../button";
import { Textbox } from "../form/textbox";
import { SpinnerIcon } from "../spinner/spinner-icon";
import { TLoginProps } from "./login.types";

export function Login(props: TLoginProps) {
  const {
    title = "Login",
    loading = false,
    error,
    onInputEvent = () => null,
  } = props;

  const fieldUser = useField("");
  const fieldPassword = useField("");

  const handleLogin = () =>
    onInputEvent({
      name: title,
      value: { user: fieldUser.value, password: fieldPassword.value },
      component: "Login",
      event: "onInputEvent",
    });

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
      <div className="flex flex-col w-64 px-4 py-4 bg-white border border-gray-400 rounded-lg">
        <div className="mb-4 text-2xl font-semibold text-center">{title}</div>
        <div className="flex flex-col mb-2">
          <Textbox
            type="text"
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
            <Button name="login" onClickEvent={handleLogin}>
              <div className="inline-flex flex-nowrap">
                Login
                <div className="self-center ml-1">
                  <SpinnerIcon show={loading} className="-mr-4" />
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
