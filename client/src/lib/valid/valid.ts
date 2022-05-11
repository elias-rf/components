interface ValidatorFunc {
  (value: any): string | null;
}

interface Validator {
  (message: string): ValidatorFunc;
}

const valid = (value: any, validator: ValidatorFunc | ValidatorFunc[]) => {
  let validators: ValidatorFunc[] = [];
  if (!Array.isArray(validator)) {
    validators = [validator];
  } else {
    validators = validator;
  }

  for (const v of validators) {
    const resp = v(value);
    if (resp) {
      return resp;
    }
  }
  return null;
};

export default valid;
