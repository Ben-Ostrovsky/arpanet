import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainNavbar from "@/components/MainNavbar";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <MainNavbar></MainNavbar>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}
