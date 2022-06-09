import day from "../day";

const isMDY = (message = "Valor deve ser ano-mes-dia") => {
  return (value: any) => {
    if (day(value, "YYYY-MM-DD", true).isValid()) {
      return null;
    }
    return message;
  };
};

export default isMDY;
