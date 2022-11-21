import { TBadgeClose } from "./badge.types";

export function BadgeClose({ onCloseEvent, name }: TBadgeClose) {
  function handleClose(e: React.SyntheticEvent) {
    e.stopPropagation();
    if (onCloseEvent) {
      onCloseEvent({
        name,
        component: "Badge",
        event: "onCloseEvent",
        value: "",
      });
    }
  }

  if (onCloseEvent === undefined) return null;

  return (
    <button
      type="button"
      onClick={handleClose}
      className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900"
      data-dismiss-target="#badge-dismiss-default"
      aria-label="Remove"
    >
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
      </svg>
      <span className="sr-only">Remove badge</span>
    </button>
  );
}
