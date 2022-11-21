import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../../components/button";
import { useQueryState } from "./use-query-state";

export default {
  title: "hooks/useQueryState",
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => {
  const [story] = useQueryState("story");
  const [v1, setV1] = useQueryState("v1", "00");
  const [v2, setV2] = useQueryState("v2", 0);

  return (
    <>
      <div>Location 1</div>
      <Button onClickEvent={() => setV1(1)}>V1=1</Button>
      <Button onClickEvent={() => setV2(2)}>V2=2</Button>

      <div>st {story}</div>
      <div>v1 {v1}</div>
      <div>v2 {v2}</div>
      <div>Location 2</div>
      <Button onClickEvent={() => setV1(3)}>V1=3</Button>
      <Button onClickEvent={() => setV2(4)}>V2=4</Button>
      <div>st {story}</div>
      <div>v1 {v1}</div>
      <div>v2 {v2}</div>
    </>
  );
};
