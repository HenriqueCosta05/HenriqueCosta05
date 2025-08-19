"use server"

const COOKIE_NAME = 'NEXT_LOCALE';
import { cookies } from 'next/headers';
import { Locale } from 'next-intl';

export async function getUserLocale() {
    const defaultLocale = 'pt-BR';
    return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
    (await cookies()).set(COOKIE_NAME, locale);
}