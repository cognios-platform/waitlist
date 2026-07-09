"use client";

import React from "react";
import { BookOpen, MessageSquareOff, Sparkles } from "lucide-react";
import styles from "../Home.module.scss";

const reasons = [
  {
    Icon: BookOpen,
    title: "Static courses move at one speed",
    copy: "One-size-fits-all content ignores pace, gaps, and how each learner actually understands.",
  },
  {
    Icon: MessageSquareOff,
    title: "Generic AI doesn't remember",
    copy: "Chat starts from zero every time - no structured path, no mastery checks, no lasting context.",
  },
  {
    Icon: Sparkles,
    title: "Cognios adapts around the learner",
    copy: "Expert-built tutors adjust guidance, practice, and next steps to goals, weaknesses, and learning style.",
  },
];

export default function WhyCognios() {
  return (
    <section className={styles.whySection} aria-labelledby="why-heading">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionLabel}>Why Cognios</p>
        <h2 id="why-heading">
          Courses don't adapt. Generic AI doesn't remember. Cognios does.
        </h2>
        <p className={styles.sectionIntro}>
          Cognios is infrastructure for creating agentic tutors - personalized
          mentorship at scale, built from real expertise.
        </p>
      </div>

      <div className={styles.reasonGrid}>
        {reasons.map(({ Icon, title, copy }, index) => (
          <article className={styles.reasonCard} key={title}>
            <span className={styles.reasonMark} aria-hidden="true">
              <Icon size={22} strokeWidth={1.8} />
            </span>
            <span className={styles.reasonNumber}>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
