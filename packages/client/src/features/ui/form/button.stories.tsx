import Button from "./button";

export default {
  title: "Form/Button",
};

export const Default = () => {
  return (
    <div>
      <h1>Botão padrão</h1>
      <Button
        name={"Botão1"}
        dispatch={(action) => console.log("onClick", action.payload.name)}
      >
        Botão 1
      </Button>

      <h1>Botão desabilitado</h1>
      <Button
        disabled
        name={"Botão2"}
        dispatch={(action) => console.log("onClick", action.payload.name)}
      >
        Botão 2
      </Button>

      <h1>Botão com classe</h1>
      <Button
        className="bg-green-600"
        name={"Botão3"}
        dispatch={(action) => console.log("onClick", action.payload.name)}
      >
        Botão 3
      </Button>
    </div>
  );
};
