import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs.jsx'

const meta = {
  component: Tabs,
}

export default meta

export const Default = {
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
