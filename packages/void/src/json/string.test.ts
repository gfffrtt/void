import { expect, test } from "vitest";
import { None } from "../option";

test("Should stringify an object, replacing a option with a null", () => {
  const payload = { name: new None() };
  const result = JSON.stringify(payload);
  expect(result).toBe('{"name":null}');
});
