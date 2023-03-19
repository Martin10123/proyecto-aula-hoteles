import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { listRooms } from "../helpers/dataRooms";

import styles from "./main.module.css";

export const MainScreen = () => {
  return (
    <main className={styles.main__container}>
      <div className={styles.main__content}>
        <DropdownMenu />

        <div className={styles.main__search_room}>
          <div className={styles.main__input_search}>
            <input type="text" placeholder="Buscar..." />
            <AiOutlineSearch />
          </div>

          <div className={styles.main__list_rooms}>
            {listRooms.map((room) => (
              <div key={room.id} className={styles.main__item_room}>
                <IoIosArrowForward />
                <figure className={styles.main__img_room}>
                  <img width="100%" src={room.img} alt={room.name} />
                </figure>
                <p>{room.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
