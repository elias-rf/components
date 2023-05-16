import { connections } from "@/config/connections";

import { CidadeModel } from "@/models/cidade/cidade-model";
import { ClienteModel } from "@/models/cliente/cliente-model";
import { DiamanteModel } from "@/models/diamante/diamante-model";
import { EmpregadoModel } from "@/models/empregado/empregado-model";
import { EstoqueModel } from "@/models/estoque/estoque-model";
import { FornecedorModel } from "@/models/fornecedor/fornecedor-model";
import { NfSaidaFvModel } from "@/models/nf-saida-fv/nf-saida-fv-model";
import { NfSaidaModel } from "@/models/nf-saida/nf-saida-model";
import { UsuarioModel } from "@/models/usuario/usuario-model";
import { AgendaTelefoneModel } from "./agenda-telefone/agenda-telefone-model";
import { EsterilizacaoExternaModel } from "./esterilizacao-externa/esterilizacao-externa-model";
import { EsterilizacaoInternaModel } from "./esterilizacao-interna/esterilizacao-interna-model";
import { EtiquetaExternaModel } from "./etiqueta-externa/etiqueta-externa-model";
import { EtiquetaInternaModel } from "./etiqueta-interna/etiqueta-interna-model";
import { GroupSubjectModel } from "./group-subject/group-subject-model";
import { OrdemProducaoOperacaoModel } from "./ordem-producao-operacao/ordem-producao-operacao-model";
import { OrdemProducaoModel } from "./ordem-producao/ordem-producao-model";
import { ProdutoItemModel } from "./produto-item/produto-item-model";
import { ProdutoPlanoModel } from "./produto-plano/produto-plano-model";

export type TModels = {
  agendaTelefone: AgendaTelefoneModel;
  cidade: CidadeModel;
  cliente: ClienteModel;
  diamante: DiamanteModel;
  empregado: EmpregadoModel;
  esterilizacaoExterna: EsterilizacaoExternaModel;
  esterilizacaoInterna: EsterilizacaoInternaModel;
  estoque: EstoqueModel;
  etiquetaExterna: EtiquetaExternaModel;
  etiquetaInterna: EtiquetaInternaModel;
  fornecedor: FornecedorModel;
  nfSaida: NfSaidaModel;
  nfSaidaFv: NfSaidaFvModel;
  ordemProducao: OrdemProducaoModel;
  ordemProducaoOperacao: OrdemProducaoOperacaoModel;
  produtoItem: ProdutoItemModel;
  produtoPlano: ProdutoPlanoModel;
  usuario: UsuarioModel;
  groupSubject: GroupSubjectModel;
};

export const models = {} as TModels;

export const modelsRegister = (args: any) => {
  new AgendaTelefoneModel(args);
  new CidadeModel(args);
  new ClienteModel(args);
  new DiamanteModel(args);
  new EmpregadoModel(args);
  new EsterilizacaoExternaModel(args);
  new EsterilizacaoInternaModel(args);
  new EstoqueModel(args);
  new FornecedorModel(args);
  new EtiquetaExternaModel(args);
  new EtiquetaInternaModel(args);
  new NfSaidaFvModel(args);
  new NfSaidaModel(args);
  new OrdemProducaoModel(args);
  new OrdemProducaoOperacaoModel(args);
  new ProdutoItemModel(args);
  new ProdutoPlanoModel(args);
  new UsuarioModel(args);
  new GroupSubjectModel(args);
};

const args = {
  connections,
  models,
};

modelsRegister(args);
