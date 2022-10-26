export function isPromise(arg: any) {
  if (typeof arg === "object" && typeof arg.then === "function") return true;
  return false;
}
