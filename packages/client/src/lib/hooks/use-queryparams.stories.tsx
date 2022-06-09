import { Action } from "../../..";
import { Button } from "@/features/ui/form";
import type { Story } from "@ladle/react";
import React from "react";
import useQueryparams from "./use-queryparams";

export default {
  title: "useQueryparams",
};

export const Default: Story = (props: any) => {
  const loc1 = useQueryparams();
  const loc2 = useQueryparams();

  return (
    <>
      <div>Location 1</div>
      <Button
        dispatch={() =>
          loc1.setParams({ story: "usequeryparams--default", v1: 1 })
        }
      >
        V1=1
      </Button>
      <Button
        dispatch={() =>
          loc1.setParams({ story: "usequeryparams--default", v2: 2 })
        }
      >
        V2=2
      </Button>
      <div>{JSON.stringify(loc1.getParams())}</div>
      <div>Location 2</div>
      <Button
        dispatch={() =>
          loc2.setParams({ story: "usequeryparams--default", v1: 1 })
        }
      >
        V1=1
      </Button>
      <Button
        dispatch={() =>
          loc2.setParams({ story: "usequeryparams--default", v2: 2 })
        }
      >
        V2=2
      </Button>
      <div>{JSON.stringify(loc2.getParams())}</div>
    </>
  );
};
