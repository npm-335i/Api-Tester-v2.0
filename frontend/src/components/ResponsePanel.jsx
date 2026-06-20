import React, { useState } from "react";

const ResponsePanel = ({ response, loading, error, history = [], onHistorySelect }) => {
  const [copied, setCopied] = useState(false);
  const [showHistory, setShowHistory] = useState(true);

  const formatResponseBody = (data) => {
    if (!data) return "No response data";

    try {
      if (typeof data === "string") {
        try {
          const parsed = JSON.parse(data);
          return JSON.stringify(parsed, null, 2);
        } catch {
          if (data.includes("<html") || data.includes("<!DOCTYPE")) {
            return data;
          }
          return data;
        }
      }
      return JSON.stringify(data, null, 2);
    } catch (e) {
      return String(data);
    }
  };

  const getStatusColor = (status) => {
    if (status >= 200 && status < 300) return "status-success";
    if (status >= 300 && status < 400) return "status-redirect";
    if (status >= 400 && status < 500) return "status-error";
    if (status >= 500) return "status-server-error";
    return "status-info";
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const formatTime = (ms) => {
    if (ms < 1000) return `${ms} ms`;
    return `${(ms / 1000).toFixed(2)} s`;
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const handleCopy = () => {
    if (response && response.data) {
      const content = typeof response.data === "string" 
        ? response.data 
        : JSON.stringify(response.data, null, 2);
      
      navigator.clipboard.writeText(content).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const handleHistoryClick = (entry) => {
    if (onHistorySelect) {
      onHistorySelect(entry);
    }
    setShowHistory(false);
  };

  if (loading) {
    return (
      <div className="response-panel glass">
        <div className="panel-header">
          <h2>Response</h2>
        </div>
        <div className="loading-state">
          <div className="spinner-large"></div>
          <p>Sending request...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="response-panel glass">
        <div className="panel-header">
          <h2>Response</h2>
          <button 
            className="btn-history-toggle"
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? "Hide History" : "Show History"}
          </button>
        </div>
        {showHistory && history.length > 0 && (
          <div className="history-section">
            <h4>Recent Requests</h4>
            <div className="history-list">
              {history.map((entry) => (
                <div 
                  key={entry.id} 
                  className="history-item"
                  onClick={() => handleHistoryClick(entry)}
                >
                  <span className={`history-method ${entry.request.method.toLowerCase()}`}>
                    {entry.request.method}
                  </span>
                  <span className="history-url">{entry.request.url}</span>
                  <span className="history-time">{formatDate(entry.timestamp)}</span>
                  <span className={`history-status ${getStatusColor(entry.response.status)}`}>
                    {entry.response.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="error-state">
          <div className="error-icon">⚠️</div>
          <h3>Request Failed</h3>
          <p className="error-message">{error}</p>
        </div>
      </div>
    );
  }

  if (!response) {
    return (
      <div className="response-panel glass">
        <div className="panel-header">
          <h2>Response</h2>
          {history.length > 0 && (
            <button 
              className="btn-history-toggle"
              onClick={() => setShowHistory(!showHistory)}
            >
              {showHistory ? "Hide History" : "Show History"} ({history.length})
            </button>
          )}
        </div>
        
        {showHistory && history.length > 0 ? (
          <div className="history-section">
            <h4>Recent Requests</h4>
            <div className="history-list">
              {history.map((entry) => (
                <div 
                  key={entry.id} 
                  className="history-item"
                  onClick={() => handleHistoryClick(entry)}
                >
                  <span className={`history-method ${entry.request.method.toLowerCase()}`}>
                    {entry.request.method}
                  </span>
                  <span className="history-url">{entry.request.url}</span>
                  <span className="history-time">{formatDate(entry.timestamp)}</span>
                  <span className={`history-status ${getStatusColor(entry.response.status)}`}>
                    {entry.response.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🚀</div>
            <h3>Ready to Test</h3>
            <p>Enter a URL and click Send to see the response here</p>
            {history.length === 0 && (
              <p className="empty-sub">Your request history will appear here</p>
            )}
          </div>
        )}
      </div>
    );
  }

  const isError = !response.success;
  const status = response.status || 500;
  const statusText = response.statusText || (isError ? "Error" : "OK");

  return (
    <div className="response-panel glass">
      <div className="panel-header">
        <h2>Response</h2>
        <div className="panel-actions">
          {response.data && (
            <button className="btn-copy" onClick={handleCopy}>
              {copied ? "✓ Copied!" : "Copy"}
            </button>
          )}
          {history.length > 0 && (
            <button 
              className="btn-history-toggle"
              onClick={() => setShowHistory(!showHistory)}
            >
              {showHistory ? "Hide History" : "History"} ({history.length})
            </button>
          )}
        </div>
      </div>

      {showHistory && history.length > 0 && (
        <div className="history-section">
          <h4>Recent Requests</h4>
          <div className="history-list">
            {history.map((entry) => (
              <div 
                key={entry.id} 
                className="history-item"
                onClick={() => handleHistoryClick(entry)}
              >
                <span className={`history-method ${entry.request.method.toLowerCase()}`}>
                  {entry.request.method}
                </span>
                <span className="history-url">{entry.request.url}</span>
                <span className="history-time">{formatDate(entry.timestamp)}</span>
                <span className={`history-status ${getStatusColor(entry.response.status)}`}>
                  {entry.response.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {response.data && (
        <div className="response-meta">
          <div className="meta-item">
            <span className="meta-label">Status:</span>
            <span className={`status-badge ${getStatusColor(status)}`}>
              {status} {statusText}
            </span>
          </div>
          {response.responseTime && (
            <div className="meta-item">
              <span className="meta-label">Time:</span>
              <span className="meta-value">{formatTime(response.responseTime)}</span>
            </div>
          )}
          {response.responseSize && (
            <div className="meta-item">
              <span className="meta-label">Size:</span>
              <span className="meta-value">{formatSize(response.responseSize)}</span>
            </div>
          )}
        </div>
      )}

      {isError && response.error && (
        <div className="error-state">
          <div className="error-icon">❌</div>
          <h3>Error: {status} {statusText}</h3>
          <p className="error-message">{response.error}</p>
          {response.data && (
            <div className="error-details">
              <pre>{typeof response.data === "string" ? response.data : JSON.stringify(response.data, null, 2)}</pre>
            </div>
          )}
        </div>
      )}

      {response.data && !isError && (
        <div className="response-body">
          <div className="body-header">
            <h4>Response Body</h4>
          </div>
          <pre className="body-content">
            {formatResponseBody(response.data)}
          </pre>
        </div>
      )}

      {response.headers && !isError && (
        <div className="response-headers">
          <div className="headers-header">
            <h4>Response Headers</h4>
          </div>
          <div className="headers-grid">
            {Object.entries(response.headers).map(([key, value]) => (
              <div key={key} className="header-item">
                <span className="header-key">{key}:</span>
                <span className="header-value">{Array.isArray(value) ? value.join(", ") : value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsePanel;