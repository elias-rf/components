import { Button } from "./form";
import Input from "./input";
import React from "react";
import SpinnerIcon from "./spinner-icon";

interface LoginProps {
  onChange: ({ user, password }: { user: string; password: string }) => void;
  title: string;
  loading: boolean;
  error: string;
}

export default function Login({
  onChange,
  title = "Login",
  loading = false,
  error,
}: LoginProps) {
  const [user, setUser] = React.useState({ user: "", password: "" });

  const handleChange = ({ field, value }: { field: string; value: string }) => {
    setUser({ ...user, [field]: value });
  };

  const handleClick = () => {
    onChange(user);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
      <div className="flex flex-col w-64 px-4 py-4 bg-white border border-gray-400 rounded-lg">
        <div className="mb-4 text-2xl font-semibold text-center">{title}</div>
        <div className="">
          <div className="flex flex-col mb-2">
            <Input
              onChange={handleChange}
              field="user"
              placeholder="Nome"
              value={user.user}
            />
          </div>
          <div className="flex flex-col mb-6">
            <Input
              type="password"
              field="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Senha"
            />
          </div>
          <div className="flex flex-col mb-2">
            <div className="relative flex">
              <Button onClick={handleClick} name="login">
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
    </div>
  );
}
