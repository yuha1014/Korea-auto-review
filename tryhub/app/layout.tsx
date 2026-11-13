import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRYHUB — 체험단 워크스페이스",
  description: "체험단 공고 탐색부터 리뷰 일정까지 한곳에서 관리하세요.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
