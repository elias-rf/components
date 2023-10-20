import { MoonIcon } from '@/client/components/icons/moon-icon'
import { SunIcon } from '@/client/components/icons/sun-icon'
import { Button } from '@/client/components/ui/button'
import { useEffect, useState } from 'react'
import { useEffectOnce } from 'usehooks-ts'

export function DarkToggle() {
  const [dark, setDark] = useState(false)

  useEffectOnce(() => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDark(true)
    }
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }
  }, [dark])

  function handleToggle() {
    setDark(!dark)
  }

  return (
    <>
      <Button
        onClick={handleToggle}
        color="light"
        className="p-1 bg-transparent"
      >
        {dark ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  )
}
