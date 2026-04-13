"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsTrackerProps {
  gaId?: string;
  /** Custom selectors for elements that should trigger click tracking */
  clickableSelectors?: string[];
}

export default function AnalyticsTracker({
  gaId,
  clickableSelectors = ["button", "a", '[role="button"]', "[data-analytics]"],
}: AnalyticsTrackerProps) {
  const pathname = usePathname();
  const GA_ID = gaId;

  // Page view tracking
  useEffect(() => {
    if (typeof window?.gtag === "function" && GA_ID) {
      window.gtag("config", GA_ID, {
        page_path: pathname,
        page_title: document.title,
        debug_mode: true,
      });
    }
  }, [pathname, GA_ID]);

  // Click tracking with customizable selectors
  useEffect(() => {
    const selectorString = clickableSelectors.join(", ");

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const button = target.closest(selectorString);

      if (!button || typeof window?.gtag !== "function" || !GA_ID) return;

      const label =
        button.getAttribute("data-analytics") ||
        button.getAttribute("aria-label") ||
        (button as HTMLButtonElement | HTMLAnchorElement).innerText?.trim() ||
        button.id ||
        button.getAttribute("href") ||
        "unknown";

      window.gtag("event", "button_click", {
        button_name: label.substring(0, 100),
        page: window.location.pathname,
        button_id: button.id || undefined,
        button_type: button.tagName.toLowerCase(),
        selector: selectorString,
      });
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleClick, { capture: true });
  }, [clickableSelectors, GA_ID]);

  return null;
}
