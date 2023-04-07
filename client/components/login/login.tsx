import { Button, Space, Text, TextInput, Title } from "@mantine/core";
import React from "react";

export type TLoginProps = {
  onInput?: (e: { user: string; password: string }) => void;
  title?: string;
  loading?: boolean;
  error?: string;
};

export function Login(props: TLoginProps) {
  const {
    title = "Login",
    loading = false,
    error,
    onInput = () => null,
  } = props;
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState("");
  function handleLogin() {
    onInput({ user, password });
  }

  return (
    <div>
      <Title
        order={3}
        align="center"
      >
        {title}
      </Title>

      <TextInput
        type="text"
        label="Nome"
        value={user}
        onChange={(event) => setUser(event.currentTarget.value)}
      />

      <Space h="xs" />

      <TextInput
        type="password"
        label="Senha"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />

      <Space h="xs" />
      <Button
        loading={loading}
        loaderPosition="right"
        onClick={handleLogin}
      >
        Login
      </Button>
      <Text c={"red"}>{error}</Text>
    </div>
  );
}
