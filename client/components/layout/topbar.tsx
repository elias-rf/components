import Typography from "@mui/material/Typography";

export const Topbar = ({ onClick }: { onClick: (to: string) => void }) => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      onClick={() => onClick("/")}
    >
      Intranet Visiontech
    </Typography>
  );
};
