import Image from "next/image";
import { apple, bill, google } from "../../assets";
import styles, { layout } from "../styles/style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <Image
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={`${layout.sectionInfo} items-center`}>
        <h2 className={`${styles.heading2} flex justify-center`}>
          Easily control your <br className="sm:block hidden" />
          billing & invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic itaque
          ipsa, culpa molestiae suscipit fugiat vero delectus, ad mollitia ex
          rem illo nesciunt omnis ducimus dolorum atque saepe quos cum?
        </p>
        <div className="flex flex-row flex-wrap gap-4 sm:mt-10 mt-6">
          <Image
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
          <Image
            src={google}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
