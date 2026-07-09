"use client";

import React, { useState } from "react";
import styles from "./Header.module.scss";
import WordmarkLogo from "./WordmarkLogo";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "../lib/scrollToSection";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToWaitlist = () => {
    setMenuOpen(false);
    if (window.location.pathname === "/") {
      scrollToSection("email-capture");
    } else {
      router.push("/#email-capture");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <WordmarkLogo />

        <nav className={styles.nav} aria-label="Primary">
          <button
            type="button"
            className={styles.navLink}
            onClick={goToWaitlist}
          >
            Join Waitlist
          </button>
          <button
            type="button"
            className={styles.navLink}
            onClick={() => {
              setMenuOpen(false);
              router.push("/privacy");
            }}
          >
            Privacy
          </button>
          <button
            type="button"
            className={styles.navLink}
            onClick={() => {
              setMenuOpen(false);
              router.push("/terms");
            }}
          >
            Terms
          </button>
          <button
            type="button"
            className={styles.navLink}
            onClick={() => {
              setMenuOpen(false);
              router.push("/contact");
            }}
          >
            Contact
          </button>
        </nav>

        <div className={styles.actions}>
          <Button variant="primary" size="small" onClick={goToWaitlist}>
            Get Early Access
          </Button>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileNav}>
          <Button variant="ghost" onClick={goToWaitlist}>
            Join Waitlist
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setMenuOpen(false);
              router.push("/privacy");
            }}
          >
            Privacy
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setMenuOpen(false);
              router.push("/terms");
            }}
          >
            Terms
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setMenuOpen(false);
              router.push("/contact");
            }}
          >
            Contact
          </Button>
          <Button variant="primary" onClick={goToWaitlist}>
            Get Early Access
          </Button>
        </div>
      )}
    </header>
  );
}
