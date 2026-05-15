import Link from "next/link";
import type { SiteFooterData } from "@/lib/global";
import { Logo } from "./Logo";

type FooterProps = SiteFooterData & {
  brandName?: string;
  brandSubtitle?: string;
  logoUrl?: string;
};

export function Footer({
  groups,
  contact,
  legalLinks,
  copyright,
  socialLinks,
  brandName,
  brandSubtitle,
  logoUrl
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footerTop">
        {groups.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => (
              <Link href={link.href} key={`${group.title}-${link.label}`}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <a className="backTop" href="#top" aria-label="Back to top">
          ^
        </a>
      </div>
      <div className="container footerBottom">
        <div>
          <h3>Contact Us</h3>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <p>{contact.address}</p>
        </div>
        <div className="footerBrand">
          <Logo brandName={brandName} brandSubtitle={brandSubtitle} logoUrl={logoUrl} />
          <div className="socials" aria-label="Social links">
            {socialLinks.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container legal">
        <div>
          {legalLinks.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
        <p>{copyright}</p>
      </div>
    </footer>
  );
}
