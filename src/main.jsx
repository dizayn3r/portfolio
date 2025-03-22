import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import Tailwind CSS
import { ThemeProvider } from "./context/ThemeContext";
import { StatsProvider } from "./context/StatsContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <StatsProvider>
        <App />
      </StatsProvider>
    </ThemeProvider>
  </React.StrictMode>
);