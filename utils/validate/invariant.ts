const prefix = "Invariant failed";

// https://github.com/alexreardon/tiny-invariant/blob/master/src/tiny-invariant.ts
// Throw an error if the condition fails
// Strip out error messages for production
// > Not providing an inline default argument for message as the result is smaller
export function invariant(
  condition: any,
  // Can provide a string, or a function that returns a string for cases where
  // the message takes a fair amount of effort to compute
  message?: string | (() => string)
): asserts condition {
  if (condition) {
    return;
  }

  if (condition === undefined) {
    throw new Error("Condition not provided");
  }

  // Condition not passed

  const provided: string | undefined =
    typeof message === "function" ? message() : message;

  // Options:
  // 1. message provided: provided
  // 2. message not provided: prefix
  const value: string = provided ? provided : prefix;
  throw new Error(value);
}
