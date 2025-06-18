import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Al Quran - Read, Listen & Learn | Digital Quran App",
  description:
    "Read the Al Quran online with translation, transliteration, and audio. Explore all Surahs, verses, and tafsir. Best digital Quran app for learning and recitation.",
  keywords:
    "Al Quran, Quran, Digital Quran, Read Quran, Listen Quran, Quran App, Surah, Ayah, Islamic, Holy Book, Quran Online, Learn Quran, Quran Translation, Quran Tafsir, Quran Recitation, القرآن الكريم, المصحف الشريف",
  openGraph: {
    title: "Al Quran - Read, Listen & Learn | Digital Quran App",
    description:
      "Read the Al Quran online with translation, transliteration, and audio. Explore all Surahs, verses, and tafsir. Best digital Quran app for learning and recitation.",
    url: "https://yourdomain.com/",
    type: "website",
    images: [
      {
        url: "/logoicon.png",
        width: 1200,
        height: 630,
        alt: "Al Quran App Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Quran - Read, Listen & Learn | Digital Quran App",
    description:
      "Read the Al Quran online with translation, transliteration, and audio. Explore all Surahs, verses, and tafsir. Best digital Quran app for learning and recitation.",
    images: ["/logoicon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="keywords"
          content="Al Quran, Quran, Digital Quran, Read Quran, Listen Quran, Quran App, Surah, Ayah, Islamic, Holy Book, Quran Online, Learn Quran, Quran Translation, Quran Tafsir, Quran Recitation, القرآن الكريم, المصحف الشريف"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Al Quran - Read, Listen & Learn | Digital Quran App"
        />
        <meta
          property="og:description"
          content="Read the Al Quran online with translation, transliteration, and audio. Explore all Surahs, verses, and tafsir. Best digital Quran app for learning and recitation."
        />
        <meta property="og:image" content="/logoicon.png" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Al Quran - Read, Listen & Learn | Digital Quran App"
        />
        <meta
          name="twitter:description"
          content="Read the Al Quran online with translation, transliteration, and audio. Explore all Surahs, verses, and tafsir. Best digital Quran app for learning and recitation."
        />
        <meta name="twitter:image" content="/logoicon.png" />
        <link rel="canonical" href="https://yourdomain.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Al Quran",
              url: "https://yourdomain.com/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://yourdomain.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
