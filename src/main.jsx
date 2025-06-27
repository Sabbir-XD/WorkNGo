// src/main.jsx or index.jsx
import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./router/router.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import ThemeProvider from "./Theme/ThemeProvider.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000, // global default duration (in ms)
  once: true, // only animate once
  offset: 100, // offset (in px) from the original trigger point
  easing: "ease-in-out", // animation easing
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<p>Loading...</p>}>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    </Suspense>
  </StrictMode>
);
