import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThirdwebProvider activeChain="ethereum" clientId="your-client-id">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ThirdwebProvider>
    </>
  );
}
