import { useEffect } from "react";

const SCRIPT_ID = "chatbase-embed-script";

export default function ChatbaseWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById(SCRIPT_ID)) return;

    const bootstrap = () => {
      if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = function (...args) {
          if (!window.chatbase.q) {
            window.chatbase.q = [];
          }
          window.chatbase.q.push(args);
        };
        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop) {
            if (prop === "q") return target.q;
            return (...args) => target(prop, ...args);
          },
        });
      }

      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "KWe83QIP3IAcV9qniW2zr";
      script.domain = "www.chatbase.co";
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      bootstrap();
    } else {
      window.addEventListener("load", bootstrap, { once: true });
    }

    return () => {
      window.removeEventListener("load", bootstrap);
    };
  }, []);

  return null;
}
