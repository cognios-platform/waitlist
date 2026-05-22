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

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <WordmarkLogo />

        <nav className={styles.nav}>
          <Button
            variant="ghost"
            onClick={() => {
              if (window.location.pathname === "/") {
                scrollToSection("email-capture");
              } else {
                router.push("/#email-capture");
              }
            }}
          >
            Join Waitlist
          </Button>
          <Button variant="ghost" onClick={() => router.push("/privacy")}>
            Privacy
          </Button>
          <Button variant="ghost" onClick={() => router.push("/terms")}>
            Terms
          </Button>
          <Button variant="ghost" onClick={() => router.push("/contact")}>
            Contact
          </Button>
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileNav}>
          <Button
            variant="ghost"
            onClick={() => router.push("/#email-capture")}
          >
            Join Waitlist
          </Button>
          <Button variant="ghost" onClick={() => router.push("/privacy")}>
            Privacy
          </Button>
          <Button variant="ghost" onClick={() => router.push("/terms")}>
            Terms
          </Button>
          <Button variant="ghost" onClick={() => router.push("/contact")}>
            Contact
          </Button>
        </div>
      )}
    </header>
  );
}
