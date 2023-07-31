import MuiButton from "@mui/material/Button";

type TButtonColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

type TButtonSize = "small" | "medium" | "large";

type TButtonVariant = "contained" | "outlined" | "text";

type TButtonProps = {
  children: string;
  color: TButtonColor;
  disabled: boolean;
  endIcon: any;
  startIcon: any;
  fullWidth: boolean;
  href: string;
  size: TButtonSize;
  variant: TButtonVariant;
  onClick: (e: any) => void;
};

export function Button(props: TButtonProps) {
  return (
    <>
      <MuiButton {...props} />
    </>
  );
}
