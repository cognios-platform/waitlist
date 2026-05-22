"use client";

import React from "react";
import styles from "../Home.module.scss";
import Button from "./Button";
import { scrollToSection } from "@/app/lib/scrollToSection";
import { TabType } from "./EmailCapture";

const CTASection = ({
  setActiveTab,
}: {
  setActiveTab: (tab: TabType) => void;
}) => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Ready to learn with an agentic tutor?</h2>
          <p>
            Join the waitlist to be among the first learners and creators on
            Cognios when agentic tutors launch.
          </p>
        </div>

        <div className={styles.ctaButtons}>
          <Button
            variant="primary"
            size="large"
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
            onClick={() => {
              scrollToSection("email-capture");
              setActiveTab("creator");
            }}
          >
            Build an Agent
          </Button>
        </div>

        <p className={styles.ctaNote}>
          Tokens • Adaptive tutors • On-chain milestones
        </p>
      </div>
    </section>
  );
};

export default CTASection;
