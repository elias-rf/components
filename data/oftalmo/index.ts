import { agendaTelefoneDataSource } from '@/data/oftalmo/agenda-telefone/agenda-telefone.data-source.js'
import { esterilizacaoExternaDataSource } from '@/data/oftalmo/esterilizacao-externa/esterilizacao-externa.data-source.js'
import { esterilizacaoInternaDataSource } from '@/data/oftalmo/esterilizacao-interna/esterilizacao-interna.data-source.js'
import { etiquetaExternaDataSource } from '@/data/oftalmo/etiqueta-externa/etiqueta-externa.data-source.js'
import { etiquetaInternaDataSource } from '@/data/oftalmo/etiqueta-interna/etiqueta-interna.data-source.js'
import { groupDataSource } from '@/data/oftalmo/group/group.data-source.js'
import { ordemProducaoOperacaoDataSource } from '@/data/oftalmo/ordem-producao-operacao/ordem-producao-operacao.data-source.js'
import { ordemProducaoDataSource } from '@/data/oftalmo/ordem-producao/ordem-producao.data-source.js'
import { produtoItemDataSource } from '@/data/oftalmo/produto-item/produto-item.data-source.js'
import { produtoDataSource } from '@/data/oftalmo/produto/produto.data-source.js'
import { usuarioDataSource } from '@/data/oftalmo/usuario/usuario.data-source.js'
import { oftalmoDb } from './oftalmo.db.js'

export const oftalmoDataSource = {
  ds: oftalmoDb,
  agendaTelefone: { ...agendaTelefoneDataSource(oftalmoDb) },
  esterilizacaoExterna: { ...esterilizacaoExternaDataSource(oftalmoDb) },
  esterilizacaoInterna: { ...esterilizacaoInternaDataSource(oftalmoDb) },
  etiquetaExterna: { ...etiquetaExternaDataSource(oftalmoDb) },
  etiquetaInterna: { ...etiquetaInternaDataSource(oftalmoDb) },
  group: { ...groupDataSource(oftalmoDb) },
  ordemProducao: { ...ordemProducaoDataSource(oftalmoDb) },
  ordemProducaoOperacao: { ...ordemProducaoOperacaoDataSource(oftalmoDb) },
  produto: { ...produtoDataSource(oftalmoDb) },
  produtoItem: { ...produtoItemDataSource(oftalmoDb) },
  usuario: { ...usuarioDataSource(oftalmoDb) },
}

export type TOftalmoDataSource = typeof oftalmoDataSource
