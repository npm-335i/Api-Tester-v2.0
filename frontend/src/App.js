import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import RequestPanel from "./components/RequestPanel";
import ResponsePanel from "./components/ResponsePanel";
import api from "./api/axios";
import "./styles/Main.css";
import "./App.css";

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("apiHistory");
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        const cleanHistory = parsed.map(entry => ({
          ...entry,
          request: {
            ...entry.request,
            apiKey: undefined
          }
        }));
        setHistory(cleanHistory);
      } catch (e) {
        console.error("Failed to parse history:", e);
      }
    }
  }, []);

  const saveToHistory = (request, response) => {
    const newEntry = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      request: {
        url: request.url,
        method: request.method,
        headers: request.headers || {},
        body: request.body || null,
      },
      response: {
        status: response.status,
        statusText: response.statusText,
        responseTime: response.responseTime,
        responseSize: response.responseSize,
      },
    };

    const updatedHistory = [newEntry, ...history].slice(0, 50);
    setHistory(updatedHistory);
    localStorage.setItem("apiHistory", JSON.stringify(updatedHistory));
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem("apiHistory");
  };

  const handleSendRequest = async (requestData) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const isAIRequest = requestData.url.includes('api.openai.com') || 
                          requestData.url.includes('api.deepseek.com') ||
                          requestData.url.includes('api.anthropic.com') ||
                          requestData.url.includes('api.mistral.ai') ||
                          requestData.url.includes('api.cohere.ai') ||
                          requestData.url.includes('api.groq.com') ||
                          requestData.url.includes('api.perplexity.ai') ||
                          requestData.url.includes('api.together.xyz') ||
                          requestData.url.includes('generativelanguage.googleapis.com') ||
                          requestData.url.includes('api.replicate.com');

      if (isAIRequest && !requestData.apiKey) {
        setError("⚠️ API Key is required for AI services. Please enter your API key.");
        setLoading(false);
        return;
      }

      const requestBody = {
        url: requestData.url,
        method: requestData.method,
        headers: requestData.headers || {},
        body: requestData.body || null,
        apiKey: requestData.apiKey || null,
      };

      const response = await api.post("/proxy", requestBody);
      const data = response.data;

      if (data.success) {
        setResponse(data);
        saveToHistory(requestData, data);
      } else {
        setError(data.error || "Request failed");
        setResponse(data);
      }
    } catch (error) {
      setError("Failed to connect to the proxy server. Please make sure the backend is running.");
      console.error("Frontend error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setResponse(null);
    setError(null);
  };

  const handleHistorySelect = (entry) => {
    const requestData = {
      url: entry.request.url,
      method: entry.request.method,
      headers: entry.request.headers,
      body: entry.request.body,
    };
    
    window.dispatchEvent(new CustomEvent('loadHistoryRequest', { detail: requestData }));
  };

  return (
    <div className="app">
      <Header 
        requestCount={history.length} 
        onClearHistory={handleClearHistory}
      />
      <div className="main-container">
        <RequestPanel 
          onSend={handleSendRequest} 
          loading={loading}
          onClear={handleClear}
        />
        <ResponsePanel 
          response={response} 
          loading={loading}
          error={error}
          history={history}
          onHistorySelect={handleHistorySelect}
        />
      </div>
    </div>
  );
}

export default App;