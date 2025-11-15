import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Мебельный Дом Колобовых",
  description: "Чат с компание МДК",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          strategy="beforeInteractive"
        />
        <Script id="chatkit-override" strategy="afterInteractive">
          {`
            window.addEventListener('load', () => {
              const style = document.createElement('style');
              style.textContent = \`
                openai-chatkit::part(composer-input) {
                  background: #f5f5f5 !important;
                  color: #2d7000 !important;
                }
                openai-chatkit::part(message-user) {
                  background: #44aa00 !important;
                }
                openai-chatkit::part(button-primary) {
                  background: #44aa00 !important;
                }
              \`;
              document.head.appendChild(style);
            });
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
