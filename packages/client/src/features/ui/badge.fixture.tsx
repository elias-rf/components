import Badge from "./badge";

function mock() {}

export default {
  Standard: <Badge>Teste</Badge>,
  Clicavel: <Badge onClick={mock}>Teste</Badge>,
};
