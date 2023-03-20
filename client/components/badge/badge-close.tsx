import { CloseIcon } from "../icons/close-icon";

export type TBadgeClose = {
  name: string;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>, name: string) => void;
};

export function BadgeClose({ onClose, name }: TBadgeClose) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>, name: string) {
    e.stopPropagation();
    if (onClose) {
      onClose(e, name);
    }
  }

  if (onClose === undefined) return null;

  return (
    <button
      type="button"
      onClick={(e) => handleClick(e, name)}
      className={
        "inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900"
      }
      aria-label="Remove"
      data-testid="badge-button-close"
      name={name}
    >
      <CloseIcon />
      <span className={"sr-only"}>Remove badge</span>
    </button>
  );
}
