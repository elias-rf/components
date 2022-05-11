interface Validator {
  (value: any): string;
}

const valid = (value: any, validator: Validator | Validator[]) => {
  let validators: Validator[];
  if (Array.isArray(validator)) {
    validators = validator;
  } else {
    validators = [validator];
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
