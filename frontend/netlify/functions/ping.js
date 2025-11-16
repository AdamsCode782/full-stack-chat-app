export default async () => {
  try {
    await fetch("https://full-stack-chat-app-rm9v.onrender.com");
    return new Response("Pinged backend", { status: 200 });
  } catch (err) {
    return new Response("Failed to ping backend", { status: 500 });
  }
};
