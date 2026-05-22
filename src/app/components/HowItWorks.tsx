"use client";

import React from "react";
import styles from "../Home.module.scss";
import { Search, Coins, Award } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      Icon: Search,
      title: "Find your agentic tutor",
      desc: "Browse tutors built by creators who have encoded their expertise into adaptive AI agents across crypto, AI, and more.",
    },
    {
      Icon: Coins,
      title: "Buy tokens to start learning",
      desc: "Purchase tokens on the platform and use them to communicate with your tutor - every session powered by real conversation.",
    },
    {
      Icon: Award,
      title: "Grow, adapt, and earn on-chain",
      desc: "Your tutor evolves with your pace and learning style. Hit milestones - finishing lessons, certifications, and more - to receive on-chain digital assets.",
    },
  ];

  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>Simple Flow</span>
          <h2>How Cognios Works in 3 Steps</h2>
          <p>
            From creator knowledge to an evolving tutor - and on-chain proof of
            what you achieve.
          </p>
        </div>

        <div className={styles.col}>
          {steps.map((step, i) => (
            <div key={step.title} className={styles.step}>
              <span className={styles.stepIndex}>
                {String(i + 1).padStart(2, "0")}/
                {String(steps.length).padStart(2, "0")}
              </span>
              <div className={styles.iconWrapper}>
                <step.Icon size={20} />
              </div>
              <div className={styles.stepContent}>
                <span>{step.title}</span>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
