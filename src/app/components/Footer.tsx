"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { TwitterXIcon } from "./icons/Socials";
import WordmarkLogo from "./WordmarkLogo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.brandArea}>
          <WordmarkLogo isWhite containerClassName={styles.logo} />
          <p>
            The AI tutoring platform where real experts build adaptive tutors
            and learners achieve provable progress.
          </p>
          <div className={styles.socials}>
            <a
              href="https://x.com/Cognios_io"
              aria-label="Cognios on X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterXIcon width={22} height={22} />
            </a>
          </div>
        </div>

        <nav className={styles.footerLinks} aria-label="Footer navigation">
          <div className={styles.footerColumn}>
            <h4>Cognios</h4>
            <ul>
              <li>
                <Link href="/#email-capture">Join Waitlist</Link>
              </li>
              <li>
                <Link href="/#how-it-works">How it works</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
            </ul>
          </div>
        </nav>

        <aside className={styles.securityCard}>
          <h4>Secure &amp; transparent</h4>
          <p>
            Cognios uses structured progress and milestone infrastructure to
            support learner-owned proof of achievement.
          </p>
        </aside>
      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Cognios · All rights reserved.</p>
        <p className={styles.infrastructureLine}>
          Built for expert knowledge, adaptive learning, and progress learners
          can carry forward.
        </p>
      </div>
    </footer>
  );
}
