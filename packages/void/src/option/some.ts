import type { Option } from "./option";

export class Some<T> implements Option<T> {
  public constructor(private readonly value: T) {}

  map<U>(fn: (value: T) => U): Option<U> {
    throw new Error("Method not implemented.");
  }

  mapOr<U>(defaultValue: U, fn: (value: T) => U): U {
    throw new Error("Method not implemented.");
  }

  mapOrElse<U>(defaultValue: () => U, fn: (value: T) => U): U {
    throw new Error("Method not implemented.");
  }

  expect(message: string): T {
    throw new Error("Method not implemented.");
  }

  unwrapOr(defaultValue: T): T {
    throw new Error("Method not implemented.");
  }

  unwrapOrElse(fn: () => T): T {
    throw new Error("Method not implemented.");
  }

  public unwrap(): T {
    return this.value;
  }

  public isSome(): this is Some<T> {
    return true;
  }

  public isNone(): this is never {
    return false;
  }

  public toJSON(): string {
    return JSON.stringify(this.value);
  }

  public match<ReturnTypeSome, ReturnTypeNone>(options: {
    isSome: (value: T) => ReturnTypeSome;
    isNone: () => ReturnTypeNone;
  }): ReturnTypeSome | ReturnTypeNone {
    return options.isSome(this.value);
  }
}
