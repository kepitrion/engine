import type { Metadata } from "next";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../public/fonts/pretendard.woff2",
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
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
