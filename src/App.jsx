import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import gitlabLogo from "./assets/gitlab.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const version = import.meta.env.VITE_APP_VERSION || "Dev";
  const envName = import.meta.env.VITE_ENVIRONMENT_NAME || "Localhost";
  const headerColor = import.meta.env.VITE_HEADER_COLOR || "#646cff"; // Violet par défaut

  return (
    <>
      <div
        style={{
          backgroundColor: headerColor,
          color: "white",
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 999,
        }}
      >
        ⚠️ Environnement : {envName} ⚠️
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://gitlab.com" target="_blank">
          <img src={gitlabLogo} className="logo" alt="Gitlab logo" />
        </a>
      </div>
      <h1>Learn GitLab CI/CD Final Project</h1>
      <div className="card">
        <h2>Welcome to the GitLab CI/CD world.</h2>
        <p>
          Dive into the world of continuous integration and continuous delivery
          (CI/CD) by deploying this simple app with GitLab.{" "}
        </p>
        <p>
          Hint: Edit <code>src/App.jsx</code> to make chnages to this page.
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Created by Abdel FARE.</p>
      <p className="read-the-docs">Application version: {version}</p>
    </>
  );
}

export default App;
