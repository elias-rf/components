export const pipe =
  (...functions:any[]) =>
  (value:any) => {
    return functions.reduce((currentValue, currentFunction) => {
      return currentFunction(currentValue);
    }, value);
  };
