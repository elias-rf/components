import Alert, { AlertColor } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export type TToast = {
  open: boolean;
  onClose: () => void;
  severity?: AlertColor;
  message: string;
};

export function Toast({ open, onClose, severity = "info", message }: TToast) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
