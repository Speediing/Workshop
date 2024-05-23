import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { VercelToolbar } from "@vercel/toolbar/next";
import { Header } from "@repo/ui/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Child Application - Root Layout",
  description: "Root layout of the child application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className="p-2">
        <div className="flex flex-col gap-2">
          <Header name="Child Application" />
          {children}
          <Analytics />
          <VercelToolbar />
        </div>
      </body>
    </html>
  );
}
