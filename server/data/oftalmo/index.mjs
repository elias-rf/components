import { agendaTelefoneDataSource } from './agenda-telefone/agenda-telefone.data-source.mjs'
import { esterilizacaoExternaDataSource } from './esterilizacao-externa/esterilizacao-externa.data-source.mjs'
import { esterilizacaoInternaDataSource } from './esterilizacao-interna/esterilizacao-interna.data-source.mjs'
import { etiquetaExternaDataSource } from './etiqueta-externa/etiqueta-externa.data-source.mjs'
import { etiquetaInternaDataSource } from './etiqueta-interna/etiqueta-interna.data-source.mjs'
import { grupoSujeitoDataSource } from './grupo-sujeito/grupo-sujeito.data-source.mjs'
import { grupoDataSource } from './grupo/grupo.data-source.mjs'
import { oftalmoDb } from './oftalmo.db.mjs'
import { operacaoProducaoDataSource } from './operacao-producao/operacao-producao.data-source.mjs'
import { ordemProducaoOperacaoDataSource } from './ordem-producao-operacao/ordem-producao-operacao.data-source.mjs'
import { ordemProducaoDataSource } from './ordem-producao/ordem-producao.data-source.mjs'
import { produtoItemDataSource } from './produto-item/produto-item.data-source.mjs'
import { produtoDataSource } from './produto/produto.data-source.mjs'
import { usuarioDataSource } from './usuario/usuario.data-source.mjs'

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
