// src/main.jsx or index.jsx
import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";

import { router } from "./router/router.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import ThemeProvider from "./Theme/ThemeProvider.jsx";

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
