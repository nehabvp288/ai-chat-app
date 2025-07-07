# 🧠 AI Chat App (React + Tailwind + Groq)

A sleek, fast, and responsive AI chat interface built using **React** and **Tailwind CSS**, powered by **Groq's LLaMA 3 model**. I created this project to explore how frontend apps can talk to LLMs using real APIs — without relying on paid OpenAI keys.

---

## ✨ Features

- 🤖 Chat UI with auto-typing animation
- 🌗 Dark/Light mode toggle
- 💬 AI replies from Groq’s LLaMA 3 (70B)
- 🔁 Retry logic + error handling
- 💾 Remembers chat using `localStorage`
- 📄 `.env` protected via `.gitignore`
- 🚀 Built with Vite (super fast dev)
- 📱 Fully responsive design
- 💡 Debounced input for better UX
- 🧪 *(Future)* Unit tests with Jest/RTL

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS  
- **Backend**: Node.js, Express  
- **AI Model**: Groq’s LLaMA 3 (`llama3-70b-8192`)  
- **Dev Tools**: Vite, dotenv  
- **Hosting**: Vercel *(Coming soon)*

---

## 🧰 Setup Instructions

1. **Clone the repo**  
   `git clone https://github.com/nehabvp288/ai-chat-app.git`

2. **Install dependencies**  
   `npm install`

3. **Create a `.env` file**  
   GROQ_API_KEY=your_groq_key_here

   
4. **Start the servers**  
Frontend: `npm run dev`  
Backend: `node server.js`

5. **Visit**  
[http://localhost:5173](http://localhost:5173)

---

## 🔮 Coming Soon

- 🔄 Model switcher (GPT-4, Claude, etc.)
- 📝 Prompt templates (Summarize, Translate, etc.)
- 🔥 Chat history with Firebase or Supabase
- 📤 Export chat as `.txt`
- 📱 PWA support (installable/offline)
- ✅ Tests with Jest + RTL

---

## 📬 Contact

**Neha Joshi**  
[LinkedIn](https://www.linkedin.com/in/neha-joshi-722b29257)  
[GitHub](https://github.com/nehabvp288)

---

> ⭐ If you like this project, feel free to give it a star!
