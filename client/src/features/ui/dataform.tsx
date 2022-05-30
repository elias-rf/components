import React, { useState, useEffect } from "react";
import Form, { Button } from "./form";
import type { Schema } from "../../../index.d";

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
