'use client';
import React from 'react';
// Next Theme
import { ThemeProvider } from "next-themes";

function ProviderTheme({children}) {
  return (
      <ThemeProvider>
          {children}
    </ThemeProvider>
  )
}

export default ProviderTheme;