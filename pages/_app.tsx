import "../styles/globals.css";
import type { AppProps } from "next/app";
import PageWrapper from "../components/HeadComponent";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
