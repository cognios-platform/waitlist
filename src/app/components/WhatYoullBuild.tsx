"use client";

import React from "react";
import {
  BookOpenCheck,
  GraduationCap,
  Sparkles,
  UploadCloud,
  UserRound,
} from "lucide-react";
import styles from "../Home.module.scss";
import Button from "./Button";
import { scrollToSection } from "@/app/lib/scrollToSection";
import { TabType } from "./EmailCapture";

const audiencePaths = [
  {
    eyebrow: "For Creators",
    title: (
      <>
        Turn your expertise
        <br />
        into a tutor that teaches at scale.
      </>
    ),
    copy: "Upload your knowledge, define what learners should master, and publish an adaptive agentic tutor built from your expertise.",
    cta: "Become a Founding Creator",
    tab: "creator" as TabType,
    accent: "creator",
    Icon: UserRound,
    SupportIcon: UploadCloud,
    bullets: [
      "Encode real expertise and teaching style",
      "Generate adaptive learning paths",
      "Review, refine, and publish",
      "Reach learners at scale",
    ],
  },
  {
    eyebrow: "For Learners",
    title: (
      <>
        Learn from expert-built
        <br />
        AI tutors that adapt to you.
      </>
    ),
    copy: "Get personalized guidance that adjusts to your pace, goals, weaknesses, and learning style - with progress based on mastery.",
    cta: "Get Early Access",
    tab: "learner" as TabType,
    accent: "student",
    Icon: GraduationCap,
    SupportIcon: BookOpenCheck,
    bullets: [
      "Learn at your own pace",
      "Personalized explanations and practice",
      "Mastery checkpoints",
      "Track milestones and progress",
    ],
  },
];

export default function WhatYoullBuild({
  setActiveTab,
}: {
  setActiveTab: (tab: TabType) => void;
}) {
  return (
    <section
      className={styles.audienceSection}
      aria-labelledby="audience-heading"
    >
      <div className={styles.sectionHeading}>
        <p className={styles.sectionLabel}>Built for both sides</p>
        <h2 id="audience-heading">
          Creators teach at scale. Learners progress with guidance.
        </h2>
        <p className={styles.sectionIntro}>
          Cognios connects expert knowledge with adaptive learning journeys -
          so creators can teach at scale and learners can progress with
          practice, support, and proof.
        </p>
      </div>

      <div className={styles.audienceGrid}>
        {audiencePaths.map(({ Icon, SupportIcon, ...path }) => (
          <article
            className={`${styles.audienceCard} ${styles[path.accent]}`}
            key={path.eyebrow}
          >
            <div className={styles.audienceCopy}>
              <p className={styles.audienceEyebrow}>{path.eyebrow}</p>
              <h3>{path.title}</h3>
              <p>{path.copy}</p>
              <ul>
                {path.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Button
                variant="secondary"
                size="medium"
                onClick={() => {
                  scrollToSection("email-capture");
                  setActiveTab(path.tab);
                }}
              >
                {path.cta}
              </Button>
            </div>

            <div className={styles.audienceVisual} aria-hidden="true">
              <div className={styles.audienceOrb}>
                <Icon size={64} strokeWidth={1.35} />
              </div>
              <div className={styles.audienceMiniOrb}>
                <SupportIcon size={28} strokeWidth={1.7} />
              </div>
              <div className={styles.audienceSpark}>
                <Sparkles size={22} strokeWidth={1.7} />
              </div>
              <div className={styles.audiencePlate} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
