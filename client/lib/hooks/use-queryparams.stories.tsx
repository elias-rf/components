import { ComponentStory } from "@storybook/react";
import { Button } from "../../components/button";
import { useQueryParams } from "./use-queryparams";

export default {
  component: Button,
};

export const Default: ComponentStory<typeof Button> = () => {
  const loc1 = useQueryParams();
  const loc2 = useQueryParams();

  return (
    <>
      <div>Location 1</div>
      <Button
        onClickEvent={() =>
          loc1.setParams({ story: "usequeryparams--default", v1: 1 })
        }
      >
        V1=1
      </Button>
      <Button
        onClickEvent={() =>
          loc1.setParams({ story: "usequeryparams--default", v2: 2 })
        }
      >
        V2=2
      </Button>
      <div>{JSON.stringify(loc1.getParams())}</div>
      <div>Location 2</div>
      <Button
        onClickEvent={() =>
          loc2.setParams({ story: "usequeryparams--default", v1: 1 })
        }
      >
        V1=1
      </Button>
      <Button
        onClickEvent={() =>
          loc2.setParams({ story: "usequeryparams--default", v2: 2 })
        }
      >
        V2=2
      </Button>
      <div>{JSON.stringify(loc2.getParams())}</div>
    </>
  );
};
