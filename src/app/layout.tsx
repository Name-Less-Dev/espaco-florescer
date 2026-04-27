import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Espaço Florescer | Neurodesenvolvimento",
    template: "%s | Espaço Florescer",
  },
  description:
    "Psicologia, aprendizagem e desenvolvimento infantil com acolhimento especializado para crianças, adolescentes e famílias.",
  keywords: [
    "psicologia infantil",
    "neurodesenvolvimento",
    "aprendizagem",
    "psicopedagogia",
    "Guarujá",
    "Espaço Florescer",
  ],
  authors: [{ name: "Espaço Florescer" }],
  creator: "Espaço Florescer",
  metadataBase: new URL("https://www.espacoflorescer.com.br"),
  openGraph: {
    title: "Espaço Florescer | Neurodesenvolvimento",
    description:
      "Cuidado, desenvolvimento e acolhimento especializado para crianças, adolescentes e famílias.",
    url: "https://www.espacoflorescer.com.br",
    siteName: "Espaço Florescer",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}