"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import homeStyles from "../Home.module.scss";
import styles from "./EmailCapture.module.scss";
import Input from "./Input";
import Link from "next/link";
import Checkbox from "./Checkbox";
import Button from "./Button";
import { toast } from "react-toastify";
import Select from "./Select";
import { XIcon } from "lucide-react";

export type TabType = "learner" | "creator";

export const TABS: { id: TabType; label: string }[] = [
  { id: "learner", label: "I want to learn with agentic tutors" },
  { id: "creator", label: "I want to build and publish agents" },
];

export default function EmailCapture({
  activeTab,
  setActiveTab,
}: {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}) {
  const [formData, setFormData] = useState({
    email: "",
    consent: false,
    category: "crypto",
    link: "",
  });

  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationExiting, setCelebrationExiting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!showCelebration) return;
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [showCelebration]);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.consent || emailValid === false)
      return;

    setIsLoading(true);
    try {
      const res = await fetch(
        activeTab === "learner" ? "/api/learner" : "/api/creator",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      console.log("Learner signup response received", res);
      const data = await res.json();
      console.log("Learner signup data", data);
      if (!res.ok) {
        setIsLoading(false);
        toast.error(data.message || "Something went wrong. Please try again.");
        return;
      }
      toast.success(
        "Thanks for your interest in Cognios. We'll keep you updated as we prepare for launch.",
      );

      setShowCelebration(true);
      setCelebrationExiting(false);
      setFormData({
        email: "",
        consent: false,
        category: "crypto",
        link: "",
      });
      setEmailValid(null);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`${homeStyles.emailCapture} ${styles.emailCapture}`}
    >
      <div className={homeStyles.container}>
        <div className={homeStyles.header}>
          <span className={homeStyles.sectionTag}>Early Access</span>
          <h2>Join the Cognios waitlist</h2>
          <p>
            Sign up for early access to agentic tutors, token-powered learning,
            and on-chain milestone rewards.
          </p>
        </div>

        <div className={styles.captureBody}>
          {showCelebration && (
            <div
              className={styles.celebrationBackdrop}
              role="status"
              aria-live="polite"
              aria-label="Sign-up confirmed"
            >
              <div
                className={`${styles.celebrationCard} ${
                  celebrationExiting ? styles.celebrationCardExit : ""
                }`}
              >
                <button
                  onClick={() => setShowCelebration(false)}
                  className={styles.celebrationCloseButton}
                >
                  <XIcon className={styles.celebrationClose} size={36} />
                </button>
                <Image
                  className={styles.celebrationGif}
                  src="/ai_tutor.png"
                  alt=""
                  width={480}
                  height={270}
                  unoptimized
                />
              </div>
            </div>
          )}

          <nav
            className={styles.nav}
            role="tablist"
            aria-label="Sign up as learner or creator"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls="email-capture-panel"
                id={`tab-${tab.id}`}
                className={`${styles.navItem} ${
                  activeTab === tab.id ? styles.active : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
                disabled={isLoading}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <form
            id="email-capture-panel"
            role="tabpanel"
            aria-labelledby={
              activeTab === "learner" ? "tab-learner" : "tab-creator"
            }
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <p className={styles.description}>
              {activeTab === "learner"
                ? "Be among the first to learn with agentic tutors that adapt to your pace and style - powered by tokens and rewarded on-chain at milestones."
                : "Be among the first creators to turn your expertise into agentic tutors and reach learners through token-powered sessions."}
            </p>

            <Input
              id="waitlist-email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => {
                const email = e.target.value.toLowerCase().trim();
                setFormData({ ...formData, email });
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const isValid =
                  email.length > 0 ? emailRegex.test(email) : null;
                setEmailValid(isValid);
              }}
              required
              disabled={isLoading}
              label="Your email"
            />

            {activeTab === "creator" && (
              <Input
                id="creator-link"
                type="url"
                placeholder="https://example.com"
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
                label="Your website or social media link"
                disabled={isLoading}
              />
            )}

            <Select
              id="waitlist-category"
              label="What are you interested in?"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              disabled={isLoading}
            >
              <option value="crypto">Crypto & Web3</option>
              <option value="ai">AI & Machine Learning</option>
              <option value="smart-contracts">Smart Contracts</option>
              <option value="agents">Building AI agents</option>
              <option value="other">Other topics</option>
            </Select>

            <Checkbox
              label={
                <>
                  I agree to receive email updates about Cognios and have read
                  the{" "}
                  <Link
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Privacy Policy
                  </Link>
                  {" and "}
                  <Link
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Terms of Service
                  </Link>
                </>
              }
              id="privacyPolicyAccepted"
              checked={formData.consent}
              onChange={(e) =>
                setFormData({ ...formData, consent: e.target.checked })
              }
              required
              disabled={isLoading}
            />

            <Button
              variant="primary"
              size="large"
              disabled={isLoading || emailValid === false}
              isLoading={isLoading}
            >
              {activeTab === "learner" ? "Join the Waitlist" : "Build an Agent"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
