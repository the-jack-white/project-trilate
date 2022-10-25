import Head from "next/head";
import { motion as m } from "framer-motion";
import Navigation from "../components/Navigation/Navigation";

export default function Home() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 py-12 px-10"
    >
      <Head>
        <title>Trilate | Home</title>
        <meta name="description" content="Need help to grow your business?" />
        <link rel="icon" href="/images/logos/trilate_logo_black.svg" />
      </Head>
      <main>
        <div className="my-80 p-1 overflow-hidden">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-6xl text-center lg:text-right lg:text-9xl"
          >
            Trilate
          </m.h1>
        </div>
        <div className="flex justify-between">
          <div>
            <h2>Design</h2>
            <h2>Company</h2>
            <h2>2022</h2>
          </div>
          <div>
            <h3>
              We <strong>TRI</strong> to never be <strong>LATE</strong>
            </h3>
            <h3>A Design Agency you can trust</h3>
          </div>
        </div>
      </main>
    </m.div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  console.log("PARAMS: ", params);
  console.log("SLUG: ", params.slug[0]);

  return {
    props: {
      slug: params.slug[0],
    },
  };
}
