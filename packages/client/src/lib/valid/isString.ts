export const isString = (message = "Valor deve ser texto") => {
  return (value: any) => {
    if (typeof value === "string" || value instanceof String) {
      return null;
    }
    return message;
  };
};
