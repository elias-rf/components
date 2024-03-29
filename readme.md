# Libraries

[Tailwind](https://tailwindcss.com/docs/flex-basis)

# Modules

1. types

2. utils

3. config

4. mocks

5. models

6. server

7. client

# Server

## Security

### Groups

- Analista Qualidade
- Auxiliar Manutenção
- Auxiliar Produção
- Auxiliar Qualidade
- Consultor Comercial
- Diretoria
- Estoquista
- Gestor Comercial
- Gestor Estoque
- Gestor Financeiro
- Gestor Industrial
- Gestor Qualidade
- Inspetor Qualidade
- Instrutor
- Líder Manutenção
- Líder Produção
- TI

```mermaid
flowchart LR
    subgraph utils
      subgraph utils_orm[orm]
        utils_orm_adapterKnex[adapterKnex]
        subgraph utils_orm_ormDataSource[dataSource]
          utils_orm_ormDataSource_index[index]
          utils_orm_ormDataSource_count[count]
          utils_orm_ormDataSource_create[create]
          utils_orm_ormDataSource_del[del]
          utils_orm_ormDataSource_increment[increment]
          utils_orm_ormDataSource_list[list]
          utils_orm_ormDataSource_read[read]
          utils_orm_ormDataSource_update[update]
          utils_orm_ormDataSource_utils[utils]
        end
        subgraph utils_orm_utils[utils]
          utils_orm_utils_argsFromDto[argsFromDto]
        end
      end
    end

    subgraph data
      data_index[index]
      subgraph data_database[database]
        index
        databaseDb
        subgraph data_database_table[table]
          data_database_table_tableDataSource[tableDataSource]
          data_database_table_tableMapFields[tableMapFields]
          data_database_table_tableSchema[tableSchema]
          data_database_table_tableToDto[tableToDto]
          data_database_table_tableType[tableType]
        end
      end
    end

    subgraph core
      core_index[index]
      subgraph core_resource[resource]
        core_resource.controller[controller]
        subgraph core_resource_useCases[useCases]
          core_resource_useCases_index[index]
          core_resource_useCases_count[count]
          core_resource_useCases_create[create]
          core_resource_useCases_del[del]
          core_resource_useCases_list[list]
          core_resource_useCases_others[...others]
          core_resource_useCases_read[read]
          core_resource_useCases_update[update]
        end
      end
    end

core_index--->core_resource.controller
core_resource.controller-->data_index
core_resource_useCases_index-->core_resource_useCases_count
core_resource_useCases_index-->core_resource_useCases_create
core_resource_useCases_index-->core_resource_useCases_del
core_resource_useCases_index-->core_resource_useCases_list
core_resource_useCases_index-->core_resource_useCases_others
core_resource_useCases_index-->core_resource_useCases_read
core_resource_useCases_index-->core_resource_useCases_update
core_resource.controller-->core_resource_useCases_index

data_database_table_tableDataSource-->data_database_table_tableMapFields
data_database_table_tableDataSource-->data_database_table_tableSchema
data_database_table_tableDataSource-->data_database_table_tableToDto
data_database_table_tableDataSource-->data_database_table_tableType
data_database_table_tableDataSource-->utils_orm_adapterKnex
data_database_table_tableDataSource-->utils_orm_utils_argsFromDto
data_database_table_tableToDto-->data_database_table_tableMapFields
data_database_table_tableToDto-->data_database_table_tableType
data_database_table_tableType-->data_database_table_tableMapFields
data_database_table_tableType-->data_database_table_tableSchema

utils_orm_ormDataSource_index-->utils_orm_ormDataSource_count
utils_orm_ormDataSource_index-->utils_orm_ormDataSource_create
utils_orm_ormDataSource_index-->utils_orm_ormDataSource_del
utils_orm_ormDataSource_index-->utils_orm_ormDataSource_increment
utils_orm_ormDataSource_index-->utils_orm_ormDataSource_list
utils_orm_ormDataSource_index-->utils_orm_ormDataSource_read
utils_orm_ormDataSource_index-->utils_orm_ormDataSource_update

```
