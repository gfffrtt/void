import type { Err } from "./err";
import type { Ok } from "./ok";

export interface Result<T, E extends Error = Error> {
  /**
   * Unwraps a result, yielding the content of an `Ok`.
   * @throws UnwrapErrError If the value is an `Err`.
   * @returns The content of the `Ok`.
   *
   * @example
   * ```ts
   * const ok = new Ok(42);
   * console.log(ok.unwrap()); // 42
   * ```
   *
   * @example
   * ```ts
   * const err = new Err("error");
   * console.log(err.unwrap()); // Throws an error
   * ```
   */
  unwrap(): T;

  /**
   * Unwraps a result, yielding the content of an `Err`.
   * @returns The content of the `Err`.
   * @throws UnwrapOkError If the value is an `Ok`.
   *
   * @example
   * ```ts
   * const ok = new Ok(42);
   * console.log(ok.unwrapErr()); // Throws an error
   * ```
   *
   * @example
   * ```ts
   * const err = new Err("error");
   * console.log(err.unwrapErr()); // "error"
   * ```
   */
  unwrapErr(): E;

  /**
   * Verifies that the result is an `Ok`.
   * @returns `true` if the result is an `Ok`, `false` otherwise.
   *
   * @example
   * ```ts
   * const ok = new Ok(42);
   * console.log(ok.isOk()); // true
   * ```
   */
  isOk(): this is Ok<T>;

  /**
   * Verifies that the result is an `Err`.
   * @returns `true` if the result is an `Err`, `false` otherwise.
   *
   * @example
   * ```ts
   * const err = new Err("error");
   * console.log(err.isErr()); // true
   * ```
   */
  isErr(): this is Err<E>;

  /**
   *
   */
  match<ReturnTypeIsErr, ReturnTypeIsOk>(options: {
    isErr: (error: E) => ReturnTypeIsErr;
    isOk: (value: T) => ReturnTypeIsOk;
  }): ReturnTypeIsErr | ReturnTypeIsOk;
}
