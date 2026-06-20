```markdown
# 🚀 API Tester - The Ultimate API Testing Suite

<div align="center">

![API Tester Banner](https://img.shields.io/badge/API%20Tester-v1.0.0-8b5cf6?style=for-the-badge&logo=api&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18.2-000000?style=for-the-badge&logo=express&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-4ade80?style=for-the-badge&logo=mit&logoColor=white)

**A beautiful, production-ready API testing tool with AI integration support**

[Features](#-features) • [Quick Start](#-quick-start) • [AI Support](#-ai-support) • [Tech Stack](#-tech-stack)

</div>

---

## ✨ Features

### 🔌 Core Features
- **Full HTTP Method Support** - GET, POST, PUT, PATCH, DELETE
- **Custom Headers** - Add unlimited custom headers dynamically
- **Request Body** - JSON editor with syntax highlighting
- **API Key Management** - Secure password-protected input with toggle visibility
- **Response Viewer** - Beautiful formatted responses with metadata
- **Request History** - Local storage with 50 latest requests
- **Keyboard Shortcuts** - `Ctrl+Enter` to send requests
- **Copy Response** - One-click copy to clipboard

### 🤖 AI Integration
- **10+ AI Providers** - Pre-configured for popular AI services
- **One-Click Setup** - Auto-fill endpoints, headers, and body
- **Provider Support**:
  - DeepSeek 🧠
  - OpenAI 🤖
  - Anthropic Claude 🔮
  - Google Gemini 🌟
  - Mistral AI 🌊
  - Cohere 🔷
  - Groq ⚡
  - Perplexity 🔍
  - Together AI 🤝
  - Replicate 🔄

### 🎨 UI/UX
- **Dark Theme** - Premium dark mode design
- **Glassmorphic UI** - Modern, elegant glass effects
- **Responsive Design** - Works on all screen sizes
- **Smooth Animations** - Beautiful transitions and hover effects
- **Accent Color** - Customizable purple accent (#ba80ff)

### 🛡️ Security
- **API Key Privacy** - Never stored in history or localStorage
- **Password Type** - Hidden by default with toggle visibility
- **CORS Support** - Secure cross-origin requests
- **Environment Variables** - Configurable backend settings

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/api-tester.git
cd api-tester
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

4. **Configure Environment**
```bash
# In backend directory, create .env file
echo "PORT=5000" > .env
echo "TIMEOUT=60000" >> .env
```

5. **Run the Application**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
# Backend running on http://localhost:5000
```

Terminal 2 - Frontend:
```bash
cd frontend
npm start
# Frontend running on http://localhost:3000
```

6. **Open your browser**
Navigate to `http://localhost:3000`

---

## 🎯 Usage Guide

### Testing a Regular API

1. **Enter URL** - Paste your API endpoint
2. **Select Method** - Choose HTTP method (GET, POST, etc.)
3. **Add Headers** - Click "Add Header" for custom headers
4. **Add Body** - For POST/PUT/PATCH, enable body and enter JSON
5. **Send Request** - Click "Send" or press `Ctrl+Enter`

### Testing an AI API

1. **Switch to AI Quick Test** - Click the "AI Quick Test" tab
2. **Select Provider** - Click your AI provider button
3. **Enter API Key** - Your API key will be securely hidden
4. **Send Request** - Click "Send" or press `Ctrl+Enter`

### Managing History

- **View History** - Click "Show History" in response panel
- **Load Request** - Click any history item to load it
- **Clear History** - Click trash icon in header and confirm

---

## 🤖 AI Provider Setup

### Getting API Keys

| Provider | Get API Key |
|----------|-------------|
| DeepSeek | [platform.deepseek.com](https://platform.deepseek.com) |
| OpenAI | [platform.openai.com](https://platform.openai.com) |
| Anthropic | [console.anthropic.com](https://console.anthropic.com) |
| Google Gemini | [makersuite.google.com](https://makersuite.google.com/app/apikey) |
| Mistral AI | [console.mistral.ai](https://console.mistral.ai) |
| Cohere | [dashboard.cohere.ai](https://dashboard.cohere.ai) |
| Groq | [console.groq.com](https://console.groq.com) |
| Perplexity | [perplexity.ai](https://www.perplexity.ai) |
| Together AI | [together.ai](https://together.ai) |
| Replicate | [replicate.com](https://replicate.com) |

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.7** - UI Framework
- **Raw CSS** - Custom styling with glassmorphism
- **SVG Icons** - Custom vector icons

### Backend
- **Node.js** - Runtime Environment
- **Express.js 4.18.2** - Web Framework
- **Axios** - HTTP Client
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment Variables

### Development Tools
- **Nodemon** - Auto-reload for development

---

## 📁 Project Structure

```
api-tester/
├── backend/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── routes/
│       └── apiRoutes.js
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.js
│       ├── App.jsx
│       ├── components/
│       │   ├── Header.jsx
│       │   ├── RequestPanel.jsx
│       │   ├── ResponsePanel.jsx
│       │   └── AIQuickSelect.jsx
│       └── styles/
│           └── main.css
└── README.md
```

---

## ⚡ API Endpoints

### Backend Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/proxy` | Proxy API requests |
| GET | `/health` | Health check |

### Request Format

```json
{
  "url": "https://api.example.com/endpoint",
  "method": "GET",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": "{\"key\": \"value\"}",
  "apiKey": "your-api-key"
}
```

---

## 🎨 Customization

### Changing Accent Color

In `main.css`, replace `#ba80ff` with your preferred color:

```css
:root {
  --accent-color: #your-color;
}
```

### Adding New AI Providers

In `AIQuickSelect.jsx`, add to the `aiProviders` array:

```javascript
{
  id: "your-provider",
  name: "Your Provider",
  color: "#your-color",
  config: {
    url: "https://api.your-provider.com/endpoint",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      // Your request body
    }, null, 2),
    description: "Your Provider API"
  }
}
```

---

## 🐛 Troubleshooting

### Common Issues

**Backend not running**
```bash
cd backend
npm run dev
```

**CORS errors**
Ensure backend is running and CORS is properly configured.

**API key not working**
- Verify API key format
- Check if billing is enabled (Gemini)
- Ensure correct authentication method

**History not saving**
- Check localStorage permissions
- Clear browser cache

---

## 👨‍💻 About the Developer

**Uzair** - Full Stack Developer passionate about building beautiful, functional applications.

<div align="center">

[![LinkedIn](https://img.shields.io/badge/Connect_on_LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/uzairdev1/)
[![GitHub](https://img.shields.io/badge/Follow_on_GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![Portfolio](https://img.shields.io/badge/Visit_Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://your-portfolio.com)

</div>

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- Built with ❤️ by [Uzair](https://www.linkedin.com/in/uzairdev1/)
- Inspired by Postman and Insomnia
- Special thanks to all AI providers for their amazing APIs

---

<div align="center">

**Built with ❤️ by Uzair**

[Report Bug](https://github.com/yourusername/api-tester/issues) · [Request Feature](https://github.com/yourusername/api-tester/issues)

⭐ Star this project if you find it useful!

---

### 🚀 Happy API Testing!

</div>

---

## 📊 Badges

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/yourusername/api-tester?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/api-tester?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/api-tester?style=social)
![GitHub followers](https://img.shields.io/github/followers/yourusername?style=social)

![GitHub issues](https://img.shields.io/github/issues/yourusername/api-tester)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/api-tester)
![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/api-tester)

</div>
```
