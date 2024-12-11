import { None } from "../option/none";

export function parse(json: string): unknown {
  return JSON.parse(json, (_, value) => {
    if (value === null) return new None();
    return value;
  });
}
