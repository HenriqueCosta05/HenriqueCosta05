export const portableTextToBulletPoints = (portableText: any[]): string[] => {
    if (!Array.isArray(portableText)) return [];

    return portableText
        .map((block) => {
            if (block._type === 'block' && block.children) {
                return block.children.map((child: any) => child.text).join('');
            }
            return '';
        })
        .filter(Boolean) as string[];
};

export const dateStringToLocaleDate = (dateString: string, locale: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };

    if (!dateString) return '';

    return new Date(dateString).toLocaleDateString(locale, options);
};
