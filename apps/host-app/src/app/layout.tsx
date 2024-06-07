import { Analytics } from "@vercel/analytics/react";
import { VercelToolbar } from "@vercel/toolbar/next";
import { Header } from "@repo/ui/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="p-2">
        <div className="flex flex-col gap-4">
          <Header name="Host Application" />
          {children}
          <Analytics />
          <VercelToolbar />
        </div>
      </body>
    </html>
  );
}
