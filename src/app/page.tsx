import React from "react";
import { Metadata } from "next";
import HomePage from "./components/home_page/Home";

export const metadata: Metadata = {
  title: "Cognios - Agentic Tutors Built From Real Expertise",
  description:
    "Join the Cognios waitlist. Creators turn their expertise into adaptive AI tutors, and learners progress through personalized guidance and verifiable milestones.",

  keywords: [
    "agentic tutors",
    "AI tutors",
    "adaptive learning",
    "expert knowledge",
    "personalized learning",
    "mastery checkpoints",
    "verifiable achievements",
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
    title: "Cognios - Agentic Tutors Built From Real Expertise",
    description:
      "Join the Cognios waitlist. Creators turn their expertise into adaptive AI tutors, and learners progress through personalized guidance and verifiable milestones.",
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
    title: "Cognios - Agentic Tutors Built From Real Expertise",
    description:
      "Join the Cognios waitlist. Creators turn their expertise into adaptive AI tutors, and learners progress through personalized guidance and verifiable milestones.",
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
