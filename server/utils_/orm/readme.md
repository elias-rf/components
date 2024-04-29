# Table

Executa CRUD, operações personalizadas e junções para uma tabela

```ts
function User(Adapter, Schema)
```

# Adapter

Executa CRUD usando macro representação JsonQuery

```ts
type JsonQuery = {
  avg?
  count?
  debug?: boolean
  del
  first
  from?
  fromRaw
  groupBy
  groupBy?
  groupByRaw
  having
  havingRaw
  increment?
  insert?
  join
  limit?
  max?
  min?
  offset?
  orderBy?: TOrderBy<any>
  orderByRaw
  raw
  raw?: [sql, bindings?[]]
  returning
  select?
  selectRaw
  sum?
  update?
  where?: TWhere<any>
  whereNot
  whereRaw
}
```

```ts
function Adapter(driver)
```

# Driver

Acesso ao database com métodos aninhados para baixo nível

```ts
function Driver(database): {
  then
  from: (from) => this
  where: (where: TWhere) => this
  select: (select: TSelect) => this
  orderBy: (orderBy: TOrder) => this
  insert: (record: Record) => this
  del: () => this
  update: (record: Record) => this
  toString: () => string
}
```
