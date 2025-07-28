import { NextIntlClientProvider } from 'next-intl';
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { getUserLocale } from '@/services';

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function Layout({
    children,
}: Props) {

  const locale = await getUserLocale() || 'en-US';
    return (
        <html lang={locale}>
            <body className={`${plusJakartaSans.variable}`}>
                <NextIntlClientProvider>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
