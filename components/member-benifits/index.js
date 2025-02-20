import React from "react";
import styles from "./memberbenifits.module.css";
function MemberBenifits() {
  const memberBenifitsData = {
    items: [
      {
        id: 0,
        heading: "Member Product",
        subHeading: "Your Exclusive Access",
        btn: "Shop",
        image: "./assets/images/member-benifits/member1.jpg",
      },
      {
        id: 1,
        heading: "Nike By You",
        subHeading: "Your Customisation Service",
        btn: "Customise",
        image: "./assets/images/member-benifits/member2.png",
      },
      {
        id: 2,
        heading: "Member Rewards",
        subHeading: "How We Say Thank You",
        btn: "Celebrate",
        image: "./assets/images/member-benifits/member3.jpg",
      },
      {
        id: 3,
        heading: "Member Days",
        subHeading: "A Celebration Of You",
        btn: "Learn More",
        image: "./assets/images/member-benifits/member4.png",
      },
      {
        id: 4,
        heading: "Sport And Wellness Apps",
        subHeading: "Movement Where You Are",
        btn: "Move",
        image: "./assets/images/member-benifits/member5.jpg",
      },
      {
        id: 5,
        heading: "SNKRS",
        subHeading: "Your Ultimate Sneaker Community",
        btn: "Explore",
        image: "./assets/images/member-benifits/member6.jpg",
      },
    ],
  };
  const benifitsCatagories = {
    catagory: [
      {
        id: 0,
        heading: "Icons",
        subHeading: [
          "Air Force 1",
          "Air Max 90",
          "All Air Max",
          "Air Max 95",
          "Air Max 97",
          "Air Max 270",
          "Vapormax",
          "Huarache",
          "Air Max 720",
        ],
      },
      {
        id: 1,
        heading: "Shoes",
        subHeading: [
          "All Shoes",
          "Custom Shoes",
          "Running Shoes",
          "Jordan Shoes",
          "Basketball Shoes",
          "Football Shoes",
          "Gym & Training Shoes",
          "Lifestyle Shoes",
        ],
      },
      {
        id: 2,
        heading: "Clothing",
        subHeading: [
          "All Clothing",
          "Modest Wear",
          "Hoodies & Pullovers",
          "Shirts & Tops",
          " Jackets",
          "Compression & Nike Pro",
          "Trousers & Leggings",
          "Shorts",
        ],
      },
      {
        id: 3,
        heading: "Kids'",
        subHeading: [
          "Infant & Toddler Shoes",
          "Kids' Shoes",
          " Kids' Jordan Shoes",
          " Kids' Basketball Shoes",
          "Kids' Running Shoes",
          "Kids' Clothing",
          " Kids' Backpacks",
          "Kids' Socks",
        ],
      },
    ],
  };

  return (
    <>
      <div className={styles.benifits_inner}>
        <div className={styles.title}>Member Benifits</div>
        <div className={styles.card_wrapper}>
          {memberBenifitsData.items.map((card) => {
            return (
              <div className={styles.card}>
                <img className={styles.image} src={card.image} alt="" />
                <div className={styles.card_text}>
                  <div className={styles.heading}>{card.heading}</div>
                  <div className={styles.subHeading}>{card.subHeading}</div>
                  <button className={styles.btn}>{card.btn}</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.catagories_wrapper}>
          {benifitsCatagories.catagory.map((catagory) => {
            return (
              <div className={styles.catagory}>
                <div className={styles.heading}>{catagory.heading}</div>
                {catagory.subHeading.map((subHeading, index) => {
                  if (index < 4) {
                    return (
                      <div className={styles.subheading}>{subHeading}</div>
                    );
                  } else {
                    return (
                      <div className={styles.subheading_full}>{subHeading}</div>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
        <div className={styles.hr_line}></div>
      </div>
    </>
  );
}
export default MemberBenifits;
