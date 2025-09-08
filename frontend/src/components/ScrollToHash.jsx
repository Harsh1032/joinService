import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash, state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const wanted =
      (state && state.scrollTo) ||
      (hash ? decodeURIComponent(hash.slice(1)) : null);

    if (!wanted) return;

    let done = false;

    const scrollWithOffset = (elOrTop) => {
      const nav = document.getElementById("site-navbar");
      const offset = nav ? nav.offsetHeight : 0;

      if (elOrTop === "TOP") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const y = elOrTop.getBoundingClientRect().top + window.pageYOffset - offset - 8;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      done = true;
      return true;
    };

    const tryScroll = () => {
      if (wanted === "top") return scrollWithOffset("TOP");
      const el = document.getElementById(wanted);
      if (el) return scrollWithOffset(el);
      return false;
    };

    // 1) Try immediately
    if (tryScroll()) return;

    // 2) Retry for up to ~3s
    let tries = 0;
    const maxTries = 120;    // 120 * 25ms ≈ 3s
    const retryTimer = setInterval(() => {
      tries += 1;
      if (tryScroll() || tries >= maxTries) clearInterval(retryTimer);
    }, 25);

    // 3) Observe DOM in case sections mount slightly later
    const observer = new MutationObserver(() => {
      if (!done) tryScroll();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearInterval(retryTimer);
      observer.disconnect();
    };
  }, [pathname, hash, state]);

  // Clear scroll state from history so back/forward doesn’t re-trigger
  useEffect(() => {
    if (state && state.scrollTo) {
      const t = setTimeout(() => navigate(".", { replace: true, state: {} }), 0);
      return () => clearTimeout(t);
    }
  }, [state, navigate]);

  return null;
}
