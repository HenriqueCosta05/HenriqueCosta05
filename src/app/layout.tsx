import { generatePersonSchema, generateSEO, generateWebsiteSchema } from '@/lib/seo';
import { getUserLocale } from '@/services';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getUserLocale() || 'en-US';

    const descriptions = {
        'en-US': 'Front-End Developer specializing in React.js, Next.js, TypeScript, and modern web development. Building scalable, performant, and user-centered applications.',
        'pt-BR': 'Desenvolvedor Front-End especializado em React.js, Next.js, TypeScript e desenvolvimento web moderno. Construindo aplicações escaláveis, performáticas e centradas no usuário.',
        'es-ES': 'Desarrollador Front-End especializado en React.js, Next.js, TypeScript y desarrollo web moderno. Construyendo aplicaciones escalables, de alto rendimiento y centradas en el usuario.',
    };

    return generateSEO({
        title: 'Henrique Costa - Front-End Developer',
        description: descriptions[locale as keyof typeof descriptions] || descriptions['en-US'],
        keywords: [
            'Front-End Developer',
            'React.js',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Node.js',
            'Web Development',
            'UI/UX',
            'Accessibility',
            'Henrique Costa',
        ],
        locale,
        type: 'profile',
    });
}

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {

  const locale = await getUserLocale() || 'pt-BR';

  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();

    return (
        <html lang={locale}>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#1e40af" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteSchema),
                    }}
                />
            </head>
            <body className={`${plusJakartaSans.variable}`}>
                <NextIntlClientProvider>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
