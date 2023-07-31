import { Alert, Snackbar, TAlertColor } from "@/client/components/ui";

export type TToast = {
  open: boolean;
  onClose?: () => void;
  severity?: TAlertColor;
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
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
