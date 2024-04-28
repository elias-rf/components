function isArray(input?: any): boolean {
  return (
    input instanceof Array ||
    Object.prototype.toString.call(input) === "[object Array]"
  );
}

export default isArray;
