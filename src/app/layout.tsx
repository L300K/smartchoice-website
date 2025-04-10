import type {Metadata} from "next";
import {IBM_Plex_Sans_Thai} from 'next/font/google';
import "./globals.css";


const ibmPlexSansThai = IBM_Plex_Sans_Thai({
    subsets: ['latin', 'thai'],
    weight: ['200', '400', '500', '700'],
    variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="th">
        <body
            className={`${ibmPlexSansThai.variable} ${ibmPlexSansThai.className} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
