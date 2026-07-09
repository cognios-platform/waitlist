"use client";

import React from "react";
import {
  BadgeCheck,
  BookOpenCheck,
  Compass,
  UploadCloud,
} from "lucide-react";
import styles from "../Home.module.scss";

const steps = [
  {
    Icon: UploadCloud,
    title: "Creator uploads expertise",
    copy: "Materials, methods, and teaching style become the foundation of an agentic tutor.",
  },
  {
    Icon: Compass,
    title: "Cognios builds an agentic tutor",
    copy: "Expertise turns into an adaptive tutor that can teach, guide, and evaluate.",
  },
  {
    Icon: BookOpenCheck,
    title: "Students learn through guided checkpoints",
    copy: "Personalized lessons, practice, and mastery checks move learners forward with understanding.",
  },
  {
    Icon: BadgeCheck,
    title: "Progress becomes verifiable",
    copy: "Milestones and achievements represent demonstrated mastery - progress learners can prove.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.howSection} aria-labelledby="how-heading">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionLabel}>How it works</p>
        <h2 id="how-heading">
          From expertise to provable progress in one journey.
        </h2>
        <p className={styles.sectionIntro}>
          Creators encode what they know. Learners progress through adaptive
          guidance. Achievements reflect real understanding.
        </p>
      </div>

      <div className={styles.stepsPanel}>
        <span className={styles.timelineTrack} aria-hidden="true" />
        {steps.map(({ Icon, title, copy }, index) => (
          <article className={styles.stepItem} key={title}>
            <div className={styles.stepNode}>
              <span className={styles.stepNumber}>0{index + 1}</span>
              <span className={styles.stepIcon} aria-hidden="true">
                <Icon size={22} strokeWidth={1.8} />
              </span>
            </div>
            <div className={styles.stepCopy}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
