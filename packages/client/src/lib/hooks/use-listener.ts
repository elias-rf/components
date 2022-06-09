import data from "@/utils/fake/data";
import PubSub from "pubsub-js";
import React from "react";

export default function useListener(
  eventName: string,
  callback: (data: any) => void
) {
  React.useEffect(() => {
    const token = PubSub.subscribe(eventName, (msg, data) => {
      callback(data);
    });
    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);
}
