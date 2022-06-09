function useDebugState(stateValue, stateName, extraArgs) {
  if (typeof stateName !== "string" && typeof stateName !== "function") {
    throw new Error(
      "State name in useDebugState should be string or a function that returns string"
    );
  }
  const [customState, setCustomState] = useState(stateValue);
  if (typeof stateName === "string") useDebugValue(stateName);
  else useDebugValue({ state: customState, extraArgs }, stateName);
  return [customState, setCustomState];
}
