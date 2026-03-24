import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Pincher Coffeeshop | Your Daily Brew of Joy',
  description: 'Experience the rich aroma and vibrant community at Pincher. We\'re dedicated to crafting the perfect cup and creating a space where moments are savored.',
  keywords: ["coffeeshop, coffee, cafe, Pincher, espresso, latte, cold brew, pastries, community, local, coffeeville"],
  openGraph: {
    "title": "Pincher Coffeeshop | Your Daily Brew of Joy",
    "description": "Experience the rich aroma and vibrant community at Pincher. We're dedicated to crafting the perfect cup and creating a space where moments are savored.",
    "url": "https://www.pinchercoffee.com",
    "siteName": "Pincher Coffeeshop",
    "images": [
      {
        "url": "https://pixabay.com/get/gd3cb58e1ccddd5f660f58e17ee4e7a93f5e931991f842ac89bb47352ae1d1d2b4ad5a7c72d57e976a9a3c43c9be3309daa81f86d5e606e292fe80cbfb2ebdc97_1280.jpg",
        "alt": "Cozy Pincher Coffeeshop Interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Pincher Coffeeshop | Your Daily Brew of Joy",
    "description": "Experience the rich aroma and vibrant community at Pincher. We're dedicated to crafting the perfect cup and creating a space where moments are savored.",
    "images": [
      "https://pixabay.com/get/gd3cb58e1ccddd5f660f58e17ee4e7a93f5e931991f842ac89bb47352ae1d1d2b4ad5a7c72d57e976a9a3c43c9be3309daa81f86d5e606e292fe80cbfb2ebdc97_1280.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunitoSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
