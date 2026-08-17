import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** Reads the locale out of a URL: /es/... -> 'es', anything else -> 'en'. */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

/** Returns a translate function bound to a locale. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Builds a locale-aware path: ('es', '/work/verum') -> '/es/work/verum' */
export function localizePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean === '/' ? '/' : clean;
  return clean === '/' ? '/es/' : `/es${clean}`;
}

/** Given the current URL, returns the equivalent path in the other locale. */
export function alternatePath(url: URL, target: Lang): string {
  const stripped = url.pathname.replace(/^\/es(?=\/|$)/, '') || '/';
  return localizePath(target, stripped);
}
