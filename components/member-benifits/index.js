import React from "react";
import styles from "./memberbenifits.module.css";
function MemberBenifits({ title, showExtraData = true, data }) {

  return (
    <div className={styles.benifits_inner}>
      <div className={styles.title}>{title}</div>
      <div className={styles.card_wrapper}>
        {data.items.map((card) => {
          return (
            <div className={styles.card}>
              <img className={styles.image} src={card.image} alt="" />
              <div className={styles.card_text}>
                {showExtraData ? <>
                  <div className={styles.heading}>{card.heading}</div>
                  <div className={styles.subHeading}>{card.subHeading}</div>
                </> : null}

                <button className={styles.btn}>{card.btn}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MemberBenifits;
