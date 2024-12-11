import { AssertError } from "./error";

/**
 * Asserts that a condition is true.
 * @param condition A condition that is expected to be true.
 * @param message The message to display if the condition is false.
 * @throws AssertError If the condition is false.
 *
 * @example
 * ```ts
 * function getData(): unknown {
 *     return fetch("https://example.com/data").then((response) => response.json());
 * }
 *
 * function isData(data: unknown): data is { hello: string } {
 *     return typeof data === "object" && data !== null && "hello" in data;
 * }
 *
 * const data = getData();
 * assert(isData(data), "Data should always be an object with a 'hello' property");
 * console.log(data.hello);
 * ```
 */
export function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw new AssertError(message);
  }
}
