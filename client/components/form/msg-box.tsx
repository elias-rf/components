import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@/client/components/ui";

export const MsgBox = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: (resonse: boolean) => void;
}) => {
  return (
    <Dialog
      open={show}
      onClose={() => handleClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Tem certeza que deseja excluir?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Esta ação não poderá ser desfeita.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={() => handleClose(false)}
        >
          Cancelar
        </Button>
        <Button
          onClick={() => handleClose(true)}
          color="error"
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
