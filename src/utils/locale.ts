export const getLocaleKey = (locale: string) => {
    switch (locale) {
        case "en-US":
            return "en";
        case "pt-BR":
            return "pt";
        case "es-ES":
            return "es";
        default:
            return "pt";
    }
}