import { None } from "./none";
import type { Option } from "./option";
import { Some } from "./some";

export const option = <T>(value: T): Option<T> => {
  return value === null || value === undefined ? new None() : new Some(value);
};
