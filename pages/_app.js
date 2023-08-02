import "@/styles/globals.scss";
import { Lora, EB_Garamond, Inter, IBM_Plex_Sans } from "next/font/google";

const lora = Lora({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--serif"
});

const ebGaramond = EB_Garamond({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-serif"
});

const inter = Inter({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-sans"
});

const ibmPlexSans = IBM_Plex_Sans({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-heading"
});

export default function App({ Component, pageProps }) {
    return (
        <main
            className={`${ibmPlexSans.variable} ${lora.variable} ${ebGaramond.variable} ${inter.variable}`}>
            <Component {...pageProps} />
        </main>
    );
}
