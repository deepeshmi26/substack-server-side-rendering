import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next.js Routing — Chapter 3",
  description: "Learn Next.js App Router with layouts and streaming",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="p-6 font-sans">
        <header className="flex gap-4 mb-6 border-b pb-3">
          <Link href="/">🏠 Home</Link>
          <Link href="/about">ℹ️ About</Link>
          <Link href="/products">🛍 Products</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
