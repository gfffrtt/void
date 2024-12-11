export class UnwrapError extends Error {
  public readonly __tag = "unwrap:error";
  constructor() {
    super("Cannot unwrap a None value");
  }
}
