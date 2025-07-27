import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    const supportedLocales = ['en-US', 'es-ES', 'pt-BR'];
    const locale = navigator.language || 'en';

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});