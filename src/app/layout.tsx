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
        href="https://ciaraa.com/assets/logociara-col.svg"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link
        rel="icon"
        type="image/svg"
        href="https://ciaraa.com/assets/logociara-col.svg"
        sizes="32x32"
      ></link>
      <body>{children}</body>
    </html>
  );
}
