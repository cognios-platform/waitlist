"use client";

import React from "react";
import Image from "next/image";
import styles from "../Home.module.scss";
import Button from "./Button";
import { scrollToSection } from "@/app/lib/scrollToSection";
import { TabType } from "./EmailCapture";
import { useMobile } from "@/hooks/useMobile";

const floatingPanels = [
  {
    label: "Expertise",
    value: "Creator knowledge uploaded",
    className: styles.floatingPanelSource,
  },
  {
    label: "Path",
    value: "Adaptive learning path",
    className: styles.floatingPanelLesson,
  },
  {
    label: "Mastery",
    value: "Checkpoint verified",
    className: styles.floatingPanelMastery,
  },
  {
    label: "Achievement",
    value: "Certificate ready",
    className: styles.floatingPanelAchieve,
  },
];

export default function Hero({
  setActiveTab,
}: {
  setActiveTab: (tab: TabType) => void;
}) {
  const isMobile = useMobile();

  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <div className={styles.heroSpotlight} aria-hidden="true" />
      <div className={styles.heroContent}>
        <p className={styles.kicker}>Coming soon</p>
        <h1 id="hero-heading" className={styles.heroTitle}>
          <span>Real Experts.</span>
          <span>Agentic tutors.</span>
          <span className={styles.gradientText}>Provable Progress.</span>
        </h1>
        <p className={styles.heroSubheadline}>
          Cognios turns creator expertise into adaptive AI tutors that teach,
          guide, evaluate, and support learners at scale.
        </p>

        <div className={styles.heroActions}>
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
            Become a Founding Creator
          </Button>
        </div>
      </div>

      <div className={styles.heroVisual} aria-hidden="true">
        <div className={styles.knowledgeCore}>
          <span className={styles.coreGlow} />
          <span className={styles.coreParticles} />
          <span className={styles.orbitRingOne} />
          <span className={styles.orbitRingTwo} />
          <span className={styles.orbitRingThree} />
          <span className={`${styles.orbitNode} ${styles.orbitNodeOne}`} />
          <span className={`${styles.orbitNode} ${styles.orbitNodeTwo}`} />
          <span className={`${styles.orbitNode} ${styles.orbitNodeThree}`} />

          {floatingPanels.map((panel) => (
            <div
              className={`${styles.floatingPanel} ${panel.className}`}
              key={panel.label}
            >
              <span>{panel.label}</span>
              <b>{panel.value}</b>
            </div>
          ))}

          <div className={styles.logoStage}>
            <Image
              src="/cognios-logo.png"
              alt=""
              width={360}
              height={360}
              priority
              className={styles.heroLogo}
            />
            <span className={styles.logoScan} />
          </div>

          <span className={styles.corePedestal} />
        </div>
      </div>
    </section>
  );
}
