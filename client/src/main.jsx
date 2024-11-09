import React, { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Papp from "./Papp.jsx";
import { BrowserRouter } from "react-router-dom";
import Mapp from "./Components/Mapp.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
);
