export default function reqIdGenFactory() {
  const maxInt = 2147483647;
  let nextReqId = 0;
  return function genReqId(req: any) {
    return req.id || (nextReqId = (nextReqId + 1) & maxInt);
  };
}
