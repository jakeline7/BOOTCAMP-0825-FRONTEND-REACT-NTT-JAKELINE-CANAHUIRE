import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import MainLayout from "./shared/Layout/MainLayout/MainLayout.tsx";
import "./Main.css";

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <MainLayout>
        <App />
      </MainLayout>
    </BrowserRouter>
  </StrictMode>
);
