import React, { useState, useEffect, useRef, useCallback } from "react";
import AIQuickSelect from "./AIQuickSelect";

const RequestPanel = ({ onSend, loading, onClear }) => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [apiKey, setApiKey] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);
  const [headers, setHeaders] = useState([{ key: "", value: "" }]);
  const [body, setBody] = useState("");
  const [showBody, setShowBody] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("manual");

  const textareaRef = useRef(null);

  const handleSend = useCallback(() => {
    if (!url.trim()) {
      setError("Please enter a URL");
      return;
    }

    try {
      new URL(url);
    } catch (e) {
      setError("Invalid URL format. Please include http:// or https://");
      return;
    }

    setError("");

    const filteredHeaders = headers.reduce((acc, header) => {
      if (header.key.trim() && header.value.trim()) {
        acc[header.key.trim()] = header.value.trim();
      }
      return acc;
    }, {});

    const requestData = {
      url: url.trim(),
      method: method,
      headers: filteredHeaders,
      apiKey: apiKey.trim() || null,
      body: showBody && body ? body : null,
    };

    onSend(requestData);
  }, [url, method, headers, apiKey, showBody, body, onSend]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleSend();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleSend]);

  useEffect(() => {
    const handleHistoryLoad = (e) => {
      const { url, method, headers, body } = e.detail;
      setUrl(url || "");
      setMethod(method || "GET");
      
      if (headers && Object.keys(headers).length > 0) {
        setHeaders(Object.entries(headers).map(([key, value]) => ({ key, value })));
      } else {
        setHeaders([{ key: "", value: "" }]);
      }
      
      if (body) {
        setBody(body);
        setShowBody(true);
      } else {
        setBody("");
        setShowBody(false);
      }
      
      setError("");
    };

    window.addEventListener('loadHistoryRequest', handleHistoryLoad);
    return () => window.removeEventListener('loadHistoryRequest', handleHistoryLoad);
  }, []);

  const handleAddHeader = () => {
    setHeaders([...headers, { key: "", value: "" }]);
  };

  const handleRemoveHeader = (index) => {
    const newHeaders = headers.filter((_, i) => i !== index);
    setHeaders(newHeaders);
  };

  const handleHeaderChange = (index, field, value) => {
    const newHeaders = [...headers];
    newHeaders[index][field] = value;
    setHeaders(newHeaders);
  };

  const handleAISelect = (config) => {
    setUrl(config.url);
    setMethod(config.method);
    
    const headerEntries = Object.entries(config.headers || {});
    if (headerEntries.length > 0) {
      setHeaders(headerEntries.map(([key, value]) => ({ key, value })));
    } else {
      setHeaders([{ key: "", value: "" }]);
    }
    
    if (config.body) {
      setBody(config.body);
      setShowBody(true);
    } else {
      setBody("");
      setShowBody(false);
    }
    
    setError("");
    setActiveTab("manual");
  };

  const handleClear = () => {
    setUrl("");
    setMethod("GET");
    setApiKey("");
    setShowApiKey(false);
    setHeaders([{ key: "", value: "" }]);
    setBody("");
    setShowBody(false);
    setError("");
    setActiveTab("manual");
    onClear();
  };

  const isBodyMethod = ["POST", "PUT", "PATCH"].includes(method);

  const toggleApiKeyVisibility = () => {
    setShowApiKey(!showApiKey);
  };

  return (
    <div className="request-panel glass">
      <div className="panel-header">
        <h2>Request</h2>
        <div className="panel-actions">
          <button className="btn-clear" onClick={handleClear}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z"/>
            </svg>
            Clear
          </button>
          <button className="btn-send" onClick={handleSend} disabled={loading}>
            {loading ? (
              <span className="spinner"></span>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
                Send
              </>
            )}
          </button>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="tab-switcher">
        <button 
          className={`tab-btn ${activeTab === "manual" ? "active" : ""}`}
          onClick={() => setActiveTab("manual")}
        >
          Manual
        </button>
        <button 
          className={`tab-btn ${activeTab === "ai" ? "active" : ""}`}
          onClick={() => setActiveTab("ai")}
        >
          AI Quick Test
        </button>
      </div>

      {activeTab === "ai" && (
        <AIQuickSelect onSelect={handleAISelect} />
      )}

      <div className="request-form">
        <div className="form-row url-row">
          <select 
            className="method-select" 
            value={method} 
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>
          <input
            type="text"
            className="url-input"
            placeholder="Enter URL (e.g., https://api.example.com/users)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div className="form-row api-key-row">
          <label className="input-label">API Key</label>
          <div className="api-key-wrapper">
            <input
              type={showApiKey ? "text" : "password"}
              className="api-key-input"
              placeholder="Enter your API key (if required)"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <button
              type="button"
              className="btn-toggle-password"
              onClick={toggleApiKeyVisibility}
              aria-label={showApiKey ? "Hide API key" : "Show API key"}
            >
              {showApiKey ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="form-section">
          <div className="section-header">
            <h3>Headers</h3>
            <button className="btn-add" onClick={handleAddHeader}>
              + Add Header
            </button>
          </div>
          <div className="headers-container">
            {headers.map((header, index) => (
              <div key={index} className="header-row">
                <input
                  type="text"
                  className="header-key"
                  placeholder="Key"
                  value={header.key}
                  onChange={(e) => handleHeaderChange(index, "key", e.target.value)}
                />
                <input
                  type="text"
                  className="header-value"
                  placeholder="Value"
                  value={header.value}
                  onChange={(e) => handleHeaderChange(index, "value", e.target.value)}
                />
                {headers.length > 1 && (
                  <button 
                    className="btn-remove-header"
                    onClick={() => handleRemoveHeader(index)}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {isBodyMethod && (
          <div className="form-section">
            <div className="section-header">
              <h3>Request Body</h3>
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={showBody}
                  onChange={(e) => setShowBody(e.target.checked)}
                />
                <span className="toggle-slider"></span>
                Enable Body
              </label>
            </div>
            {showBody && (
              <textarea
                ref={textareaRef}
                className="body-textarea"
                placeholder='{"key": "value"}'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={8}
                spellCheck={false}
              />
            )}
          </div>
        )}

        <div className="shortcut-hint">
          Press <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to send
        </div>
      </div>
    </div>
  );
};

export default RequestPanel;