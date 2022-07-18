import { day } from "@vt/utils";

export const isMDY = (message = "Valor deve ser ano-mes-dia") => {
  return (value: any) => {
    if (day(value, "YYYY-MM-DD", true).isValid()) {
      return null;
    }
    return message;
  };
};
