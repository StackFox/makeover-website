import { useEffect, useRef, useState } from 'react';

const SHAPO_SCRIPT_SRC = 'https://cdn.shapo.io/js/embed.js';
const LOAD_TIMEOUT_MS = 8000;

export default function ShapoWidget({ widgetId, className = '', onStatus }) {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!widgetId) return;
    let timeout;
    let checkInterval;

    const updateStatus = (s) => {
      setStatus(s);
      onStatus?.(s);
    };

    const loadShapo = async () => {
      updateStatus('loading');

      if (!window.Shapo) {
        try {
          await new Promise((resolve, reject) => {
            const existing = document.getElementById('shapo-embed-js');
            if (existing) { resolve(); return; }
            const script = document.createElement('script');
            script.id = 'shapo-embed-js';
            script.src = SHAPO_SCRIPT_SRC;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        } catch {
          updateStatus('error');
          return;
        }
      }

      timeout = setTimeout(() => {
        clearInterval(checkInterval);
        updateStatus('error');
      }, LOAD_TIMEOUT_MS);

      requestAnimationFrame(() => {
        if (window.Shapo?.scan) {
          window.Shapo.scan();
        }

        checkInterval = setInterval(() => {
          const iframe = containerRef.current?.querySelector('iframe[id^="shapo-"]');
          if (iframe) {
            clearInterval(checkInterval);
            clearTimeout(timeout);
            updateStatus('loaded');
          }
        }, 300);
      });
    };

    loadShapo();
    return () => {
      clearTimeout(timeout);
      clearInterval(checkInterval);
    };
  }, [widgetId, onStatus]);

  return (
    <div className={className} ref={containerRef}>
      <div id={`shapo-widget-${widgetId}`} />
    </div>
  );
}
