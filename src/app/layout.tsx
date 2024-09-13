import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { seoKeywords } from "./seoKeywords";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_LIVE_URL as string),
  keywords: seoKeywords,
  title: {
    default: "Home | <Henrique Costa />",
    template: "%s | <ReactMode />",
  },
  description:
    "Seja bem-vindo ao meu portfólio profissional! Este projeto mostra minha jornada, habilidades e projetos como desenvolvedor fullstack. Ele serve como um repositório central para todo o meu trabalho, experiências e conquistas em desenvolvimento web.",
  openGraph: {
    description:
      "Seja bem-vindo ao meu portfólio profissional! Este projeto mostra minha jornada, habilidades e projetos como desenvolvedor fullstack. Ele serve como um repositório central para todo o meu trabalho, experiências e conquistas em desenvolvimento web.",
    images: [
      new URL("/opengraphImg.png", process.env.NEXT_PUBLIC_LIVE_URL as string)
        .href,
    ], // image to be shown of website when linked to different sources
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="32" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
