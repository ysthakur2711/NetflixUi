import React from "react";
import ReactDOM from "react-dom/client";  // Update this line
import App from "./App";
import { AuthContextProvider } from "./authContext/AuthContext";

// Create a root using React 18's new API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
