import crypto from "node:crypto";
import { getAuth } from "@clerk/nextjs/server";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secret = process.env.CHATBASE_SECRET_KEY;
  if (!secret) {
    return res.status(500).json({ error: "Missing CHATBASE_SECRET_KEY env var" });
  }

  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: "Unauthenticated" });
  }

  const hash = crypto.createHmac("sha256", secret).update(userId).digest("hex");

  return res.status(200).json({ userId, hash });
}
