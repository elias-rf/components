import type { Story } from "@ladle/react";
import { Button } from "../../components/button";
import { useLocation } from "./use-location";

export default {
  title: "useLocation",
};

export const Default: Story = () => {
  const loc1 = useLocation();
  const loc2 = useLocation();

  return (
    <>
      <div>Location 1</div>
      <Button dispatch={() => loc1.replace("?story=uselocation--default&v1=1")}>
        V1=1
      </Button>
      <Button dispatch={() => loc1.replace("?story=uselocation--default&v2=2")}>
        V2=2
      </Button>
      <div>{loc1.pathname}</div>
      <div>{loc1.search}</div>
      <div>Location 2</div>
      <Button dispatch={() => loc2.replace("?story=uselocation--default&v1=1")}>
        V1=1
      </Button>
      <Button dispatch={() => loc2.replace("?story=uselocation--default&v2=2")}>
        V2=2
      </Button>
      <div>{loc2.pathname}</div>
      <div>{loc2.search}</div>
    </>
  );
};
