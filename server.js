import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: userMessage },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Groq API error");
    }

    const reply = data.choices?.[0]?.message?.content || "⚠️ No response from Groq";
    res.json({ reply });
  } catch (error) {
    console.error("Groq error:", error.message);
    res.status(500).json({ reply: "Something went wrong with Groq API." });
  }
});

app.listen(5001, () => {
  console.log("✅ Groq backend running at http://localhost:5001");
});
