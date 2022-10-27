import Image from "next/image";
import { clients } from "../../constants";
import styles from "../styles/style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index) => (
          <div
            key={client.id}
            className={`${styles.flexCenter} ${
              index === clients.length - 1 ? "mr-0" : "mr-3"
            } flex-1 min-w-[100px]`}
            // className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[100px]`}
          >
            <Image
              src={client.logo}
              alt="client"
              className="xs:w-[192px] w-[100px] object-contain"
              width="150px"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
