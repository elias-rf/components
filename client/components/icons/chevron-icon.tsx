// https://icon-sets.iconify.design/material-symbols/chevron-right-rounded/
export type TChevronIconProps = {
  rotate: 0 | 90 | 180 | 270;
};

export function ChevronIcon({ rotate = 0 }: TChevronIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g transform={`rotate(${rotate} 12 12)`}>
        <path
          fill="currentColor"
          d="M8.7 17.3q-.275-.275-.275-.7q0-.425.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.6 4.6q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275q-.425 0-.7-.275Z"
        />
      </g>
    </svg>
  );
}