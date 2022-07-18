import { useForm } from "react-hook-form";
import { Button } from "./button";
import { Input } from "./input";
import { SpinnerIcon } from "./spinner-icon";

export const loginActionTypes = { submit: "SUBMIT" };

export type LoginAction = {
  type: typeof loginActionTypes.submit;
  payload: { user: string; password: string };
};

interface LoginProps {
  dispatch: (action: LoginAction) => void;
  title?: string;
  loading?: boolean;
  error?: string;
}

export function Login({
  dispatch,
  title = "Login",
  loading = false,
  error,
}: LoginProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) =>
    dispatch({ type: loginActionTypes.submit, payload: data });

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
      <div className="flex flex-col w-64 px-4 py-4 bg-white border border-gray-400 rounded-lg">
        <div className="mb-4 text-2xl font-semibold text-center">{title}</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-2">
            <Input {...register("user")} placeholder="Nome" />
          </div>
          <div className="flex flex-col mb-6">
            <Input
              type="password"
              {...register("password")}
              placeholder="Senha"
            />
          </div>
          <div className="flex flex-col mb-2">
            <div className="relative flex">
              <Button type="submit" name="login">
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
        </form>
      </div>
    </div>
  );
}
