import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import SidbarDrawerProvider from "../contexts/SidebarDrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidbarDrawerProvider>
        <Component {...pageProps} />
      </SidbarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
