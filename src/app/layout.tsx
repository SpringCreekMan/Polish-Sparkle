import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polish Sparkle | Professional Cleaning Services in Chicagoland Suburbs",
  description:
    "Premium indoor and outdoor cleaning services serving Woodridge, Naperville, Orland Park, Bolingbrook, Hinsdale, and surrounding Chicago suburbs. Residential & commercial cleaning. Get a free quote today!",
  keywords:
    "cleaning services, house cleaning, commercial cleaning, pressure washing, window cleaning, Naperville, Woodridge, Orland Park, Bolingbrook, Hinsdale, Chicagoland",
  openGraph: {
    title: "Polish Sparkle | Professional Cleaning Services",
    description:
      "Premium indoor and outdoor cleaning services serving Chicagoland suburbs.",
    type: "website",
    url: "https://www.polishsparkle.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
        {/* Polish Sparkle Chat Widget */}
        <Script id="ps-chat-widget" strategy="afterInteractive">{`
(function() {
  var WEBHOOK_URL = 'https://polishspark.app.n8n.cloud/webhook/polish-sparkle-chat';

  var style = document.createElement('style');
  style.textContent = \`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Playfair+Display:wght@700&display=swap');
    #ps-chat-trigger{position:fixed;bottom:24px;right:24px;width:62px;height:62px;border-radius:50%;background:linear-gradient(135deg,#2B7DE0,#4A9AF5);color:#fff;border:none;cursor:pointer;font-size:27px;box-shadow:0 4px 20px rgba(43,125,224,0.35);z-index:99999;transition:all 0.3s;display:flex;align-items:center;justify-content:center}
    #ps-chat-trigger:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(43,125,224,0.45)}
    #ps-chat-trigger.open span:first-child{display:none}#ps-chat-trigger.open span:last-child{display:block}
    #ps-chat-trigger span:last-child{display:none;font-size:22px}
    #ps-chat-badge{position:absolute;top:-4px;right:-4px;width:20px;height:20px;background:#D4A853;border-radius:50%;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;color:#fff;border:2px solid #fff;animation:ps-pop .4s cubic-bezier(.16,1,.3,1)}
    @keyframes ps-pop{from{transform:scale(0)}to{transform:scale(1)}}
    #ps-chat-frame{position:fixed;bottom:96px;right:24px;width:390px;height:580px;max-height:75vh;z-index:99998;border:none;border-radius:16px;box-shadow:0 12px 48px rgba(0,0,0,0.15);display:none;background:#fff}
    #ps-chat-frame.open{display:block;animation:ps-open .35s cubic-bezier(.16,1,.3,1)}
    @keyframes ps-open{from{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
    @media(max-width:480px){#ps-chat-frame{bottom:0;right:0;width:100%;height:100%;max-height:100%;border-radius:0}#ps-chat-trigger{bottom:16px;right:16px}}
  \`;
  document.head.appendChild(style);

  var trigger = document.createElement('button');
  trigger.id = 'ps-chat-trigger';
  trigger.setAttribute('aria-label', 'Chat with Polish Sparkle');
  trigger.innerHTML = '<span>\\uD83D\\uDCAC</span><span>\\u2715</span>';
  var badge = document.createElement('div');
  badge.id = 'ps-chat-badge';
  badge.textContent = '1';
  trigger.appendChild(badge);
  document.body.appendChild(trigger);

  var iframe = document.createElement('iframe');
  iframe.id = 'ps-chat-frame';
  iframe.setAttribute('title', 'Polish Sparkle Chat');
  iframe.src = '/chat.html';
  document.body.appendChild(iframe);

  var isOpen = false;
  trigger.addEventListener('click', function() {
    isOpen = !isOpen;
    iframe.classList.toggle('open', isOpen);
    trigger.classList.toggle('open', isOpen);
    if (isOpen) {
      badge.style.display = 'none';
      if (window.innerWidth <= 480) {
        trigger.style.display = 'none';
      }
    } else {
      if (window.innerWidth <= 480) {
        trigger.style.display = 'flex';
      }
    }
  });
  window.addEventListener('message', function(e) {
    if (e.data === 'close-ps-chat') {
      isOpen = false;
      iframe.classList.remove('open');
      trigger.classList.remove('open');
      trigger.style.display = 'flex';
    }
  });
  setTimeout(function() { if (!isOpen) badge.style.display = 'none'; }, 8000);
})();
        `}</Script>
      </body>
    </html>
  );
}
