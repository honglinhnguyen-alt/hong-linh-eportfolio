import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hong Linh Nguyen | Mechatronics Engineering Portfolio",
  description:
    "Professional ePortfolio of Hong Linh Nguyen, a final-year Mechatronics Engineering student at UTS specialising in embedded systems, robotics, automation and rapid prototyping.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
