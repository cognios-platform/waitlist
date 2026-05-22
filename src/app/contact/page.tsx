import React from "react";
import styles from "./Contact.module.scss";
import { Mail, FileText, HelpCircle } from "lucide-react";
import { PublicLayout } from "../components/PublicLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · Cognios",
  description:
    "Contact Cognios for questions, feedback, or legal inquiries related to the platform and agentic tutors.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact · Cognios",
    description:
      "Contact Cognios for questions, feedback, or legal inquiries related to the platform and agentic tutors.",
    type: "website",
    images: [
      {
        url: "https://waitlist.cognios.io/images/favicon/OG-image.png",
        width: 1200,
        height: 630,
        alt: "Cognios preview",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Contact · Cognios",
    description:
      "Contact Cognios for questions, feedback, or legal inquiries related to the platform and agentic tutors.",
    images: [
      {
        url: "https://waitlist.cognios.io/images/favicon/OG-image.png",
        width: 1200,
        height: 630,
        alt: "Cognios preview",
      },
    ],
  },
};

export default function ContactPage() {
  const contacts = [
    {
      label: "General & Support",
      icon: HelpCircle,
      email: "support@cognios.io",
      description: "Questions, feedback, or help with Cognios",
    },
    {
      label: "Legal & DMCA",
      icon: FileText,
      email: "legal@cognios.io",
      description: "Copyright notices, legal inquiries, and compliance matters",
    },
  ];

  return (
    <PublicLayout
      pageTitle="Contact"
      pageSubtitle="Questions, feedback, or legal notices - here's how to reach us."
      usePageWrapper
    >
      <section className={styles.emailSection}>
        <div className={styles.emailGrid}>
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={`mailto:${contact.email}`}
              className={styles.emailCard}
            >
              <div className={styles.emailIcon}>
                <contact.icon size={20} />
              </div>
              <div className={styles.emailContent}>
                <h3 className={styles.emailLabel}>{contact.label}</h3>
                <p className={styles.emailAddress}>{contact.email}</p>
              </div>
              <Mail size={18} className={styles.emailArrow} />
            </a>
          ))}
        </div>
      </section>
      <p className={styles.introText}>
        Cognios is an <strong>early-stage platform</strong> for agentic tutors,
        token-powered learning, and on-chain milestone rewards. We read every
        message and do our best to respond as quickly as possible.
      </p>
    </PublicLayout>
  );
}
