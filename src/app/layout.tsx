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
