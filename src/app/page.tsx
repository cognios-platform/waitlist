import React from "react";
import { Metadata } from "next";
import HomePage from "./components/home_page/Home";

export const metadata: Metadata = {
  title: "Agentic Powered Tutors · Cognios",
  description:
    "Cognios turns creator expertise into agentic tutors that adapt to each learner. Buy tokens to learn, evolve with your tutor, and earn on-chain digital assets at milestones. Join the waitlist.",

  keywords: [
    "agentic tutors",
    "AI tutors",
    "adaptive learning",
    "crypto education",
    "AI education",
    "web3 learning",
    "on-chain credentials",
    "Solana",
    "Cognios",
  ],

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

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://waitlist.cognios.io/",
  },

  openGraph: {
    title: "Agentic Powered Tutors · Cognios",
    description:
      "Creators build agentic tutors from their knowledge. Learners use tokens, adapt over time, and earn on-chain assets at milestones. Join the waitlist.",
    url: "https://waitlist.cognios.io/",
    siteName: "Cognios",
    type: "website",
    images: [
      {
        url: "https://waitlist.cognios.io/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cognios preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Agentic Powered Tutors · Cognios",
    description:
      "Cognios turns creator expertise into agentic tutors that adapt to each learner. Buy tokens to learn, evolve with your tutor, and earn on-chain digital assets at milestones. Join the waitlist.",
    images: [
      {
        url: "https://waitlist.cognios.io/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cognios preview",
      },
    ],
  },
};

export default function Home() {
  return <HomePage />;
}
