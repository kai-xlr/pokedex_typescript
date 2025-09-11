import { createInterface } from "readline";

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "pokedex > ",
  });

  rl.prompt();

  rl.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      rl.prompt();
      return;
    }

    const commandName = words[0];
    console.log(`Your command was: ${commandName}`);
    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input
    .trim()                // remove leading/trailing whitespace
    .toLowerCase()         // lowercase everything
    .split(/\s+/)          // split on one or more whitespace characters
    .filter(Boolean);      // remove empty strings just in case
}
