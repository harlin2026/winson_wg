"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SiteHeaderData, SupportedLocale } from "@/lib/global";
import { Logo } from "./Logo";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href.split("/details")[0]);
}

type HeaderProps = SiteHeaderData & {
  locale: SupportedLocale;
};

const languages: { locale: SupportedLocale; label: string }[] = [
  { locale: "en", label: "EN" },
  { locale: "zh-Hant", label: "TC" },
  { locale: "zh-Hans", label: "SC" }
];

export function Header({ brandName, brandSubtitle, logoUrl, navItems, locale }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="siteHeader">
      <Logo brandName={brandName} brandSubtitle={brandSubtitle} logoUrl={logoUrl} />
      <nav className="mainNav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link className={isActive(pathname, item.href) ? "active" : ""} href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="language" aria-label="Language switcher">
        <span className="globe" aria-hidden="true" />
        {languages.map((item) => (
          <Link
            className={item.locale === locale ? "active" : ""}
            href={item.locale === "en" ? pathname : `${pathname}?locale=${item.locale}`}
            key={item.locale}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
