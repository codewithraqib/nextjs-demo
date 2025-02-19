import React from "react";
import styles from "./latest.module.css";

function Latest() {
  const latest = {
    id: 0,
    title: "The Latest",
    subItems: [
      {
        id: 0,
        name: "Lifestyle Running V2K",
        image: "/assets/images/latest/image1.jpeg",
      },
      {
        id: 1,
        name: "Nike ACG",
        image: "/assets/images/latest/image2.jpeg",
      },
      {
        id: 2,
        name: "Vomero 5",
        image: "/assets/images/latest/image3.jpeg",
      },
    ],
  };

  return (
    <div className={styles.latest_inner}>
      <div className={styles.latest_title}> {latest.title}</div>
      <div className={styles.latest_item_container}>
        {latest.subItems.map((subItem) => {
          return (
            <div className={styles.latest_item}>
              <div className={styles.latest_image}>
                <img className={styles.image} src={subItem.image} alt="" />
              </div>
              <span className={styles.item_name}>{subItem.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Latest;
