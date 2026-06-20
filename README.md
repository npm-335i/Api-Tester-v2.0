# 🚀 API Tester - The Ultimate API Testing Suite

<p align="center">

<img src="https://img.shields.io/badge/API%20Tester-v1.0.0-ba80ff?style=for-the-badge&logo=api&logoColor=white" />
<img src="https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Express-4.18.2-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/License-MIT-4ade80?style=for-the-badge&logo=mit&logoColor=white" />

</p>

<p align="center">
A beautiful, production-ready API testing tool with AI integration support
</p>

<p align="center">
<a href="#-features">Features</a> • 
<a href="#-quick-start">Quick Start</a> • 
<a href="#-ai-integration">AI Support</a> • 
<a href="#-tech-stack">Tech Stack</a>
</p>

---

# ✨ Features

## 🔌 Core Features

- Full HTTP Method Support  
  - GET  
  - POST  
  - PUT  
  - PATCH  
  - DELETE  

- Dynamic Custom Headers  
- JSON Request Body Editor  
- API Key Input with Secure Visibility Toggle  
- Beautiful Response Viewer  
- Response Metadata Display  
- Request History (Last 50 Requests)  
- Keyboard Shortcut Support (`CTRL + ENTER`)  
- One Click Response Copy  

---

# 🤖 AI Integration

API Tester includes built-in support for popular AI providers.

## Supported AI Providers

- 🧠 DeepSeek  
- 🤖 OpenAI  
- 🔮 Anthropic Claude  
- 🌟 Google Gemini  
- 🌊 Mistral AI  
- 🔷 Cohere  
- ⚡ Groq  
- 🔍 Perplexity  
- 🤝 Together AI  
- 🔄 Replicate  

## AI Quick Setup

Choose your provider and the application automatically configures:

- API Endpoint  
- Required Headers  
- Request Body  
- HTTP Method  

Just paste your API key and start testing.

---

# 🎨 UI / UX

- 🌙 Premium Dark Theme  
- 🪟 Glassmorphic Design  
- 💜 Accent Color `#ba80ff`  
- 📱 Fully Responsive Layout  
- ✨ Smooth Animations  
- 🎯 Clean Developer Experience  

---

# 🛡️ Security Features

- 🔒 API keys are never stored  
- 🔒 API keys excluded from history  
- 🔒 Hidden password-style input  
- 🔒 Secure backend proxy  
- 🔒 Environment-based configuration  
- 🔒 CORS protection  

---

# 🚀 Quick Start

## ⚙️ Prerequisites

- Node.js (v14 or higher)  
- npm or yarn  

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/npm-335i/api-tester.git
cd api-tester
```

🖥️ Backend Setup
cd backend
npm install

Create .env file:

PORT=5000
TIMEOUT=60000

Run backend:

npm run dev

Backend runs at:

http://localhost:5000
🌐 Frontend Setup
cd frontend
npm install

Start frontend:

npm start

Frontend runs at:

http://localhost:3000
🎯 Usage
🔌 Testing APIs
Enter API URL
Select HTTP method
Add headers if needed
Add JSON body (POST/PUT/PATCH)
Click Send or press CTRL + ENTER
🤖 Testing AI APIs
Open AI Quick Test tab
Select provider
Enter API key
Send request
🤖 AI Providers
Provider	URL
DeepSeek	https://platform.deepseek.com
OpenAI	https://platform.openai.com
Claude	https://console.anthropic.com
Gemini	https://makersuite.google.com
Mistral	https://console.mistral.ai
Cohere	https://dashboard.cohere.ai
Groq	https://console.groq.com
Perplexity	https://www.perplexity.ai
Together AI	https://together.ai
Replicate	https://replicate.com
🛠️ Tech Stack
Frontend
React 19
Raw CSS
SVG Icons
Glassmorphism UI
Backend
Node.js
Express.js
Axios
CORS
dotenv
Dev Tools
Nodemon
📁 Project Structure
api-tester/
│
├── backend/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── routes/
│       └── apiRoutes.js
│
└── frontend/
    ├── package.json
    └── src/
        ├── App.jsx
        ├── components/
        │   ├── Header.jsx
        │   ├── RequestPanel.jsx
        │   ├── ResponsePanel.jsx
        │   └── AIQuickSelect.jsx
        └── styles/
            └── main.css
⚡ API Endpoints
POST Proxy Request
POST /api/proxy
Example Request
{
  "url": "https://api.example.com/data",
  "method": "GET",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": "{}",
  "apiKey": "your-api-key"
}
Health Check
GET /health
🎨 Customization
Change Accent Color

Edit:

frontend/src/styles/main.css

Update:

:root {
  --accent-color: #ba80ff;
}
➕ Add AI Provider

Edit:

AIQuickSelect.jsx

Example:

{
  id: "provider",
  name: "Provider Name",
  config: {
    url: "https://api.provider.com",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({})
  }
}
🐛 Troubleshooting
Backend not running
cd backend
npm run dev
CORS Issues
Ensure backend is running
Verify correct API URL
Enable CORS in server
API Key Issues
Check validity
Enable billing if required
Verify headers
👨‍💻 Developer

Uzair

GitHub: https://github.com/npm-335i

📜 License

MIT License
Free to use and modify.

🤝 Contributing
Fork repository

Create branch

git checkout -b feature-name

Commit changes

git commit -m "feat: add feature"

Push branch

git push origin feature-name
Open Pull Request
🙏 Acknowledgments

Built with ❤️ by Uzair

Inspired by:

Postman
Insomnia
<p align="center">
🚀 Happy API Testing!

⭐ Star this repo if you like it

</p> ```
