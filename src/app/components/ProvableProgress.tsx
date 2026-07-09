"use client";

import React from "react";
import { BadgeCheck, ShieldCheck, Target } from "lucide-react";
import styles from "../Home.module.scss";

const pillars = [
  {
    Icon: Target,
    title: "Mastery over click-through",
    copy: "Progress comes from demonstrating understanding - not finishing a video or checking a box.",
  },
  {
    Icon: BadgeCheck,
    title: "Verifiable achievements",
    copy: "Milestones and certificates represent real learning outcomes learners can carry forward.",
  },
  {
    Icon: ShieldCheck,
    title: "Proof, not speculation",
    copy: "Verification infrastructure supports learner-owned proof of progress - quietly, as infrastructure.",
  },
];

export default function ProvableProgress() {
  return (
    <section
      className={styles.progressSection}
      aria-labelledby="progress-heading"
    >
      <div className={styles.sectionHeading}>
        <p className={styles.sectionLabel}>Provable progress</p>
        <h2 id="progress-heading">
          Achievements that mean something.
        </h2>
        <p className={styles.sectionIntro}>
          Cognios records milestones based on mastery. Certificates and
          achievements can represent demonstrated understanding - not empty
          completion.
        </p>
      </div>

      <div className={styles.progressGrid}>
        {pillars.map(({ Icon, title, copy }) => (
          <article className={styles.progressCard} key={title}>
            <div className={styles.progressIcon} aria-hidden="true">
              <Icon size={28} strokeWidth={1.6} />
            </div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
