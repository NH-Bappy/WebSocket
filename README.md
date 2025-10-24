# WebSocket
WebSocket is a communication protocol that provides full-duplex (two-way) communication between a client (like a web browser) and a server over a single, long-lived connection.

Unlike HTTP, which requires a new connection for each request and response, WebSocket allows both the client and server to send data to each other anytime, without repeatedly reconnecting.

Key Points:

Persistent connection: Once established, the connection stays open.
Real-time communication: Ideal for chat apps, games, live notifications, stock updates, etc.
Low latency: Faster than HTTP polling or long-polling.
Uses ws:// or wss:// (secure) instead of http:// or https://

Example Flow:

Client sends a request to upgrade an HTTP connection to a WebSocket.
Server accepts and upgrades the connection.
Both can now exchange messages instantly in real-time.