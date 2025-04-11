// theme.js
export const lightTheme = {
  background: "#ffffff",
  text: "#333333",
  accent: "#9d00ff",       // Using the purple accent from dark mode for both themes
  accentSoft: "rgba(157, 0, 255, 0.1)",
  headerBg: "#ffffff",
  sectionBg: "#f8f9fa",
  cardBg: "#ffffff",
  shadowLight: "0 4px 6px rgba(0, 0, 0, 0.05)",
  shadowMedium: "0 6px 12px rgba(0, 0, 0, 0.08)",
  inputBg: "#ffffff",
  inputBorder: "#e0e0e0",
  textMuted: "#666666"
};

export const darkTheme = {
  background: "#121212",   // Dark gray instead of complete black for better readability
  text: "#f5f5f5",
  accent: "#9d00ff",       // Keeping the neon purple accent
  accentSoft: "rgba(157, 0, 255, 0.15)",
  headerBg: "#1a1a1a",
  sectionBg: "#1a1a1a",
  cardBg: "#222222",
  shadowLight: "0 4px 6px rgba(0, 0, 0, 0.2)",
  shadowMedium: "0 6px 12px rgba(0, 0, 0, 0.3)",
  inputBg: "#2a2a2a",
  inputBorder: "#444444",
  textMuted: "#bbbbbb"
};