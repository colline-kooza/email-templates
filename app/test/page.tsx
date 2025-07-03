'use client';

import BlackFridayEmail from '@/components/emails/BlackFridayEmail';

import React, { useRef, useEffect } from 'react';
import * as ReactDOMServer from 'react-dom/server';


export default function EmailPreviewPage() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;

    const iframeDocument = iframe.contentWindow.document;
    if (!iframeDocument) return;

    // ✅ Render component to static HTML
    const htmlContent = ReactDOMServer.renderToStaticMarkup(<BlackFridayEmail />);

    // ✅ Write HTML with dynamic resize script
    iframeDocument.open();
    iframeDocument.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Email Preview</title>
          <style>
            body {
              margin: 0;
              padding: 0;
            }
          </style>
        </head>
        <body>
          <div id="email-content">
            ${htmlContent}
          </div>
          <script>
            // Adjust iframe height to fit content
            window.onload = function () {
              const height = document.documentElement.scrollHeight || document.body.scrollHeight;
              parent.document.querySelector('iframe[title="Email Template Preview"]').style.height = height + 'px';
            };
          </script>
        </body>
      </html>
    `);
    iframeDocument.close();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="border border-gray-300 rounded  bg-gray-300">
        <iframe
          ref={iframeRef}
          title="Email Template Preview"
          className="w-full"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </div>
  );
}
