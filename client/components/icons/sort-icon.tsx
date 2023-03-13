// https://icon-sets.iconify.design/material-symbols/chevron-right-rounded/
export type TSortIconProps = {
  direction: "up" | "down" | "both" | "none";
  className?: string;
};

export function SortIcon({
  direction = "none",
  className = "",
}: TSortIconProps) {
  if (direction === "up")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className={className}
      >
        <path
          fill="currentColor"
          d="m16 4l7 7l-1.4 1.4L16 6.8l-5.6 5.6L9 11z"
        />
      </svg>
    );
  if (direction === "down")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className={className}
      >
        <path
          fill="currentColor"
          d="m16 28l-7-7l1.4-1.4l5.6 5.6l5.6-5.6L23 21z"
        />
      </svg>
    );
  if (direction === "both")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className={className}
      >
        <path
          fill="currentColor"
          d="m16 28l-7-7l1.41-1.41L16 25.17l5.59-5.58L23 21l-7 7zm0-24l7 7l-1.41 1.41L16 6.83l-5.59 5.58L9 11l7-7z"
        />
      </svg>
    );
  return null;
}
