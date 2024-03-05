import { agendaTelefoneDataSource } from '@/data/oftalmo/agenda-telelefone/agenda-telefone.data-source.js'
import { usuarioDataSource } from '@/data/oftalmo/usuario/usuario.data-source.js'
import { oftalmoDb } from './oftalmo.db.js'

export const oftalmoDataSource = {
  agendaTelefone: { ...agendaTelefoneDataSource(oftalmoDb) },
  usuario: {
    ...usuarioDataSource(oftalmoDb),
  },
}

export type TOftalmoDataSource = typeof oftalmoDataSource
