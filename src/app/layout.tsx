import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.scss";
import ScrollToHash from "./components/ScrollToHash";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  applicationName: "Cognios",
  icons: {
    icon: [
      { url: "/images/favicon/favicon.ico" },
      {
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/images/favicon/apple-icon-180x180.png",
  },

  openGraph: {
    title: "Agentic Tutors for Crypto & AI Learning · Cognios",
    description:
      "Cognios turns creator expertise into agentic tutors that adapt to each learner. Buy tokens to learn, evolve with your tutor, and earn on-chain digital assets at milestones. Join the waitlist.",
    url: "https://waitlist.cognios.io/",
    siteName: "Cognios",
    type: "website",
    images: [
      {
        url: "https://waitlist.cognios.io/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cognios Agentic Tutors",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Agentic Tutors for Crypto & AI Learning · Cognios",
    description:
      "Cognios turns creator expertise into agentic tutors that adapt to each learner. Buy tokens to learn, evolve with your tutor, and earn on-chain digital assets at milestones. Join the waitlist.",
    images: ["https://waitlist.cognios.io/images/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ScrollToHash />
        <Header />
        <main>{children}</main>
        <Footer />
        <ToastContainer
          stacked
          newestOnTop={false}
          draggable
          closeButton
          toastClassName={"toast-ui-updates"}
          autoClose={3000}
        />
        <Analytics />
      </body>
    </html>
  );
}
