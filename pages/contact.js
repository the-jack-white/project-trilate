import { motion as m } from "framer-motion";

const Contact = () => {
  return (
    <m.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-300 lg:px-48 px-16"
    >
      <div className="my-80 p-1 overflow-hidden">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-6xl text-center lg:text-right lg:text-9xl"
        >
          Let&apos;s Talk
        </m.h1>
      </div>
      <div className="flex justify-between">
        <div className="lg:text-2xl text-base">
          <h4>Find Me</h4>
        </div>
        <div className="lg:text-2xl text-xl underline">
          <ul>
            <li className="pb-2">Twitter</li>
            <li className="pb-2">Instagram</li>
            <li className="pb-2">LinkedIn</li>
            <li className="pb-2">Dribble</li>
          </ul>
        </div>
      </div>
    </m.main>
  );
};

export default Contact;
