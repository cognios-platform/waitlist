"use client";

import React, { useState } from "react";
import EmailCapture, { TabType } from "../EmailCapture";
import Hero from "../Hero";
import styles from "../../Home.module.scss";
import WhyCognios from "../WhyCognios";
import HowItWorks from "../HowItWorks";
import WhatYoullBuild from "../WhatYoullBuild";
import ProvableProgress from "../ProvableProgress";
import CTASection from "../CTASection";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabType>("learner");

  return (
    <div className={styles.homePage}>
      <div id="hero">
        <Hero setActiveTab={setActiveTab} />
      </div>

      <div id="email-capture">
        <EmailCapture activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div id="why-cognios">
        <WhyCognios />
      </div>

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <div id="what-youll-build">
        <WhatYoullBuild setActiveTab={setActiveTab} />
      </div>

      <div id="provable-progress">
        <ProvableProgress />
      </div>

      <div id="cta-section">
        <CTASection setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
