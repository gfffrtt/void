import { expect, test } from "vitest";
import { parse } from "./parse";
import type { Option } from "../option/option";
import { assert } from "../assert/assert";

type ParsedJson = {
  name: Option<string>;
};

function isParsedJson(value: unknown): value is ParsedJson {
  return typeof value === "object" && value !== null;
}

test("Should parse JSON and replace null with Option", () => {
  const json = `{"name": null}`;
  const result = parse(json);
  assert(isParsedJson(result), "Expected a ParsedJson object");
  expect(result.name.isNone()).toBe(true);
});
