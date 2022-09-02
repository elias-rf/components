#! /usr/bin/env node

import { program } from "commander";
import { createType } from "./commands/create-type";

program.version("0.0.1");
program
  .command("createType <schemaFile> [typeFile]")
  .description("Cria arquivo de tipo a partir do schema")
  .action(createType);

program.parse();
