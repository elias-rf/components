import { Slot } from '@radix-ui/react-slot'
import React from 'react'
import { Controller, FormProvider, useFormContext } from 'react-hook-form'
import { Label } from '../label/label.jsx'
import { cn } from '../lib/utils.mjs'

const Form = FormProvider

/**
 * React context for providing form field-level information.
 * This context is used by the `FormField` component and the `useFormField` hook
 * to access and share field-level data within the form.
 */
const FormFieldContext = React.createContext({ name: '' })

/**
 * @typedef {Object} FormFieldProps
 * @extends {CommandPrimitive}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<FormFieldProps>}
 */
const FormField = ({ ...props }) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

const FormItemContext = React.createContext({ id: '' })

/**
 * @typedef {Object} FormItemProps
 * @extends {CommandPrimitive}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<FormItemProps>}
 */
const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        className={cn('space-y-2', className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = 'FormItem'

/**
 * @typedef {Object} FormLabelProps
 * @extends {CommandPrimitive}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<FormLabelProps>}
 */
const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && 'text-red-500 dark:text-red-900', className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = 'FormLabel'

/**
 * @typedef {Object} FormControlProps
 * @extends {CommandPrimitive}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<FormControlProps>}
 */
const FormControl = React.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = 'FormControl'

/**
 * @typedef {Object} FormDescriptionProps
 * @extends {CommandPrimitive}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<FormDescriptionProps>}
 */
const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn(
        'text-[0.8rem] text-slate-500 dark:text-slate-400',
        className
      )}
      {...props}
    />
  )
})
FormDescription.displayName = 'FormDescription'

/**
 * @typedef {Object} FormMessageProps
 * @extends {CommandPrimitive}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<FormMessageProps>}
 */
const FormMessage = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField()
    const body = error ? String(error?.message) : children

    if (!body) {
      return null
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn(
          'text-[0.8rem] font-medium text-red-500 dark:text-red-900',
          className
        )}
        {...props}
      >
        {body}
      </p>
    )
  }
)
FormMessage.displayName = 'FormMessage'

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
}
