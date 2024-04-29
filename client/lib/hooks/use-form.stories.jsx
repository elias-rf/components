import { action } from '@storybook/addon-actions'
import * as v from 'valibot'
import { Button } from '../../components/button/button.jsx'
import { JsonView } from '../../components/json-view/json-view.jsx'
import { Label } from '../../components/label/label.jsx'
import { FormField } from '../../components/ui-old/form-field/form-field.jsx'
import { Helper } from '../../components/ui-old/helper.jsx'
import { Input } from '../../components/ui-old/input/input.jsx'
import { valid } from '../../lib/valid/valid.mjs'
import { useForm } from './use-form.jsx'

const meta = {
  component: FormField,
}

export default meta

const schema = {
  nome: valid(
    v.string([v.minLength(3, 'Nome deve ter pelo menos 3 caracteres')])
  ),
  idade: valid(
    v.coerce(v.number([v.minValue(18, 'Deve ter pelo menos 18 anos')]), (v) =>
      parseInt(v)
    )
  ),
  email: valid(v.string([v.email('Email inválido')])),
}

const clearRecord = {
  nome: '',
  idade: '0',
  email: '',
  habil: true,
}

export const Default = {
  render: () => {
    const form = useForm({
      value: clearRecord,
      schema,
    })

    return (
      <>
        <FormField>
          <Label htmlFor="nome">Nome</Label>
          <Input
            name="nome"
            id="nome"
            value={form.value.nome}
            onInput={form.handleChange}
          />
          <Helper variant="error">{form.error.nome}</Helper>
        </FormField>
        <FormField>
          <Label htmlFor="idade">Idade</Label>
          <Input
            name="idade"
            id="idade"
            value={form.value.idade}
            onInput={form.handleChange}
          />
          <Helper variant="error">{form.error.idade}</Helper>
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            value={form.value.email}
            onInput={form.handleChange}
          />
          <Helper variant="error">{form.error.email}</Helper>
        </FormField>
        <Button onClick={() => action('validAll')(form.validAll())}>
          ValidAll
        </Button>
        <Button onClick={() => form.reset()}>Reset</Button>
        <Button
          onClick={() =>
            form.reset({ nome: '', idade: '0', email: '', habil: true })
          }
        >
          Attrib record clear
        </Button>
        <Button
          onClick={() =>
            form.reset({
              nome: 'Elias',
              idade: '18',
              email: 'elias@mail.com',
              habil: true,
            })
          }
        >
          Attrib record full
        </Button>

        <JsonView
          data={{ value: form.value, error: form.error, dirty: form.dirty }}
        />
      </>
    )
  },
}
