import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs.js'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: (props) => (
    <>
      <Tabs
        defaultValue="account"
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account</TabsContent>
        <TabsContent value="password">Password</TabsContent>
      </Tabs>
    </>
  ),
}
