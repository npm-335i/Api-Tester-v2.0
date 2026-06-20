import React from "react";
import "../styles/Tabs.css";

const AIQuickSelect = ({ onSelect }) => {
  const aiProviders = [
    {
      id: "deepseek",
      name: "DeepSeek",
      color: "#4D6BFE",
      config: {
        url: "https://api.deepseek.com/v1/chat/completions",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            model: "deepseek-chat",
            messages: [
              {
                role: "user",
                content: "Hello, how are you?",
              },
            ],
            temperature: 0.7,
            max_tokens: 1000,
          },
          null,
          2,
        ),
        description: "DeepSeek Chat API",
      },
    },
    {
      id: "openai",
      name: "OpenAI",
      color: "#10A37F",
      config: {
        url: "https://api.openai.com/v1/chat/completions",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: "Hello, how are you?",
              },
            ],
            temperature: 0.7,
            max_tokens: 1000,
          },
          null,
          2,
        ),
        description: "OpenAI GPT API",
      },
    },
    {
      id: "anthropic",
      name: "Anthropic",
      color: "#D4A574",
      config: {
        url: "https://api.anthropic.com/v1/messages",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify(
          {
            model: "claude-3-haiku-20240307",
            max_tokens: 1000,
            messages: [
              {
                role: "user",
                content: "Hello, how are you?",
              },
            ],
          },
          null,
          2,
        ),
        description: "Anthropic Claude API",
      },
    },
    {
      id: "gemini",
      name: "Google Gemini",
      icon: "🌟",
      color: "#4285F4",
      config: {
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?t",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            contents: [
              {
                parts: [
                  {
                    text: "Hello, how are you?",
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1000,
            },
          },
          null,
          2,
        ),
        description: "Google Gemini API (requires API key)",
        usesQueryParam: true,
        queryParamName: "key",
      },
    },
    {
      id: "mistral",
      name: "Mistral AI",
      color: "#F7B731",
      config: {
        url: "https://api.mistral.ai/v1/chat/completions",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            model: "mistral-tiny",
            messages: [
              {
                role: "user",
                content: "Hello, how are you?",
              },
            ],
            temperature: 0.7,
            max_tokens: 1000,
          },
          null,
          2,
        ),
        description: "Mistral AI API",
      },
    },
    {
      id: "cohere",
      name: "Cohere",
      color: "#FF6B6B",
      config: {
        url: "https://api.cohere.ai/v1/generate",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            model: "command",
            prompt: "Hello, how are you?",
            max_tokens: 1000,
            temperature: 0.7,
          },
          null,
          2,
        ),
        description: "Cohere API",
      },
    },
    {
      id: "groq",
      name: "Groq",
      color: "#FF3366",
      config: {
        url: "https://api.groq.com/openai/v1/chat/completions",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            model: "mixtral-8x7b-32768",
            messages: [
              {
                role: "user",
                content: "Hello, how are you?",
              },
            ],
            temperature: 0.7,
            max_tokens: 1000,
          },
          null,
          2,
        ),
        description: "Groq Cloud API",
      },
    },
    {
      id: "perplexity",
      name: "Perplexity",
      color: "#1A1A2E",
      config: {
        url: "https://api.perplexity.ai/chat/completions",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            model: "llama-3-sonar-small-32k-online",
            messages: [
              {
                role: "user",
                content: "Hello, how are you?",
              },
            ],
            temperature: 0.7,
            max_tokens: 1000,
          },
          null,
          2,
        ),
        description: "Perplexity AI API",
      },
    },
    {
      id: "together",
      name: "Together AI",
      color: "#6C63FF",
      config: {
        url: "https://api.together.xyz/v1/chat/completions",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            model: "meta-llama/Llama-2-70b-chat-hf",
            messages: [
              {
                role: "user",
                content: "Hello, how are you?",
              },
            ],
            temperature: 0.7,
            max_tokens: 1000,
          },
          null,
          2,
        ),
        description: "Together AI API",
      },
    },
    {
      id: "replicate",
      name: "Replicate",
      color: "#42A5F5",
      config: {
        url: "https://api.replicate.com/v1/predictions",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            version:
              "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
            input: {
              prompt: "Hello, how are you?",
              max_tokens: 1000,
              temperature: 0.7,
            },
          },
          null,
          2,
        ),
        description: "Replicate API",
      },
    },
  ];

  return (
    <div className="ai-quick-select">
      <div className="ai-quick-header">
        <h3>Quick AI Test</h3>
        <span className="ai-hint">Click any AI to auto-fill configuration</span>
      </div>
      <div className="ai-providers-grid">
        {aiProviders.map((ai) => (
          <button
            key={ai.id}
            className="ai-provider-btn"
            onClick={() => onSelect(ai.config)}
            style={{
              borderColor: ai.color,
              background: `linear-gradient(135deg, ${ai.color}10, ${ai.color}05)`,
            }}
          >
            <div className="ai-info">
              <span className="ai-name">{ai.name}</span>
              <span className="ai-description">{ai.config.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AIQuickSelect;
