import { planoDb } from '../../data/plano/plano.db.mjs'
import { ormTable } from '../../utils/orm/index.mjs'

export const EstatPro = {
  table: 'EstatPro',
  primary: ['CdEmpresa', 'AnoRef', 'MesRef', 'CdProduto'],
  fields: [
    'CdEmpresa',
    'AnoRef',
    'MesRef',
    'CdProduto',
    'EstInicial',
    'Entradas',
    'Saidas',
    'Ajustes',
    'QtdCompras',
    'QtdMedio',
    'QtdVendas',
    'VlCusto',
    'VlMedio',
    'VlVendas',
    'VlCustoMedio',
    'VlVenda',
    'VlAtacado',
    'EstInicialPsico',
  ],
}

function produtoEstatisticaControllerFactory(db, schema) {
  const orm = ormTable(db, schema)
  return {
    produtoEstatistica_list: orm.rpc.list,
    produtoEstatistica_read: orm.rpc.read,
    produtoEstatistica_count: orm.rpc.count,
    produtoEstatistica_update: orm.rpc.update,
    produtoEstatistica_create: orm.rpc.create,
    produtoEstatistica_del: orm.rpc.del,
    produtoEstatistica_increment: orm.rpc.increment,
  }
}

export const produtoEstatisticaController = produtoEstatisticaControllerFactory(
  planoDb,
  EstatPro
)
