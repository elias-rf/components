import { Button } from '@/client/components/button/button.js'
import { Checkbox } from '@/client/components/checkbox/checkbox.js'
import { Input } from '@/client/components/input/input.js'
import { JsonView } from '@/client/components/json-view/json-view.js'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/client/components/select/select.js'
import '@/client/index.css'
import { valibotResolver } from '@hookform/resolvers/valibot'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as v from 'valibot'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form.js'

const meta: Meta<typeof Form> = {
  component: Form,
  args: {},
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Input>

const formSchema = v.object({
  username: v.string([
    v.minLength(2, 'Username must be at least 2 characters.'),
  ]),
  age: v.coerce(v.number([v.minValue(18, 'Age must be at least 18.')]), (v) =>
    parseInt(v as string)
  ),
  mobile: v.optional(v.boolean(), false),
  email: v.string([v.email('Please select an email to display.')]),
})

export const Default: Story = {
  render: (props) => {
    const [vlr, setVlr] = React.useState({})
    const form = useForm<v.Input<typeof formSchema>>({
      resolver: valibotResolver(formSchema),
      defaultValues: {
        username: '',
        age: 0,
        mobile: true,
      },
    })
    function onSubmit(values: v.Input<typeof formSchema>) {
      console.log(values)
      setVlr(values)
    }

    return (
      <div className="flex flex-col space-y-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>This is your years old.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Use different settings for my mobile devices
                    </FormLabel>
                    <FormDescription>
                      You can manage your mobile notifications in the mobile
                      settings page.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    You can manage email addresses in your email settings.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <JsonView data={{ props, vlr }} />
      </div>
    )
  },
}
