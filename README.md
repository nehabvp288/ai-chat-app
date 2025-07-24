README.md – AI Chat App

# 🧠 AI Chat App – React · Tailwind · Groq LLaMA 3

A sleek, fast, and responsive AI chat app built using **React** and **Tailwind CSS**, powered by **Groq's blazing-fast LLaMA 3 (70B)** model.

I built this to explore how frontend apps can talk to real LLMs — without relying on paid OpenAI keys. It’s lightweight, clean, and fun to use.

---

## ✨ Features

- 🤖 Real-time AI responses with auto-typing animation  
- 🌗 Dark/Light mode switch — your eyes will thank you  
- 💬 Smart replies from Groq’s LLaMA 3 (70B)  
- 🔁 Retry logic + error boundaries  
- 💾 Chat saved with `localStorage`  
- 🔒 API keys handled via `.env` + `.gitignore`  
- 🚀 Built with Vite — fast refresh, smooth dev  
- 📱 Fully responsive across devices  
- 💡 Debounced input for better UX  
- 🧪 *(Coming soon)* Unit tests with Jest + RTL  

---

## ⚙️ Tech Stack

| Category     | Tools / Libraries                             |
|--------------|-----------------------------------------------|
| Frontend     | React, Tailwind CSS                           |
| Backend/API  | Node.js, Express                              |
| AI Model     | Groq LLaMA 3 (`llama3-70b-8192`)              |
| Dev Tools    | Vite, dotenv, Git, Prettier, ESLint           |
| Hosting      | Vercel *(coming soon)*                        |

---

## 🚀 Quick Start

```bash
git clone https://github.com/nehabvp288/ai-chat-app.git
cd ai-chat-app
npm install
```

Create a `.env` file in the root:

```bash
GROQ_API_KEY=your_groq_key_here
```

Run both servers:

```bash
# Frontend
npm run dev

# Backend
node server.js
```

Open the app in your browser:  
[http://localhost:5173](http://localhost:5173)

---

## 🔮 Roadmap

- 🔄 Model switcher (GPT-4, Claude, etc.) *(coming soon)*  
- ✍️ Prompt templates (Summarize, Translate, etc.) *(coming soon)*  
- 📦 Chat history (Firebase or Supabase) *(coming soon)*  
- 📤 Export chat as `.txt` *(coming soon)*  
- 📲 PWA support *(coming soon)*  
- ✅ Add unit tests (Jest + RTL) *(coming soon)*  

---

## 📸 Screenshots

> 📷 *Coming soon — working on a clean UI screenshot or GIF demo!*

---

## 🙋‍♀️ About Me

**Neha Joshi**  
Frontend Developer | React · TypeScript · UI/UX  
📍 Bengaluru, India  
📫 [LinkedIn](https://www.linkedin.com/in/neha-joshi-722b29257) | [GitHub](https://github.com/nehabvp288)

---

## ⭐ Like this project?

If this project helped or inspired you, please consider giving it a ⭐  
Your feedback keeps me building and improving!

