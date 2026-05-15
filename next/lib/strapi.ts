export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://192.168.30.58:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

type FetchOptions = {
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
  timeoutMs?: number;
};

export async function fetchStrapi<T>(path: string, options: FetchOptions = {}): Promise<T | null> {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs ?? 1200);
  const headers: HeadersInit = {
    "Content-Type": "application/json"
  };

  if (STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
  }

  try {
    const response = await fetch(`${STRAPI_URL}/api${normalizedPath}`, {
      headers,
      cache: options.cache ?? "no-store",
      next: options.next,
      signal: controller.signal
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchFirstStrapi<T>(
  paths: string[],
  options: FetchOptions = {}
): Promise<T | null> {
  for (const path of paths) {
    const data = await fetchStrapi<T>(path, options);

    if (data) {
      return data;
    }
  }

  return null;
}

export function getStrapiMediaUrl(url?: string | null) {
  if (!url) {
    return undefined;
  }

  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `${STRAPI_URL}${url.startsWith("/") ? url : `/${url}`}`;
}
