import { getUserLocale, setUserLocale } from "@/services";
import { Locale } from "next-intl";
import { useEffect, useState } from "react";

const useLanguageSwitch = () => {

    const [locale, setLocale] = useState<Locale>('en-US');
    
    useEffect(() => {
        const fetchLocale = async () => {
            const userLocale = await getLocale();
            setLocale(userLocale);
        };

        fetchLocale();
    }, []);

    const getLocale = async () => {
        const locale = await getUserLocale();
        return locale || 'en-US';
    };

    const switchLanguage = async (newLocale: Locale) => {
        await setUserLocale(newLocale);
        setLocale(newLocale);
    };

    return {  switchLanguage, locale };
};
export default useLanguageSwitch;