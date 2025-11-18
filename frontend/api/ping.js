export default async function handler(req, res) {
  try {
    // Ping your Render backend directly
    await fetch("https://full-stack-chat-app-rm9v.onrender.com/");
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Ping failed:", err);
    return res.status(500).json({ error: "Ping failed" });
  }
}
