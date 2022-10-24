import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation/Navigation";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="py-24 px-12 lg:px-48">
      <Navigation />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
