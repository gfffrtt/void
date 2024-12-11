import { UnwrapError } from "./error";
import type { Option } from "./option";

export class None implements Option<never> {
  map<U>(fn: (value: never) => U): Option<U> {
    throw new Error("Method not implemented.");
  }

  mapOr<U>(defaultValue: U, fn: (value: never) => U): U {
    throw new Error("Method not implemented.");
  }

  mapOrElse<U>(defaultValue: () => U, fn: (value: never) => U): U {
    throw new Error("Method not implemented.");
  }

  expect(message: string): never {
    throw new Error("Method not implemented.");
  }

  unwrapOr(defaultValue: never): never {
    throw new Error("Method not implemented.");
  }

  unwrapOrElse(fn: () => never): never {
    throw new Error("Method not implemented.");
  }

  public unwrap(): never {
    throw new UnwrapError();
  }

  public isSome(): this is never {
    return false;
  }

  public isNone(): this is None {
    return true;
  }

  public toJSON(): null {
    return null;
  }

  public match<ReturnTypeSome, ReturnTypeNone>(options: {
    isSome: (value: never) => ReturnTypeSome;
    isNone: () => ReturnTypeNone;
  }): ReturnTypeSome | ReturnTypeNone {
    return options.isNone();
  }
}
