export class UnwrapErrError extends Error {
  public readonly __tag = "unwrap:err";
  constructor() {
    super("Cannot unwrap a Err value");
  }
}

export class UnwrapOkError extends Error {
  public readonly __tag = "unwrap:ok";
  constructor() {
    super("Cannot unwrap an Ok value");
  }
}
