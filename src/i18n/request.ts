import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from '@/services';

export default getRequestConfig(async () => {
    const locale = await getUserLocale() || 'en-US';

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});