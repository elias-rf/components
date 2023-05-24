import { Field } from "@/client/components/form/field";
import { Form } from "@/client/components/form/form";
import { useForm } from "@/client/components/form/use-form";
import { zValidate, zd } from "@/utils/zod/zod";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export type TLoginProps = {
  onInput: ({ user, password }: { user: string; password: string }) => void;
};

export function Login({ onInput }: TLoginProps) {
  const form = useForm(onInput,{
    user: "",
    password: "",
  })

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
          <Form form={form}>
            <Field
              name="user"
              validate={zValidate(zd.string().min(4,'o usuário deve ter 4 caracteres ou mais'))}
              field={(field) => (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="user"
                  label="Usuário"
                  name="user"
                  autoFocus
                  {...field.getInputProps()}
                />
              )} />

            <Field
              name="password"
              validate={zValidate(zd.string().min(4, 'a senha deve ter 4 caracteres ou mais'))}
              field={(field) => (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Senha"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  {...field.getInputProps()}
                />
              )} />
          <Button
            onClick={() => form.submit()}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
          </Form>
        </Box>
      </Box>
    </Container>
  );
}
