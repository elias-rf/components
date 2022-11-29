import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../../components/button";
import { useLocation } from "./use-location";

export default {
  title: "hooks/useLocation",
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => {
  const loc1 = useLocation();
  const loc2 = useLocation();

  return (
    <>
      <div>Location 1</div>
      <Button
        onClickEvent={() => loc1.replace("?story=uselocation--default&v1=1")}
      >
        V1=1
      </Button>
      <Button
        onClickEvent={() => loc1.replace("?story=uselocation--default&v2=2")}
      >
        V2=2
      </Button>
      <div>Pathname: {loc1.pathname}</div>
      <div>Search: {loc1.search}</div>
      <div>Location 2</div>
      <Button
        onClickEvent={() => loc2.replace("?story=uselocation--default&v1=1")}
      >
        V1=1
      </Button>
      <Button
        onClickEvent={() => loc2.replace("?story=uselocation--default&v2=2")}
      >
        V2=2
      </Button>
      <div>Pathname: {loc2.pathname}</div>
      <div>Search: {loc2.search}</div>
    </>
  );
};
