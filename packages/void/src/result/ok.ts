import { UnwrapOkError } from "./error";
import type { Result } from "./result";

export class Ok<T> implements Result<T, never> {
  public constructor(private readonly value: T) {}

  public unwrap(): T {
    return this.value;
  }

  public unwrapErr(): never {
    throw new UnwrapOkError();
  }

  public isOk(): this is Ok<T> {
    return true;
  }

  public isErr(): this is never {
    return false;
  }

  public match<ReturnTypeIsErr, ReturnTypeIsOk>(options: {
    isErr: (error: never) => ReturnTypeIsErr;
    isOk: (value: T) => ReturnTypeIsOk;
  }): ReturnTypeIsErr | ReturnTypeIsOk {
    return options.isOk(this.value);
  }
}
