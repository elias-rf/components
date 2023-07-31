import { Box, Button, TextField, Typography } from "@/client/components/ui";
import { useForm } from "@/client/lib/hooks/use-form";
import { zValidate, zd } from "@/utils/zod/zod";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

export type TLoginProps = {
  onInput: ({ user, password }: { user: string; password: string }) => void;
};

export function Login({ onInput }: TLoginProps) {
  const form = useForm({
    onSubmit,
    initialValues: {
      user: "",
      password: "",
    },
  });

  function onSubmit(values: { [field: string]: string }) {
    const { user, password } = values;
    onInput({ user, password });
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
        >
          Login
        </Typography>
        <Box
          component="div"
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="user"
            label="Usuário"
            autoFocus
            {...form.getInputProps(
              "user",
              zValidate(
                zd.string().min(3, "o usuário deve ter 3 caracteres ou mais")
              )
            )}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Senha"
            type="password"
            autoComplete="current-password"
            {...form.getInputProps(
              "password",
              zValidate(
                zd.string().min(3, "a senha deve ter 3 caracteres ou mais")
              )
            )}
          />
          <Button
            onClick={() => form.submit()}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
