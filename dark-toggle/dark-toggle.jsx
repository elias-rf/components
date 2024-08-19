import { useEffect, useState } from 'react'
import { Button } from '../button/button.jsx'
import { MoonIcon } from '../icons/moon-icon.jsx'
import { SunIcon } from '../icons/sun-icon.jsx'

/**
 * Renders a dark mode toggle button that updates the document's color theme based on the user's preference.
 *
 * The component checks the user's color theme preference from the browser or local storage, and sets the document's
 * class accordingly. When the button is clicked, it toggles the dark mode state and updates the local storage and
 * document class.
 */
export const DarkToggle = () => {
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
