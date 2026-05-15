import { contact, footerGroups, navItems, type FooterGroup, type NavItem } from "@/data/site";
import { fetchFirstStrapi, getStrapiMediaUrl } from "./strapi";

export type SupportedLocale = "en" | "zh-Hans" | "zh-Hant";

export type SiteHeaderData = {
  brandName: string;
  brandSubtitle: string;
  logoUrl?: string;
  navItems: NavItem[];
};

export type SiteFooterData = {
  groups: FooterGroup[];
  contact: typeof contact;
  legalLinks: NavItem[];
  copyright: string;
  socialLinks: NavItem[];
};

export type SiteGlobalData = {
  locale: SupportedLocale;
  header: SiteHeaderData;
  footer: SiteFooterData;
};

const fallbackHeader: SiteHeaderData = {
  brandName: "Winson Group",
  brandSubtitle: "WINSON GROUP",
  navItems
};

const fallbackFooter: SiteFooterData = {
  groups: footerGroups,
  contact,
  legalLinks: [
    { label: "Copyright", href: "/" },
    { label: "Disclaimer", href: "/" },
    { label: "Sitemap", href: "/" },
    { label: "Privacy Policy", href: "/" },
    { label: "Website Support", href: "/" }
  ],
  copyright: "Copyright (c) 2026 WINSON GROUP",
  socialLinks: [
    { label: "We", href: "/" },
    { label: "f", href: "/" },
    { label: "ig", href: "/" },
    { label: "in", href: "/" },
    { label: "x", href: "/" }
  ]
};

type UnknownRecord = Record<string, unknown>;

function isRecord(value: unknown): value is UnknownRecord {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function unwrap(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(unwrap);
  }

  if (!isRecord(value)) {
    return value;
  }

  if ("data" in value && Object.keys(value).length <= 2) {
    return unwrap(value.data);
  }

  if ("attributes" in value && isRecord(value.attributes)) {
    const attributes = unwrap(value.attributes);

    return isRecord(attributes) ? { ...value, ...attributes } : value;
  }

  return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, unwrap(entry)]));
}

function rootData(payload: unknown) {
  const unwrapped = unwrap(payload);

  if (isRecord(unwrapped) && "data" in unwrapped) {
    return unwrap(unwrapped.data);
  }

  return unwrapped;
}

function firstRecord(...values: unknown[]) {
  return values.find(isRecord) as UnknownRecord | undefined;
}

function firstArray(...values: unknown[]) {
  return values.find(Array.isArray) as unknown[] | undefined;
}

function pickString(source: unknown, keys: string[]) {
  if (!isRecord(source)) {
    return undefined;
  }

  for (const key of keys) {
    const value = source[key];

    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return undefined;
}

function pickMediaUrl(source: unknown) {
  if (typeof source === "string") {
    return getStrapiMediaUrl(source);
  }

  if (!isRecord(source)) {
    return undefined;
  }

  const candidate = pickString(source, ["url", "src"]);

  if (candidate) {
    return getStrapiMediaUrl(candidate);
  }

  return pickMediaUrl(source.image ?? source.logo ?? source.media);
}

function normalizeLinks(items: unknown[] | undefined, fallback: NavItem[]) {
  if (!items?.length) {
    return fallback;
  }

  const links = items
    .map((item) => {
      const label = pickString(item, ["label", "title", "text", "name"]);
      const href = pickString(item, ["href", "url", "link", "path", "slug"]);

      if (!label || !href) {
        return null;
      }

      return {
        label,
        href: href.startsWith("/") || href.startsWith("http") || href.startsWith("#") ? href : `/${href}`
      };
    })
    .filter(Boolean) as NavItem[];

  return links.length ? links : fallback;
}

function normalizeHeader(global: unknown): SiteHeaderData {
  const source = isRecord(global) ? global : {};
  const header = firstRecord(source.header, source.Header) ?? source;
  const linkItems = firstArray(
    header.navItems,
    header.navigationItems,
    header.links,
    header.menu,
    header.menus,
    header.items,
    header.nav
  );

  return {
    brandName: pickString(header, ["brandName", "siteName", "title", "name"]) ?? fallbackHeader.brandName,
    brandSubtitle: pickString(header, ["brandSubtitle", "subtitle", "tagline"]) ?? fallbackHeader.brandSubtitle,
    logoUrl: pickMediaUrl(header.logo ?? header.brandLogo),
    navItems: normalizeLinks(linkItems, fallbackHeader.navItems)
  };
}

function normalizeFooterGroups(items: unknown[] | undefined) {
  if (!items?.length) {
    return fallbackFooter.groups;
  }

  const groups = items
    .map((item) => {
      const title = pickString(item, ["title", "label", "name"]);
      const links = normalizeLinks(
        firstArray(
          isRecord(item) ? item.links : undefined,
          isRecord(item) ? item.items : undefined,
          isRecord(item) ? item.children : undefined
        ),
        []
      );

      if (!title || !links.length) {
        return null;
      }

      return { title, links };
    })
    .filter(Boolean) as FooterGroup[];

  return groups.length ? groups : fallbackFooter.groups;
}

function normalizeFooter(global: unknown): SiteFooterData {
  const source = isRecord(global) ? global : {};
  const footer = firstRecord(source.footer, source.Footer) ?? source;
  const contactSource = firstRecord(footer.contact, footer.contactUs, footer.address) ?? footer;
  const legalItems = firstArray(footer.legalLinks, footer.legal, footer.bottomLinks, footer.policyLinks);
  const socialItems = firstArray(footer.socialLinks, footer.socials, footer.socialMedia);

  return {
    groups: normalizeFooterGroups(
      firstArray(footer.groups, footer.columns, footer.sections, footer.linkGroups, footer.footerLinks)
    ),
    contact: {
      email: pickString(contactSource, ["email", "mail"]) ?? fallbackFooter.contact.email,
      phone: pickString(contactSource, ["phone", "tel", "telephone"]) ?? fallbackFooter.contact.phone,
      address: pickString(contactSource, ["address", "location"]) ?? fallbackFooter.contact.address
    },
    legalLinks: normalizeLinks(legalItems, fallbackFooter.legalLinks),
    copyright: pickString(footer, ["copyright", "copyrightText"]) ?? fallbackFooter.copyright,
    socialLinks: normalizeLinks(socialItems, fallbackFooter.socialLinks)
  };
}

export function normalizeLocale(value?: string | null): SupportedLocale {
  if (value === "zh-Hans" || value === "zh-Hant") {
    return value;
  }

  return "en";
}

function localeQuery(locale: SupportedLocale) {
  return locale === "en" ? "" : `?locale=${locale}`;
}

export async function getGlobalData(locale: SupportedLocale = "en"): Promise<SiteGlobalData> {
  const query = localeQuery(locale);
  const [globalPage, headerPayload, footerPayload] = await Promise.all([
    fetchFirstStrapi<unknown>([`/global${query}`], { next: { revalidate: 60 } }),
    fetchFirstStrapi<unknown>([`/global${query}${query ? "&" : "?"}populate[header][populate]=*`], {
      next: { revalidate: 60 }
    }),
    fetchFirstStrapi<unknown>([`/global${query}${query ? "&" : "?"}populate[footer][populate]=*`], {
      next: { revalidate: 60 }
    })
  ]);

  const globalRoot = rootData(globalPage);
  const headerRoot = rootData(headerPayload) ?? globalRoot;
  const footerRoot = rootData(footerPayload) ?? globalRoot;

  return {
    locale,
    header: normalizeHeader(headerRoot),
    footer: normalizeFooter(footerRoot)
  };
}
