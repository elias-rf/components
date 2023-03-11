export const context: { [name: string]: any } = {};

export const container = {
  add(name: string, dependency: any) {
    console.log(`🚀 ~ file: container.ts:5 ~ add ~ name:`, name);
    if (context[name] === undefined) {
      context[name] = dependency;
    }
  },
  replace(name: string, dependency: any) {
    context[name] = dependency;
  },
  has(name: string) {
    return context[name] !== undefined;
  },
};
