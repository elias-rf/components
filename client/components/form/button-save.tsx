import { Button } from "@mui/material";
import type { TFormStatus } from "@/types";
import { UseFormReturn } from "react-hook-form";

export type TButtonSaveProps = {
  onClick: () => void;
  form: UseFormReturn<any>;
  onStatus: (status: TFormStatus) => void;
  sx?: any;
};
export const ButtonSave = ({
  form,
  onStatus,
  onClick,
  sx,
}: TButtonSaveProps) => {
  function handleButtonSave() {
    onClick();
    form.reset();
    onStatus("view");
  }

  return (
    <Button
      size="small"
      onClick={() => form.handleSubmit(handleButtonSave)()}
      variant="outlined"
      disabled={!form.formState.isDirty}
      sx={sx}
    >
      Salvar
    </Button>
  );
};
