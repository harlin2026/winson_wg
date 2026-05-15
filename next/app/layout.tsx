import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getGlobalData, normalizeLocale } from "@/lib/global";
import "./globals.css";

export const metadata: Metadata = {
  title: "Winson Group Macau",
  description: "Official website for Winson Group Macau."
};

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const requestHeaders = await headers();
  const locale = normalizeLocale(requestHeaders.get("x-site-locale"));
  const globalData = await getGlobalData(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body id="top">
        <Header {...globalData.header} locale={globalData.locale} />
        {children}
        <Footer {...globalData.footer} {...globalData.header} />
      </body>
    </html>
  );
}
