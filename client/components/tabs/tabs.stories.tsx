import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Tab } from "./tab";
import { Tabs } from "./tabs";
import { TTabsEvent } from "./tabs.types";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: { onClickEvent: { action: "onClickEvent" } },
  args: {
    active: "t1",
  },
} as ComponentMeta<typeof Tabs>;

export const Default: ComponentStory<typeof Tabs> = (args: any) => {
  const [active, setActive] = React.useState("t2");
  const [active1, setActive1] = React.useState("t2");
  const [active2, setActive2] = React.useState("t2");
  const [active3, setActive3] = React.useState("t2");

  function handleOnChange(event: TTabsEvent) {
    setActive(event.value);
    args.onClickEvent(event);
  }
  return (
    <Tabs active={active} onChangeEvent={handleOnChange}>
      <Tab id="t1" title="T1">
        <Tabs active={active1} onChangeEvent={(e) => setActive1(e.value)}>
          <Tab id="t1" title="T11">
            Tab 11
          </Tab>
          <Tab id="t2" title="T12">
            Tab 12
          </Tab>
          <Tab id="t3" title="T13">
            Tab 13
          </Tab>
        </Tabs>
      </Tab>
      <Tab id="t2" title="T2">
        <Tabs active={active2} onChangeEvent={(e) => setActive2(e.value)}>
          <Tab id="t1" title="T21">
            Tab 21
          </Tab>
          <Tab id="t2" title="T22">
            Tab 22
          </Tab>
          <Tab id="t3" title="T23">
            Tab 23
          </Tab>
        </Tabs>
      </Tab>
      <Tab id="t3" title="T3">
        <Tabs active={active3} onChangeEvent={(e) => setActive3(e.value)}>
          <Tab id="t1" title="T31">
            Tab 31
          </Tab>
          <Tab id="t2" title="T32">
            Tab 32
          </Tab>
          <Tab id="t3" title="T33">
            Tab 33
          </Tab>
        </Tabs>
      </Tab>
    </Tabs>
  );
};

Default.storyName = "Tabs";
