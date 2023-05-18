import Chip from "@mui/material/Chip";

export type TBadgeProps = {
  children: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

/**
 * Componente Badge
 */
export function BadgeClose({
  children,
  onClick,
  onClose,

  ...props
}: TBadgeProps) {
  function handleClick(e: any) {
    if (onClick) {
      onClick(e);
    }
  }

  function handleClose(e: any) {
    e.stopPropagation();
    if (onClose) {
      onClose(e);
    }
  }

  return (
    <Chip
      onClick={handleClick}
      onDelete={handleClose}
      label={children}
    ></Chip>
  );
}
