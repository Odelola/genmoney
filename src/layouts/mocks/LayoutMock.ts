import { BasePath } from "@/routes/constantRoutes";

interface HEADER_LINKS_TYPE {
    title: string;
    link: string;
}

export const HEADER_LINKS: HEADER_LINKS_TYPE[] = [
    {
        title:  "Stock & ETFs",
        link: BasePath.STOCKANDETFS
    },
    {
        title:  "Fixed Income",
        link: BasePath.FIXEDINCOME
    },
    {
        title:  "Crypto",
        link: BasePath.CRYPTO
    },
    {
        title:  "Vantage",
        link: BasePath.VANTAGE
    },
]