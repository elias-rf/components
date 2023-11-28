# Table

Executa CRUD, operações personalizadas e junções para uma tabela

```ts
function User(Adapter, Schema)
```

# Adapter

Executa CRUD usando macro representação JsonQuery

```ts
type JsonQuery = {
  avg?: string
  count?: string
  debug?: boolean
  del
  first
  from?: string
  fromRaw
  groupBy
  groupBy?: string[]
  groupByRaw
  having
  havingRaw
  increment?: any
  insert?: any
  join
  limit?: number
  max?: string
  min?: string
  offset?: number
  orderBy?: TOrderBy<any>
  orderByRaw
  raw
  raw?: [sql: string, bindings?: any[]]
  returning
  select?: string[]
  selectRaw
  sum?: string
  update?: any
  where?: TWhere<any>
  whereNot
  whereRaw
}
```

```ts
function Adapter(driver): Promise<Record<string, any>>
```

# Driver

Acesso ao database com métodos aninhados para baixo nível

```ts
function Driver(database): {
  then: Promise<Record<string, any>>
  from: (from: string) => this
  where: (where: TWhere) => this
  select: (select: TSelect) => this
  orderBy: (orderBy: TOrder) => this
  insert: (record: Record) => this
  del: () => this
  update: (record: Record) => this
  toString: () => string
}
```
