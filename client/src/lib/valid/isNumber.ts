const isNumber = (message = "Valor deve ser númerico") => {
  return (value: any) => {
    if (typeof value === "number" && isFinite(value)) {
      return null;
    }
    return message;
  };
};

export default isNumber;
