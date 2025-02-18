import React from "react";
import { useState } from "react";
import styles from "./latest.module.css";

function Latest() {
  const latest = [
    {
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
    },
  ];
  return (
    <>
      <div className={styles.latest_wrapper}>
        <div className={styles.latest_inner}>
          {latest.map((item) => {
            return (
              <>
                <div className={styles.latest_title}> {item.title}</div>
                <div className={styles.latest_item_container} key={item.id}>
                  {item.subItems.map((subItem) => {
                    return (
                      <div className={styles.latest_item}>
                        <div className={styles.latest_image}>
                          <img src={subItem.image} alt="" />
                        </div>
                        <span className={styles.item_name}>{subItem.name}</span>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Latest;
