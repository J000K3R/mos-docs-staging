import React from 'react';

export default function Terminal({ title = 'root@MOS:~', children }) {
  return (
    <div style={{
      borderRadius: '10px',
      overflow: 'hidden',
      border: '1px solid #444',
      marginBottom: '1.5rem',
      fontFamily: 'monospace',
    }}>
      {/* Titelleiste mit macOS-Buttons */}
      <div style={{
        background: '#3a3a3a',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
      }}>
        <span style={{ width: 13, height: 13, borderRadius: '50%', background: '#ff5f57', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ width: 13, height: 13, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ width: 13, height: 13, borderRadius: '50%', background: '#28ca41', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ marginLeft: 10, color: '#bbb', fontSize: 13 }}>{title}</span>
      </div>

      {/* Terminal-Inhalt */}
      <pre style={{
        margin: 0,
        padding: '16px',
        background: '#1a1a1a',
        color: '#f8f8f2',
        fontSize: '13.5px',
        lineHeight: 1.8,
        overflowX: 'auto',
        whiteSpace: 'pre',
      }}>
        {children}
      </pre>
    </div>
  );
}

// Hilfkomponente für grüne Hervorhebungen (z.B. Statusmeldungen)
export function TerminalSuccess({ children }) {
  return <span style={{ color: '#28ca41' }}>{children}</span>;
}

// Hilfskomponente für rote Fehler
export function TerminalError({ children }) {
  return <span style={{ color: '#ff5f57' }}>{children}</span>;
}

// Hilfskomponente für gedimmten Text (z.B. Kommentare)
export function TerminalMuted({ children }) {
  return <span style={{ color: '#888' }}>{children}</span>;
}