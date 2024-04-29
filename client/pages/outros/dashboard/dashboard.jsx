import { format, startOfMonth } from 'date-fns'
import { flow } from 'lodash-es'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../../components_/button/button.jsx'
import { DatePicker } from '../../../components_/date-picker/date-picker.jsx'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '../../../components_/form/form.jsx'
import { Input } from '../../../components_/input/input.jsx'
import { Faturamento } from './components/faturamento.jsx'
import { TransferenciaMes } from './components/transferencia.jsx'

export default function Dashboard() {
  const [inicial, setInicial] =
    React.useState <
    string >
    format(flow([($) => startOfMonth($)])(new Date()), 'dd/MM/yyyy')
  const [final, setFinal] =
    React.useState < string > format(new Date(), 'dd/MM/yyyy')
  const form = useForm({ defaultValues: { inicial, final } })

  const onFilter = () => {
    console.log(form.getValues())
    // dashboardStore.state.setState(form.getValues())
  }

  return (
    <div className="space-y-4 p-2">
      <div className="flex flex-row flex-wrap items-end gap-2">
        <Form {...form}>
          <FormField
            control={form.control}
            name="inicial"
            render={({ field }) => (
              <FormItem className="w-40">
                <FormLabel>Data Inicial</FormLabel>
                <FormControl>
                  <div className="flex flex-row">
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                    />
                    <DatePicker
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="final"
            render={({ field }) => (
              <FormItem className="w-40">
                <FormLabel>Data Final</FormLabel>
                <FormControl>
                  <div className="flex flex-row">
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                    />
                    <DatePicker
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </Form>
        <Button onClick={onFilter}>Filtrar</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        <TransferenciaMes
          inicial={inicial}
          final={final}
        />
        <Faturamento
          inicial={inicial}
          final={final}
        />
      </div>
    </div>
  )
}
