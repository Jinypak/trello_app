import './globals.css'
import type { Metadata } from 'next'
import React from "react";


export const metadata: Metadata = {
  title: 'Trello AI APP',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
