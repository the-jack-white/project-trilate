import { card } from "../../assets";
import styles, { layout } from "../styles/style";
import Button from "../Button/Button";
import Image from "next/image";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" />
          in a few easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          culpa quibusdam exercitationem cupiditate repellendus unde? Itaque
          consequatur, minus culpa ex animi debitis similique saepe, tempore
          dolorum magni velit provident fugiat!
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <Image src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
