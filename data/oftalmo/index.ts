import { agendaTelefoneDataSource } from './agenda-telefone/agenda-telefone.data-source.js'
import { esterilizacaoExternaDataSource } from './esterilizacao-externa/esterilizacao-externa.data-source.js'
import { esterilizacaoInternaDataSource } from './esterilizacao-interna/esterilizacao-interna.data-source.js'
import { etiquetaExternaDataSource } from './etiqueta-externa/etiqueta-externa.data-source.js'
import { etiquetaInternaDataSource } from './etiqueta-interna/etiqueta-interna.data-source.js'
import { grupoSujeitoDataSource } from './grupo-sujeito/grupo-sujeito.data-source.js'
import { grupoDataSource } from './grupo/grupo.data-source.js'
import { oftalmoDb } from './oftalmo.db.js'
import { operacaoProducaoDataSource } from './operacao-producao/operacao-producao.data-source.js'
import { ordemProducaoOperacaoDataSource } from './ordem-producao-operacao/ordem-producao-operacao.data-source.js'
import { ordemProducaoDataSource } from './ordem-producao/ordem-producao.data-source.js'
import { produtoItemDataSource } from './produto-item/produto-item.data-source.js'
import { produtoDataSource } from './produto/produto.data-source.js'
import { usuarioDataSource } from './usuario/usuario.data-source.js'

export const oftalmoDataSource = {
  ds: oftalmoDb,
  agendaTelefone: { ...agendaTelefoneDataSource(oftalmoDb) },
  esterilizacaoExterna: { ...esterilizacaoExternaDataSource(oftalmoDb) },
  esterilizacaoInterna: { ...esterilizacaoInternaDataSource(oftalmoDb) },
  etiquetaExterna: { ...etiquetaExternaDataSource(oftalmoDb) },
  etiquetaInterna: { ...etiquetaInternaDataSource(oftalmoDb) },
  grupo: { ...grupoDataSource(oftalmoDb) },
  grupoSujeito: { ...grupoSujeitoDataSource(oftalmoDb) },
  operacaoProducao: { ...operacaoProducaoDataSource(oftalmoDb) },
  ordemProducao: { ...ordemProducaoDataSource(oftalmoDb) },
  ordemProducaoOperacao: { ...ordemProducaoOperacaoDataSource(oftalmoDb) },
  produto: { ...produtoDataSource(oftalmoDb) },
  produtoItem: { ...produtoItemDataSource(oftalmoDb) },
  usuario: { ...usuarioDataSource(oftalmoDb) },
}

export type TOftalmoDataSource = typeof oftalmoDataSource
