import http from "http";
import handler from "./server";
import { PORT } from "../lib/env";

// Create a simple HTTP server
const server = http.createServer(async (req, res) => {
  try {
    await handler(req, res);
  } catch (error) {
    console.error("Error handling request:", error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`MCP server listening on port ${PORT}`);
  console.log(`- SSE endpoint: http://localhost:${PORT}/sse`);
  console.log(`- Message endpoint: http://localhost:${PORT}/message`);
});

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
