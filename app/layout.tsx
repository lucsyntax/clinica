pq import type { Metadata } from "next";
import { Figtree, Noto_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VIVANT Odontologia | Clínica Dentária Premium",
  description: "Clínica dentária de alto padrão. Scanner 3D, lentes de contato dental e implantes. Agende sua avaliação.",
  keywords: ["dentista", "clínica dentária", "lentes de contato dental", "implante dentário", "vivant odontologia"],
  openGraph: {
    title: "VIVANT Odontologia",
    description: "Sorrisos saudáveis com tecnologia e cuidado. Agende sua avaliação",
    type: "website",
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
    <html lang="pt-BR" className={clsx(figtree.variable, notoSans.variable)}>
      <body className="font-sans antialiased selection:bg-primary/20 selection:text-neutral-900">
        {children}
      </body>
    </html>
  );
}
