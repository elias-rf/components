import PubSub from "pubsub-js";

export function useEmit(eventName: string) {
  return function emit(data: any) {
    PubSub.publish(eventName, data);
  };
}
