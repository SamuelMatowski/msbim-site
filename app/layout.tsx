import "./globals.css";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "MS BIM Engenharia | Projetos Hidrossanitários e BIM",
  description:
    "Especialistas em projetos de instalações prediais, hidrossanitários e BIM integrados.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
     <head>
  <link rel="icon" href="/favicon.ico?v=2" type="image/png" />
  <link rel="apple-touch-icon" href="/favicon.ico?v=2" />
  <meta name="theme-color" content="#004C88" />
</head>

      <body className={poppins.className}>{children}</body>
    </html>
  );
}
