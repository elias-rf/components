// @ts-check
import { cn } from '../lib/utils.mjs'

/**
 * @property {object} [props]
 * @property {string} [props.className]
 */
export function NewDocIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('inline-block h-5 w-5', className)}
      fill="currentColor"
    >
      <path
        fill="currentColor"
        d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h5q.425 0 .713.287Q11 3.575 11 4t-.287.712Q10.425 5 10 5H5v14h14v-5q0-.425.288-.713Q19.575 13 20 13t.712.287Q21 13.575 21 14v5q0 .825-.587 1.413Q19.825 21 19 21ZM16 8h-2q-.425 0-.712-.287Q13 7.425 13 7t.288-.713Q13.575 6 14 6h2V4q0-.425.288-.713Q16.575 3 17 3t.712.287Q18 3.575 18 4v2h2q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8h-2v2q0 .425-.288.712Q17.425 11 17 11t-.712-.288Q16 10.425 16 10Z"
      />
    </svg>
  )
}
