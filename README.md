# Pokédex TypeScript CLI

A command-line Pokédex application built with TypeScript that allows you to explore Pokémon locations, catch Pokémon, and inspect your collection using the [PokeAPI](https://pokeapi.co/).

## Features

- 🗺️ **Location Explorer**: Navigate through Pokémon world locations
- 🔍 **Pokémon Discovery**: Find Pokémon in different locations
- 🎣 **Catching System**: Catch Pokémon with a probability-based system
- 📊 **Pokémon Inspector**: View detailed stats of your caught Pokémon
- ⚡ **Smart Caching**: Efficient API response caching with automatic cleanup
- 🎮 **Interactive REPL**: User-friendly command-line interface

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd pokedex_typescript

# Install dependencies
npm install

# Build and run the application
npm run dev
```

### Usage

Once the application starts, you'll see the `pokedex >` prompt. Try these commands:

```bash
# Get help
help

# Explore locations
map

# Explore a specific location
explore pastoria-city-area

# Catch a Pokémon
catch pikachu

# Inspect a caught Pokémon
inspect pikachu

# Navigate location pages
map     # Next page
mapb    # Previous page

# Exit the application
exit
```

## Development Commands

```bash
# Build the project
npm run build

# Run the application
npm start

# Development mode (build + run)
npm run dev

# Run tests
npm test

# Run tests in watch mode
npx vitest

# Run specific test file
npx vitest run src/pokecache.test.ts

# TypeScript compilation only
npx tsc
```

## Architecture

The application follows a modular architecture:

- **REPL System**: Interactive command-line interface
- **Command Pattern**: Each command is a separate module
- **Caching Layer**: Time-based cache for API responses
- **Type Safety**: Comprehensive TypeScript types for all PokeAPI data
- **Error Handling**: Graceful error handling with user-friendly messages

### Key Components

- `src/main.ts` - Application entry point
- `src/repl.ts` - REPL implementation and input handling
- `src/state.ts` - Central state management
- `src/commands.ts` - Command registry
- `src/command_*.ts` - Individual command implementations
- `src/pokeapi.ts` - PokeAPI client with caching
- `src/pokecache.ts` - Generic caching system

## Contributing

### Adding New Commands

1. Create a new file `src/command_<name>.ts`:
```typescript
import type { State } from "./state.js";

export async function commandYourCommand(state: State, ...args: string[]) {
  // Your command logic here
}
```

2. Register the command in `src/commands.ts`:
```typescript
import { commandYourCommand } from "./command_yourcommand.js";

// Add to getCommands() return object
yourcommand: {
  name: "yourcommand <args>",
  description: "Description of your command",
  callback: commandYourCommand,
}
```

### Running Tests

The project uses Vitest for testing with support for:
- Concurrent testing for time-sensitive cache operations
- Parameterized tests using `test.each()` and `describe.each()`
- Co-located test files with source code

## Technology Stack

- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment
- **Vitest** - Testing framework
- **PokeAPI** - Pokémon data source
- **ES Modules** - Modern module system

## License

ISC
