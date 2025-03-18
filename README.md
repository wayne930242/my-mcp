# MCP on Vercel

This project implements a Model Context Protocol (MCP) server on Vercel using Redis for message passing.

## Prerequisites

* Node.js 18+
* pnpm
* Redis server (local or remote)

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Set up environment variables:

Copy the example environment file to create your own:

```bash
cp .env.example .env
```

Then edit the `.env` file with your configuration:

```
REDIS_URL=redis://localhost:6379
PORT=3000
DEBUG=false
```

3. Start the development server:

```bash
pnpm dev
```

## Testing

### Running Tests

```bash
pnpm test
```

### Manual Testing

1. Start the development server:

```bash
pnpm dev
```

2. In another terminal, run the test client:

```bash
pnpm exec ts-node test-client.ts
```

## Deploying to Vercel

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Login to Vercel:

```bash
vercel login
```

3. Deploy:

```bash
vercel
```

4. Set up Redis:
   * Create a Redis instance (e.g., Upstash, Redis Labs)
   * Add the Redis URL to your Vercel project environment variables

## Project Structure

* `api/server.ts` - Main API handler for Vercel
* `lib/mcp-api-handler.ts` - MCP server implementation
* `dev-server.ts` - Local development server
* `test-client.ts` - Test client for interacting with the MCP server
* `tests/` - Test files

## Adding New Tools

Edit `api/server.ts` to add new tools to your MCP server:

```typescript
server.tool("myTool", { param: z.string() }, async ({ param }) => ({
  content: [{ type: "text", text: `Result: ${param}` }],
}));
```

## Debugging

To view logs in development:

* Local: Check your terminal output
* Vercel: Use `vercel logs` command or the Vercel dashboard
