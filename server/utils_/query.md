# where

| react-table                | client | api                               | knex                                          |
| -------------------------- | ------ | --------------------------------- | --------------------------------------------- |
| `{id:string, value:any}[]` |        | `{where:[string, string, any][]}` | `(column:string, equality:string, value:any)` |

# order

| react-table                   | client | api                                       | knex                               |
| ----------------------------- | ------ | ----------------------------------------- | ---------------------------------- |
| `{id:string, desc:boolean}[]` |        | `{order:[{[column:string]:asc \| desc}]}` | `{column:string, order=boolean}[]` |

# select

| react-table                | client | api | knex     |
| -------------------------- | ------ | --- | -------- |
| `{[index:number]:boolean}` |        |     | string[] |
