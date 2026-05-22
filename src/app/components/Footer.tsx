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
        <div className={styles.logoArea}>
          <WordmarkLogo isWhite containerClassName={styles.logo} />
          <p>
            Creator-built agentic tutors. Token-powered learning. On-chain
            rewards at every milestone - join the waitlist for early access.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <div>
            <h4>Cognios</h4>
            <ul>
              <li>
                <Link href="/#email-capture">Join Waitlist</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className={styles.trustLine}>
        On-chain milestone assets powered by{" "}
        <Link
          href="https://solana.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          Solana
        </Link>
      </p>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Cognios · All rights reserved.</p>
        <div className={styles.socials}>
          <a
            href="https://x.com/Cognios_io"
            aria-label="X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterXIcon width={26} height={26} />
          </a>
        </div>
      </div>
    </footer>
  );
}
