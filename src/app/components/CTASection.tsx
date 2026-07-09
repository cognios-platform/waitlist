"use client";

import React from "react";
import styles from "../Home.module.scss";
import Button from "./Button";
import { scrollToSection } from "@/app/lib/scrollToSection";
import { TabType } from "./EmailCapture";
import { useMobile } from "@/hooks/useMobile";

const CTASection = ({
  setActiveTab,
}: {
  setActiveTab: (tab: TabType) => void;
}) => {
  const isMobile = useMobile();

  return (
    <section
      className={styles.finalCtaSection}
      aria-labelledby="final-cta-heading"
    >
      <div className={styles.finalCtaGlow} aria-hidden="true" />
      <div className={styles.finalCtaContent}>
        <p className={styles.sectionLabel}>Early access</p>
        <h2 id="final-cta-heading">
          Explore the future of expert-led learning.
        </h2>
        <p>
          Join the Cognios waitlist for early access to adaptive AI tutors built
          from real expertise - and progress you can prove.
        </p>
        <div className={styles.ctaActions}>
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
    </section>
  );
};

export default CTASection;
