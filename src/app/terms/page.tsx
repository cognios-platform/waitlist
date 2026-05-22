import React from "react";
import styles from "./TermsPolicy.module.scss";
import { PublicLayout } from "../components/PublicLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service · Cognios",
  description:
    "Terms governing access to the Cognios website during its pre-launch phase, including website use and waitlist participation.",

  keywords: [
    "terms of service",
    "website terms",
    "prelaunch terms",
    "user agreement",
    "Cognios legal",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://waitlist.cognios.io/terms",
  },

  openGraph: {
    title: "Terms of Service · Cognios",
    description:
      "Terms governing access to the Cognios website during its pre-launch phase.",
    url: "https://waitlist.cognios.io/terms",
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
    title: "Terms of Service · Cognios",
    description: "Website terms for Cognios during its pre-launch phase.",
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

export default function TermsPolicyPage() {
  return (
    <PublicLayout
      pageTitle="Terms of service"
      pageSubtitle="Last updated: 30 January 2026"
    >
      <div className={styles.content}>
        <div className={styles.container}>
          <section>
            <h3>1. Platform Overview</h3>
            <p>
              These Terms of Service (“Terms”) govern your access to and use of
              the Cognios website.{" "}
            </p>
            <p>
              Cognios is currently in pre-launch phase. The website is provided
              for informational purposes and to allow users to join an early
              access waitlist or apply as a potential creator.
            </p>
            <p>By using this website, you agree to these Terms. </p>
          </section>

          <section>
            <h3>2. No Marketplace Services Yet</h3>
            <p>
              Cognios does not currently offer user accounts, digital products,
              purchases, or payment processing.
            </p>
            <p>
              Submitting your email or information does not create an account
              and does not guarantee future access to services.
            </p>
            <p>
              Cognios may modify, delay, or discontinue the planned platform at
              its discretion.
            </p>
          </section>

          <section>
            <h3>3. Email Submissions</h3>
            <p>
              By submitting your email address or application information, you
              consent to receive updates related to Cognios.
            </p>
            <p>
              You may request removal of your information at any time by
              contacting us. Our data practices are described in the Privacy
              Policy.
            </p>
          </section>

          <section>
            <h3>4. Intellectual Property</h3>
            <p>
              All content on this website, including text, branding, design, and
              logos, is owned by Cognios and may not be copied, reproduced, or
              distributed without permission.
            </p>
          </section>

          <section>
            <h3>5. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, Cognios is not liable for
              any damages arising from your use of this website.
            </p>
            <p>
              The website is provided “as is” without warranties of any kind.
            </p>
          </section>

          <section>
            <h3>6. Changes to These Terms</h3>
            <p>
              Cognios may update these Terms from time to time. Continued use of
              the website constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h3>7. Contact</h3>
            <p>
              For questions regarding these Terms, please contact:
              <br />
              <a href="mailto:legal@cognios.io">legal@cognios.io</a>
            </p>
          </section>
        </div>
      </div>
    </PublicLayout>
  );
}
