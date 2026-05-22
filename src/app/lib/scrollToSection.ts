export function scrollToSection(id: string): void {
  if (typeof document === "undefined" || typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }
}
