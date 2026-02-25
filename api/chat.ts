import type { NextApiRequest, NextApiResponse } from "next";

interface DeepSeekChoice {
  message: {
    content: string;
  };
}

interface DeepSeekResponse {
  choices?: DeepSeekChoice[];
}

interface DeepSeekResponse {
  choices?: DeepSeekChoice[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  if (!process.env.DEEPSEEK_API_KEY) {
    console.error("DEEPSEEK_API_KEY not set!");
    return res.status(500).json({ error: "Server misconfiguration" });
  }

  try {
    const response = await fetch(
      "https://api.deepseek.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: message },
          ],
        }),
      }
    );

    const data: DeepSeekResponse = await response.json();
    console.log("DeepSeek raw response:", data);

    const reply = data.choices?.[0]?.message?.content || "No response from AI";

    res.status(200).json({ reply });
  } catch (err: any) {
    console.error("SERVER ERROR:", err);
    res.status(500).json({ error: err.message || "Internal server error" });
  }
}
