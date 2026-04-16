import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claudiane - Engenharia de Computação & Gestão de Tráfego",
  description: "Portfólio de Claudiane: Especialista em Meta Ads, Google Ads, Python, Automação e Desenvolvimento Web. Transformando dados em resultados.",
  openGraph: {
    title: "Claudiane - Engenharia de Computação & Gestão de Tráfego",
    description: "Portfólio de Claudiane: Especialista em Meta Ads, Google Ads, Python, Automação e Desenvolvimento Web.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudiane - Engenharia de Computação & Gestão de Tráfego",
    description: "Portfólio de Claudiane: Especialista em Meta Ads, Google Ads, Python, Automação e Desenvolvimento Web.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
