import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./i18n";
import emailjs from "@emailjs/browser";
import "./index.css";
import * as analytics from "./lib/analytics";

const basename = import.meta.env.BASE_URL;

// Initialize EmailJS with your public key
emailjs.init("Ca9QlrTtulyXqxD1S");

// Analytics tracking component
function AnalyticsTracker() {
  const location = useLocation();

  React.useEffect(() => {
    analytics.pageview(location.pathname + location.search);
  }, [location]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router basename={basename}>
        <AnalyticsTracker />
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
);
