import React, { useState } from "react";
import "../styles/Modal.css"

const Header = ({ requestCount = 0, onClearHistory = null }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClearHistory = () => {
    if (onClearHistory) {
      onClearHistory();
    }
    setShowModal(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#ba80ff"/>
              </svg>
              <h1>API Tester</h1>
            </div>
          </div>

          <div className="header-center">
            <div className="badge-group">
              <span className="badge-item badge-status">
                Active
              </span>
              <span className="badge-item badge-version">
                v1.0.0
              </span>
              <span className="badge-item badge-requests">
                Requests: <span className="badge-count">{requestCount}</span>
              </span>
            </div>
          </div>

          <div className="header-right">
            <div className="header-actions">
              <button 
                className="btn-header btn-header-primary" 
                onClick={() => window.location.reload()}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 4v6h-6" />
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                </svg>
                Refresh
              </button>
              <button 
                className="btn-header-icon" 
                title="Clear History"
                onClick={() => setShowModal(true)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Clear History</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-icon">🗑️</div>
              <h4>Are you sure you want to clear all history?</h4>
              <p className="modal-description">
                This will permanently delete all your request history.
              </p>
              <div className="modal-security-note">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <span>We never store your API keys in history for your security</span>
              </div>
              {requestCount > 0 && (
                <p className="modal-history-count">
                  You have <strong>{requestCount}</strong> request{requestCount !== 1 ? 's' : ''} in your history.
                </p>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn-modal-cancel" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="btn-modal-confirm" onClick={handleClearHistory}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                Clear History
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;