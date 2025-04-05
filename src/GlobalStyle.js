// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --transition-standard: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-smooth: 0.5s cubic-bezier(0.65, 0, 0.35, 1);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.6;
    transition: background-color var(--transition-standard), color var(--transition-standard);
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 0.5em;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    transition: color var(--transition-standard);
    
    &:hover {
      color: ${({ theme }) => theme.accent};
      opacity: 0.8;
    }
  }
  
  section {
    padding: 5rem 1rem;
    position: relative;
  }
  
  input, textarea, button {
    font-family: inherit;
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accent};
    border-radius: 3px;
  }
  
  /* Text selection */
  ::selection {
    background: ${({ theme }) => theme.accent};
    color: #ffffff;
  }
`;