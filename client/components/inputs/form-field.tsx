import { cn } from '@/client/lib/cn'
import { Grid } from '@mui/material'
import type { Grid2Props } from '@mui/material/Unstable_Grid2/Grid2Props'
import { Controller } from 'react-hook-form'

type TFormFieldProps = {
  name: string
  control: any
  defaultValue: any
  render: any
  rules?: any
  className?: string
}

export function FormField({
  name,
  control,
  defaultValue,
  rules,
  className,
  render,
}: TFormFieldProps) {
  return (
    <div className={cn('col-span-6', className)}>
      <Controller
        name={name}
        control={control}
        render={render}
        rules={rules}
        defaultValue={defaultValue}
      />
    </div>
  )
}
