import { UnwrapErrError } from "./error";
import type { Result } from "./result";

export class Err<E extends Error = Error> implements Result<never, E> {
  public constructor(private readonly error: E) {}

  public unwrap(): never {
    throw new UnwrapErrError();
  }

  public unwrapErr(): E {
    return this.error;
  }

  public isOk(): this is never {
    return false;
  }

  public isErr(): this is Err<E> {
    return true;
  }

  public match<ReturnTypeIsErr, ReturnTypeIsOk>(options: {
    isErr: (error: E) => ReturnTypeIsErr;
    isOk: (value: never) => ReturnTypeIsOk;
  }): ReturnTypeIsErr | ReturnTypeIsOk {
    return options.isErr(this.error);
  }
}
