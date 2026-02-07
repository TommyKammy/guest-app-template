import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guest App Template",
  description: "Next.js + Drizzle + Neon starter for guest applications"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
