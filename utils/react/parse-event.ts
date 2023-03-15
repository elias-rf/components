export function parseEvent(event: any) {
  return {
    name: event.currentTarget.name | event.name,
    value: event.currentTarget.value | event.value,
  };
}
