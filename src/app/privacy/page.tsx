import React from "react";
import styles from "./PrivacyPolicy.module.scss";
import { PublicLayout } from "../components/PublicLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy · Cognios",
  description:
    "Privacy Policy explaining how Cognios collects and processes personal data during its pre-launch phase, including waitlist and creator applications.",

  keywords: [
    "privacy policy",
    "GDPR",
    "data protection",
    "waitlist privacy",
    "Cognios legal",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://waitlist.cognios.io/privacy",
  },

  openGraph: {
    title: "Privacy Policy · Cognios",
    description:
      "How Cognios collects and protects personal data during its pre-launch phase.",
    url: "https://waitlist.cognios.io/privacy",
    siteName: "Cognios",
    type: "article",
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
    card: "summary",
    title: "Privacy Policy · Cognios",
    description:
      "Privacy information for Cognios's pre-launch website and waitlist.",
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

export default function PrivacyPage() {
  return (
    <PublicLayout
      pageTitle="Privacy policy"
      pageSubtitle="Last updated: 30 January 2026"
    >
      <div className={styles.content}>
        <div className={styles.container}>
          <section>
            <h3>1. Overview</h3>
            <p>Cognios is currently in pre-launch phase.</p>
            <p>
              This Privacy Policy explains how we collect, use, and protect
              personal data when you visit the Cognios website and submit your
              information to join early access or apply as a potential creator.
            </p>
            <p>
              We process personal data in accordance with the General Data
              Protection Regulation (GDPR).
            </p>
          </section>

          <section>
            <h3>2. Information We Collect</h3>
            <p>
              During the pre-launch phase, we collect only the information you
              voluntarily provide, which may include:
            </p>
            <ul>
              <li>Email address</li>
              <li>
                Creator application information (such as a link to your work)
              </li>
              <li>Any additional information you submit through forms</li>
            </ul>
            <p>
              We do not currently offer user accounts, purchases, or payment
              processing.
            </p>
          </section>

          <section>
            <h3>3. How We Use Your Data</h3>
            <p>We use your personal data to:</p>
            <ul>
              <li>Manage the early access waitlist</li>
              <li>Review creator applications</li>
              <li>Send occasional updates about Cognios</li>
              <li>Respond to inquiries</li>
            </ul>
            <p>We do not sell your personal data.</p>
          </section>

          <section>
            <h3>4. Legal Basis for Processing</h3>
            <p>We process your data based on:</p>
            <ul>
              <li>Your consent when submitting forms</li>
              <li>
                Our legitimate interest in developing and preparing the Cognios
                platform
              </li>
            </ul>
            <p>You may withdraw consent at any time by contacting us.</p>
          </section>

          <section>
            <h3>5. Data Storage and Retention</h3>
            <p>
              Your data is stored securely and retained only as long as
              necessary for the purposes described above.
            </p>
            <p>You may request deletion of your data at any time.</p>
          </section>

          <section>
            <h3>6. Data Sharing</h3>
            <p>
              We do not sell personal data. We may use trusted hosting or
              infrastructure providers to store data securely. We do not share
              your information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h3>7. Your Rights Under GDPR</h3>
            <p>Under GDPR, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Restrict or object to processing</li>
              <li>Withdraw consent</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p>To exercise your rights, contact us at legal@cognios.io .</p>
          </section>

          <section>
            <h3>8. Security</h3>
            <p>
              We implement reasonable technical and organizational measures to
              protect personal data. However, no system can guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h3>9. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy as Cognios evolves from
              pre-launch to full platform. The latest version will always be
              available on this page.
            </p>
          </section>

          <section>
            <h3>10. Contact</h3>
            <p>
              If you have questions about this Privacy Policy or wish to
              exercise your data protection rights, you may contact us at{" "}
              <a href="mailto:legal@cognios.io">legal@cognios.io</a>.
            </p>
          </section>
        </div>
      </div>
    </PublicLayout>
  );
}
