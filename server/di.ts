import awilix from "awilix";

export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

container.register({});
