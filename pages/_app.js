import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
// import Navigation from "../components/Navigation/Navigation";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence initial={false}>
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
