const isRequired = (message = "Valor deve ser informado") => {
  return (value: any) => {
    if (value) {
      return null;
    }
    return message;
  };
};

export default isRequired;
