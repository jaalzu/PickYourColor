import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as Sentry from "@sentry/react";

import "./index.css";
import "./styles/fonts.css";
import App from "./App.tsx";

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN as string | undefined;

// Solo inicia Sentry si hay un DSN válido configurado. Evita el error
// "Invalid DSN" en consola cuando el placeholder "TU_DSN_ACA" queda hardcodeado.
if (SENTRY_DSN && SENTRY_DSN !== "TU_DSN_ACA" && SENTRY_DSN.startsWith("https://")) {
  Sentry.init({
    dsn: SENTRY_DSN,
    sendDefaultPii: true,
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
