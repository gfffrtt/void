import type { None } from "./none";
import type { Some } from "./some";

export interface Option<T> {
  /**
   * Unwraps the option, yielding the content of a `Some`. If the value is a `None`, it will throw an error.
   * @throws UnwrapError If the value is a `None`.
   * @returns The content of the `Some`.
   *
   * @example
   * ```ts
   * const some = new Some(42);
   * console.log(some.unwrap()); // 42
   * ```
   *
   * @example
   * ```ts
   * const none = new None();
   * console.log(none.unwrap()); // Throws an error
   * ```
   */
  unwrap(): T;

  /**
   * Verifies that the option is a `Some`.
   * @returns `true` if the option is a `Some`, `false` otherwise.
   *
   * @example
   * ```ts
   * const some = new Some(42);
   * console.log(some.isSome()); // true
   * ```
   */
  isSome(): this is Some<T>;

  /**
   * Verifies that the option is a `None`.
   * @returns `true` if the option is a `None`, `false` otherwise.
   *
   * @example
   * ```ts
   * const none = new None();
   * console.log(none.isNone()); // true
   * ```
   */
  isNone(): this is None;

  /**
   * Applies a function to the contained value (if any), or else, it does nothing.
   * @param fn A function that takes the value of the `Some` and returns a new value.
   *
   * @example
   * ```ts
   * const some = new Some(42);
   * console.log(some.map(value => value * 2)); // 84
   * ```
   *
   * @example
   * ```ts
   * const none = new None();
   * console.log(none.map(value => value * 2)); // null
   * ```
   */
  map<U>(fn: (value: T) => U): Option<U>;

  /**
   * Applies a function to the contained value (if any), or returns the provided default (if not).
   * @param defaultValue A default value to return if the option is a `None`.
   * @param fn A function that takes the value of the `Some` and returns a new value.
   *
   * @example
   * ```ts
   * const some = new Some(42);
   * console.log(some.mapOr(0, value => value * 2)); // 84
   * ```
   */
  mapOr<U>(defaultValue: U, fn: (value: T) => U): U;

  /**
   * Applies a function to the contained value (if any), or returns the provided default (if not).
   * @param defaultValue A function that returns a default value to return if the option is a `None`.
   * @param fn A function that takes the value of the `Some` and returns a new value.
   *
   * @example
   * ```ts
   * const some = new Some(42);
   * console.log(some.mapOrElse(() => 0, value => value * 2)); // 84
   * ```
   */
  mapOrElse<U>(defaultValue: () => U, fn: (value: T) => U): U;

  /**
   * Unwraps a result, yielding the content of a `Some`. If the value is a `None` then it throws the provided error message.
   * @param message The error message to use if the option is a `None`.
   *
   * @example
   * ```ts
   * const some = new None();
   * console.log(some.expect("The value is a None")); // 42
   * ```
   */
  expect(message: string): T;

  /**
   * Unwraps a result, yielding the content of a `Some`. If the value is a `None` then it throws an error.
   * @param defaultValue A default value to use if the option is a `None`.
   * @returns The content of the `Some` or the default value.
   *
   * @example
   * ```ts
   * const some = new Some(42);
   * console.log(some.unwrapOr(0)); // 42
   * ```
   */
  unwrapOr(defaultValue: T): T;

  /**
   * Unwraps a result, yielding the content of a `Some`. If the value is a `None` then it computes a default value by calling the provided function.
   * @param fn A function that returns a default value to use if the option is a `None`.
   * @returns The content of the `Some` or the default value.
   *
   * @example
   * ```ts
   * const some = new Some(42);
   * console.log(some.unwrapOrElse(() => 0)); // 42
   * ```
   */
  unwrapOrElse(fn: () => T): T;

  /**
   * Returns the contained value or a null.
   */
  toJSON(): string | null;

  /**
   * Calls `isSome` if the option is a `Some`, otherwise, it calls `isNone`.
   * @param options A set of functions to match the value of the option.
   *
   * @example
   * ```ts
   * const some = new Some(42);
   * console.log(some.match({
   *  isSome: value => value * 2,
   * isNone: () => 0
   * })); // 84
   * ```
   */
  match<ReturnTypeSome, ReturnTypeNone>(options: {
    isSome: (value: T) => ReturnTypeSome;
    isNone: () => ReturnTypeNone;
  }): ReturnTypeSome | ReturnTypeNone;
}
