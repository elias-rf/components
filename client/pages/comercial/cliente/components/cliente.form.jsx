import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '../../../../components_/form/form.jsx'
import { Input } from '../../../../components_/input/input.jsx'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../../../components_/tabs/tabs.jsx'
import { ClienteQuantidade } from '../../../../pages/comercial/cliente/components/quantidade/cliente-quantidade.jsx'
import { ClienteValorMedio } from '../../../../pages/comercial/cliente/components/valor-medio/cliente-valor-medio.jsx'
import { ClienteValor } from '../../../../pages/comercial/cliente/components/valor/cliente-valor.jsx'

export function ClienteForm({ store }) {
  const selection = store.state.use.selection()
  const status = store.state.use.status()

  const form = useForm({ defaultValues: store.recordClear })
  const query = useQuery({
    queryKey: ['agendaTelefone', { selection }],
    queryFn: () => store.fetchRecord({ selection }),
  })

  useEffect(() => {
    form.reset(query.data || store.recordClear)
  }, [query.data])

  return (
    <div className="grid grid-cols-12 gap-3">
      <Form {...form}>
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem className="col-span-3 space-y-0 sm:col-span-2 lg:col-span-1">
              <FormLabel>Código</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="razaoSocial"
          render={({ field }) => (
            <FormItem className="col-span-10 space-y-0 sm:col-span-10 lg:col-span-6">
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={['none', 'edit', 'new'].includes(status)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cidade"
          render={({ field }) => (
            <FormItem className="col-span-10 space-y-0 sm:col-span-6 lg:col-span-4">
              <FormLabel>Cidade</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={['none', 'edit', 'new'].includes(status)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cnpj"
          render={({ field }) => (
            <FormItem className="col-span-10 space-y-0 sm:col-span-6 lg:col-span-4">
              <FormLabel>CNPJ</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={['none', 'edit', 'new'].includes(status)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="vendedorId"
          render={({ field }) => (
            <FormItem className="col-span-2 space-y-0 sm:col-span-2 lg:col-span-1">
              <FormLabel>Vendedor</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={['none', 'edit', 'new'].includes(status)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ativo"
          render={({ field }) => (
            <FormItem className="col-span-2 space-y-0 sm:col-span-2 lg:col-span-1">
              <FormLabel>Ativo</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={['none', 'edit', 'new'].includes(status)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-12 space-y-0 sm:col-span-8 lg:col-span-4">
              <FormLabel>EMail</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={['none', 'edit', 'new'].includes(status)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cadastroData"
          render={({ field }) => (
            <FormItem className="col-span-6 space-y-0 sm:col-span-6 lg:col-span-4">
              <FormLabel>Data Cadastro</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={['none', 'edit', 'new'].includes(status)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="col-span-12">
          <Tabs>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="valor">Valor</TabsTrigger>
              <TabsTrigger value="quantidade">Quantidade</TabsTrigger>
              <TabsTrigger value="valor-medio">Valor Médio</TabsTrigger>
            </TabsList>
            <TabsContent value="valor">
              <ClienteValor store={store} />
            </TabsContent>
            <TabsContent value="quantidade">
              <ClienteQuantidade store={store} />
            </TabsContent>
            <TabsContent value="valor-medio">
              <ClienteValorMedio store={store} />
            </TabsContent>
          </Tabs>
        </div>
      </Form>
    </div>
  )
}
