"use client";

import React, { useState } from "react";
import EmailCapture, { TabType } from "../EmailCapture";
import Hero from "../Hero";
import WhatYoullBuild from "../WhatYoullBuild";
import HowItWorks from "../HowItWorks";
import CTASection from "../CTASection";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabType>("learner");

  return (
    <>
      <div id="hero">
        <Hero setActiveTab={setActiveTab} />
      </div>

      <div id="email-capture">
        <EmailCapture activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div id="what-youll-build">
        <WhatYoullBuild />
      </div>

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <div id="cta-section">
        <CTASection setActiveTab={setActiveTab} />
      </div>
    </>
  );
}
