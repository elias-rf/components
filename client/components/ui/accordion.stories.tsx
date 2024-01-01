import { Title } from '@/client/components/ui-old/title.js'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion.js'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  args: {
    type: 'single',
    collapsible: true,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: (props) => (
    <>
      <Accordion
        className="w-full"
        {...props}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  ),
}
