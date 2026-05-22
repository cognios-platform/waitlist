"use client";

import { useEffect } from "react";

function scrollToHash(): void {
  const hash = window.location.hash.slice(1);
  if (!hash) return;
  const el = document.getElementById(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function ScrollToHash() {
  useEffect(() => {
    if (!window.location.hash) return;
    const t = requestAnimationFrame(() => {
      scrollToHash();
    });
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    const onHashChange = () => scrollToHash();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = (anchor as HTMLAnchorElement).getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
