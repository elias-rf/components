import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Heading, useLocale } from 'react-aria-components'
import { Button } from './button.jsx'

export function CalendarHeader() {
  let { direction } = useLocale()

  return (
    <header className="flex w-full items-center gap-1 px-1 pb-4">
      <Button
        variant="icon"
        slot="previous"
      >
        {direction === 'rtl' ? (
          <ChevronRight aria-hidden />
        ) : (
          <ChevronLeft aria-hidden />
        )}
      </Button>
      <Heading className="mx-2 flex-1 text-center text-xl font-semibold text-zinc-900 dark:text-zinc-200" />
      <Button
        variant="icon"
        slot="next"
      >
        {direction === 'rtl' ? (
          <ChevronLeft aria-hidden />
        ) : (
          <ChevronRight aria-hidden />
        )}
      </Button>
    </header>
  )
}
