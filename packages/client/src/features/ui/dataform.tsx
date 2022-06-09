import React from "react";
import type { Schema } from "../../../index.d";
import Form from "./form";

interface DataformProps {
  record: { [prop: string]: any };
  schema: (target: string) => Promise<Schema>;
}

export default function Dataform(props: any) {
  return;
  <>
    <Form {...props} />
  </>;
}
