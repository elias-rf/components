export function SqlAdapter() {
  return {
    archive() {},
    archiveOne() {},
    avg() {},
    count() {},
    create() {},
    createEach() {},
    destroy() {},
    destroyOne() {},
    find() {},
    findOne() {},
    remove() {},
    sum() {},
    update() {},
    updateOne() {},
  };
}

/*
Datastore
oftalmo: {
  adapter: mssql, coach
  host: localhost
  port: 1432
  user: sa
  password: 123
  database: oftalmo
}

Model
cliente: {
  attributes: {
    field: {
      allowNull: true,
      autoCreatedAt: true,
      autoIncrement: true,
      autoUpdatedAt: true,
      columnName: 'number_of_round_rotating_things',
      columnType: 'FLOAT',
      defaultsTo: 20,
      required: true,
      type: string | number | boolean | json | ref,
    },
    fieldFk: {
      collection: 'otherTable',
      via: 'pkOtherTable'
    }
    fieldFk: {
      model: 'otherTable',
      via: 'pkOtherTable'
    }
  }
  customToJSON: (obj)=>obj,
  tableName: 'cliente',
  datastore: 'oftalmo',
}

Adapter

mssqlAdapter: {
  archive
  archiveOne
  avg
  count
  create
  createEach
  destroy
  destroyOne
  find
  findOne
  remove
  sum
  update
  updateOne

}


*/
