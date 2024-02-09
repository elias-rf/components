import { Button } from '@/client/components/button/button.js'
import { DatePicker } from '@/client/components/date-picker/date-picker.js'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/client/components/form/form.js'
import { dashboardStore } from '@/client/pages/outros/dashboard/components/dashboard.store.js'
import { useForm } from 'react-hook-form'
import { Faturamento } from './components/faturamento.js'
import { TransferenciaMes } from './components/transferencia.js'

export default function Dashboard() {
  const inicial = dashboardStore.state.use.inicial()
  const final = dashboardStore.state.use.final()
  const form = useForm({ defaultValues: { inicial, final } })

  const onFilter = () => {
    console.log(form.getValues())
    dashboardStore.state.setState(form.getValues())
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
                  <DatePicker
                    required
                    value={new Date(field.value)}
                    onChange={field.onChange}
                  />
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
                  <DatePicker
                    required
                    value={new Date(field.value)}
                    onChange={field.onChange}
                  />
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
