import type { TFormStatus } from "@/types";
import Button from "@mui/material/Button";
import { UseFormReturn } from "react-hook-form";

export type TButtonNewProps = {
  onClick: () => void;
  form: UseFormReturn<any>;
  status: TFormStatus;
  onStatus: (status: TFormStatus) => void;
  sx?: any;
};
export const ButtonNew = ({
  onStatus,
  status,
  form,
  onClick,
  sx,
}: TButtonNewProps) => {
  function handleButtonNew() {
    onClick();
    form.reset();
    onStatus("new");
  }

  return (
    <Button
      size="small"
      onClick={handleButtonNew}
      variant="outlined"
      disabled={status !== "view"}
      sx={sx}
    >
      Novo
    </Button>
  );
};
