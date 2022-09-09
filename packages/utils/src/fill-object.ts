// FillObject fills an object with another object.
export function fillObject<T>(model: T, attrs: Partial<T> = {}): T {
  Object.keys(attrs).forEach((attr) => {
    model[attr] = attrs[attr];
  });
  return model;
}
