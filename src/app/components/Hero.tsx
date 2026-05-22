"use client";

import React from "react";
import Image from "next/image";
import styles from "../Home.module.scss";
import { Bot, Sparkles, Award } from "lucide-react";
import Button from "./Button";
import { scrollToSection } from "@/app/lib/scrollToSection";
import { TabType } from "./EmailCapture";
import { useMobile } from "@/hooks/useMobile";

export default function Hero({
  setActiveTab,
}: {
  setActiveTab: (tab: TabType) => void;
}) {
  const isMobile = useMobile();

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <span className={styles.badge}>Coming Soon</span>
        <h1>Expert Knowledge, Turned Into Agentic Tutors</h1>
        <p>
          Creators encode what they know into AI tutors. Learners buy tokens to
          learn through conversation - and those tutors evolve with your pace,
          style, and goals while you earn on-chain assets at every milestone.
        </p>

        <ul className={styles.trustStrip}>
          <li>
            <Bot size={18} />
            <span>Adaptive agentic tutors</span>
          </li>
          <li>
            <Sparkles size={18} />
            <span>Creator-built from real expertise</span>
          </li>
          <li>
            <Award size={18} />
            <span>On-chain milestone rewards</span>
          </li>
        </ul>

        <div className={styles.heroButtons}>
          <Button
            variant="primary"
            size="large"
            fullWidth={isMobile}
            onClick={() => {
              scrollToSection("email-capture");
              setActiveTab("learner");
            }}
          >
            Join the Waitlist
          </Button>
          <Button
            variant="secondary"
            size="large"
            fullWidth={isMobile}
            onClick={() => {
              scrollToSection("email-capture");
              setActiveTab("creator");
            }}
          >
            Build an Agent
          </Button>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.heroLogoWrap}>
          <Image
            src="/cognios-logo.png"
            alt="Cognios logo"
            width={520}
            height={520}
            className={styles.heroLogo}
            priority
          />
          <span className={styles.heroLogoFill} />
        </div>
      </div>
    </section>
  );
}
