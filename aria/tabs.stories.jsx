import { Tab, TabList, TabPanel, Tabs } from './tabs.jsx'

const meta = {
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args) => (
  <Tabs {...args}>
    <TabList aria-label="History of Ancient Rome">
      <Tab id="FoR">Founding of Rome</Tab>
      <Tab id="MaR">Monarchy and Republic</Tab>
      <Tab id="Emp">Empire</Tab>
    </TabList>
    <TabPanel id="FoR">Arma virumque cano, Troiae qui primus ab oris.</TabPanel>
    <TabPanel id="MaR">Senatus Populusque Romanus.</TabPanel>
    <TabPanel id="Emp">Alea jacta est.</TabPanel>
  </Tabs>
)
