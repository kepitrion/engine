import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./parts/header";
import Footer from "./parts/footer";

const pretendard = localFont({
  src: "../public/fonts/pretendard.woff2",
  fallback: ["Ubuntu", "Segoe UI", "sans-serif"]
})

export const metadata: Metadata = {
  title: "Default title",
  description: "Default description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <Header />
        <div id="root">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
