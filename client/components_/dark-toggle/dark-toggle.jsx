import { useEffect, useState } from 'react'
import { Button } from '../button/button.jsx'
import { MoonIcon } from '../icons/moon-icon.jsx'
import { SunIcon } from '../icons/sun-icon.jsx'

export function DarkToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDark(true)
    }
  }, [])

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
        variant="ghost"
        size="icon"
      >
        {dark ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  )
}
