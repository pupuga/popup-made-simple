import React from "react";
import {createRoot} from "react-dom/client";
import settings from "../settings";
import App from "./App";

const renderApp = () => {
    const id = settings.postType;
    let rootElement = document.getElementById(id);

    if (!rootElement) {
        (async () => await import("./index.scss"))();
        rootElement = document.createElement("div");
        rootElement.id = id;
        document.body.appendChild(rootElement);
        createRoot(rootElement).render(<App />);
    }
}

document.addEventListener("DOMContentLoaded", renderApp);