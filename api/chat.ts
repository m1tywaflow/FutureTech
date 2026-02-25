import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Новый тип — content лежит прямо внутри choices
type DeepSeekResponse = {
  choices?: {
    role: string;
    content: string;
  }[];
};

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  console.log("Incoming message:", message);
  console.log("API KEY:", process.env.DEEPSEEK_API_KEY);

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
    console.log("DeepSeek response:", data);

    // Теперь обращаемся к content напрямую
    const reply = data.choices?.[0]?.content || "No response from AI";

    res.json({ reply });
  } catch (err: any) {
    console.error("SERVER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
