import { JsonView } from '@/client/components/json-view/json-view.js'
import { Button } from '@/client/components/ui-old/button/button.js'
import { FormField } from '@/client/components/ui-old/form-field/form-field.js'
import { Helper } from '@/client/components/ui-old/helper.js'
import { Input } from '@/client/components/ui-old/input/input.js'
import { Label } from '@/client/components/ui-old/label.js'
import { valid } from '@/client/lib/valid/valid.js'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { coerce, email, minLength, minValue, number, string } from 'valibot'
import { useForm } from './use-form.js'

const meta: Meta<typeof FormField> = {
  component: FormField,
}

export default meta
type Story = StoryObj<typeof FormField>

const schema = {
  nome: valid(string([minLength(3, 'Nome deve ter pelo menos 3 caracteres')])),
  idade: valid(
    coerce(number([minValue(18, 'Deve ter pelo menos 18 anos')]), (v: any) =>
      parseInt(v)
    )
  ),
  email: valid(string([email('Email inválido')])),
}

const clearRecord = {
  nome: '',
  idade: '0',
  email: '',
  habil: true,
}

export const Default: Story = {
  render: () => {
    const form = useForm({
      value: clearRecord,
      schema,
    })

    return (
      <>
        <FormField>
          <Label name="nome">[N]ome</Label>
          <Input
            name="nome"
            id="nome"
            value={form.value.nome}
            onInput={form.handleChange}
          />
          <Helper variant="error">{form.error.nome}</Helper>
        </FormField>
        <FormField>
          <Label name="idade">[I]dade</Label>
          <Input
            name="idade"
            id="idade"
            value={form.value.idade}
            onInput={form.handleChange}
          />
          <Helper variant="error">{form.error.idade}</Helper>
        </FormField>
        <FormField>
          <Label name="email">[E]mail</Label>
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
        <Button onClick={form.reset}>Reset</Button>
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
