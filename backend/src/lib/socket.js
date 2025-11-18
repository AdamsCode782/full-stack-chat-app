import { Server } from "socket.io";

let io;
const userSocketMap = {}; 

export function setupSocket(server) {
  io = new Server(server, {
    cors: {
      origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
         "https://full-stack-chat-app-murex.vercel.app",
      ],
      credentials: true,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("🔌 User connected:", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId) userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
      console.log("❌ User disconnected:", socket.id);
      if (userId) delete userSocketMap[userId];
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
  });

  global.io = io;
}

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

export { io };
