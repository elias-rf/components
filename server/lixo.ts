import Knex from "knex";
import { optionsOftalmo } from "./config/knex";

console.log(optionsOftalmo);

const knex = Knex(optionsOftalmo);
knex.raw("SELECT * from phonebook").then((r) => console.log(r));
