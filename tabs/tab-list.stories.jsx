import { TabList } from './tab-list.jsx'
import { TabPanel } from './tab-panel.jsx'
import { Tab } from './tab.jsx'
import { Tabs } from './tabs.jsx'

const meta = {
  component: Tabs,
}

export default meta

export const Default = {
  render: (props) => (
    <Tabs>
      <TabList>
        <Tab id="fruits">Fruits</Tab>
        <Tab id="vegetables">Vegetables</Tab>
        <Tab id="meat">Meat</Tab>
      </TabList>
      <div className="panels">
        <TabPanel id="fruits">
          <ul>
            <li>🍎 Apple</li>
            <li>🍇 Grape</li>
            <li>🍊 Orange</li>
          </ul>
        </TabPanel>
        <TabPanel id="vegetables">
          <ul>
            <li>🥕 Carrot</li>
            <li>🧅 Onion</li>
            <li>🥔 Potato</li>
          </ul>
        </TabPanel>
        <TabPanel id="meat">
          <ul>
            <li>🥩 Beef</li>
            <li>🍗 Chicken</li>
            <li>🥓 Pork</li>
          </ul>
        </TabPanel>
      </div>
    </Tabs>
  ),
}
