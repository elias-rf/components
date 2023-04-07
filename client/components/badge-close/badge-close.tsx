import { ActionIcon, Badge, BadgeProps, rem } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

export type TBadgeProps = BadgeProps & {
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
  color,
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
    <Badge
      onClick={handleClick}
      color={color || "dark"}
      leftSection={
        <ActionIcon
          size="xs"
          radius="xl"
          variant="transparent"
          color={color || "dark"}
          onClick={handleClose}
        >
          <IconX size={rem(10)} />
        </ActionIcon>
      }
      {...props}
    >
      {children}
    </Badge>
  );
}
