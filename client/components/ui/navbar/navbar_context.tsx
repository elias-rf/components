import { createContext } from 'react'

export const ShowContext = createContext({
  show: false,
  setShow: (show: boolean) => {
    show
  },
})
