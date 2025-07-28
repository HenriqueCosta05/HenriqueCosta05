import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'pt', 'es'] as const;

export default createMiddleware({
    // A list of all locales that are supported
    locales,

    // Used when no locale matches
    defaultLocale: 'en',

    // Always use a locale prefix
    localePrefix: 'as-needed'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(pt|es)/:path*']
};
