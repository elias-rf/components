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

Analista Qualidade
Auxiliar Manutenção
Auxiliar Produção
Auxiliar Qualidade
Consultor Comercial
Diretoria
Estoquista
Gestor Comercial
Gestor Estoque
Gestor Financeiro
Gestor Industrial
Gestor Qualidade
Inspetor Qualidade
Instrutor
Líder Manutenção
Líder Produção
TI

```mermaid
flowchart TB
    subgraph core
      subgraph resource
        controller-->index
        entity
        subgraph useCases
          index-->count
          index-->create
          index-->del
          index-->list
          index-->read
          index-->update
        end
      end
    end
    subgraph data
      subgraph database
        controller
        entity
        subgraph table
          dataSource
        end
      end
    end


```
