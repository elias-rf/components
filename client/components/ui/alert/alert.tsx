import MuiAlert, { AlertColor } from "@mui/material/Alert";

export type TAlertColor = AlertColor;

export function Alert(props: any) {
  return <MuiAlert {...props} />;
}
