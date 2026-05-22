"use client";

import React from "react";
import styles from "../Home.module.scss";
import { Bot, Cpu } from "lucide-react";

const items = [
  {
    Icon: Bot,
    title: "For Learners",
    desc: "Learn by talking with agentic tutors that adapt to your pace, learning style, and progress over time - not static course videos.",
    highlights: [
      "Buy tokens to chat with tutors",
      "Tutors that evolve with you",
      "On-chain assets at milestones",
    ],
  },
  {
    Icon: Cpu,
    title: "For Creators",
    desc: "Upload your knowledge, build an agentic tutor from your expertise, and reach learners who pay with tokens to learn from your agent.",
    highlights: [
      "Encode your expertise",
      "Publish agentic tutors",
      "Earn from token usage",
    ],
  },
];

export default function WhatYoullBuild() {
  return (
    <section className={styles.whatYoullBuild}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>How It Works</span>
          <h2>Learn and Teach Through Agentic Tutors</h2>
          <p>
            Cognios connects creators who turn knowledge into agents with
            learners who grow through adaptive, token-powered tutoring - and
            verifiable on-chain rewards along the way.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.icon}>
                <item.Icon size={28} />
              </div>
              <span>{item.title}</span>
              <p>{item.desc}</p>
              <ul className={styles.valueList}>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
