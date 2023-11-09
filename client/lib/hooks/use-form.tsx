import { useState } from 'react'

/**
 * The useForm hook allows you to manage form state and handle form input
 * changes easily. It takes an initial form state
 * object as an argument and returns an object with the current form state,
 * a function to handle input changes, and a function to reset the form.
 */

interface InitialFormState {
  [key: string]: string | number
}

interface UseFormReturn {
  formState: InitialFormState
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  resetForm: () => void
}

export function useForm(initialState: InitialFormState): UseFormReturn {
  const [formState, setFormState] = useState<InitialFormState>(initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormState((prevState) => ({ ...prevState, [name]: value }))
  }

  const resetForm = (): void => {
    setFormState(initialState)
  }

  return {
    formState,
    handleChange,
    resetForm,
  }
}
