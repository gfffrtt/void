export class AssertError extends Error {
  public readonly __tag = "assert:error";
  constructor(message: string) {
    super(message);
  }
}
