import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "Charmander Bulbasaur PIKACHU",
    expected: ["charmander", "bulbasaur", "pikachu"],
  },
  {
    input: "\n   Squirtle\tMeowth   Eevee\r\n",
    expected: ["squirtle", "meowth", "eevee"],
  },
  {
    input: "   ",
    expected: [], // only whitespace should give empty array
  },
  {
    input: "Pidgey",
    expected: ["pidgey"], // single word still works
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);

    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
