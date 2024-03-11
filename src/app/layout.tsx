import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Dashboard",
  description: "View and control your finance here!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        href="https://www.dashboard.id/apple-touch-icon.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://www.dashboard.id/apple-touch-icon.png"
        sizes="32x32"
      ></link>
      <body>{children}</body>
    </html>
  );
}
