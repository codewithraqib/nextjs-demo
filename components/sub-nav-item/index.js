import { useState } from "react";
import classes from "./index.module.css";

const SubNavItems = () => {
  const [dropDownItems, setdropDownItems] = useState([
    {
      id: 0,
      title: "New & Featured",
      items: [
        {
          id: 0,
          name: "Featured",
          subItems: [
            { singleItem: "New arrivals" },
            { singleItem: "Nike 24.7" },
            { singleItem: "Valentine's Day Shop" },
            { singleItem: "SNKRS Launch Calendar" },
            { singleItem: "Member Exclusive" },
            { singleItem: "Customise with Nike By You" },
            { singleItem: "What's Trending" },
            { singleItem: "Jordan" },
          ],
        },
        {
          id: 1,
          name: "Shop Icons",
          subItems: [
            { singleItem: "Air Force 1" },
            { singleItem: "Air Max" },
            { singleItem: "Jordan" },
            { singleItem: "React" },
            { singleItem: "Blazer" },
            { singleItem: "Dunk" },
            { singleItem: "Kyrie" },
            { singleItem: "LeBron" },
            { singleItem: "Kobe" },
            { singleItem: "KD" },
            { singleItem: "PG" },
            { singleItem: "Giannis" },
            { singleItem: "Shop All Icons" },
          ],
        },
        {
          id: 2,
          name: "Shop by Sport",
          subItems: [
            { singleItem: "Running" },
            { singleItem: "Training & Gym" },
            { singleItem: "Basketball" },
            { singleItem: "Football" },
            { singleItem: "Soccer" },
            { singleItem: "Golf" },
            { singleItem: "Skateboarding" },
            { singleItem: "Tennis" },
            { singleItem: "Baseball" },
            { singleItem: "Yoga" },
            { singleItem: "Surf" },
            { singleItem: "Shop All Sports" },
          ],
        },
      ],
    },
    // {
    //   id: 1,
    //   title: "Men",
    //   items: [
    //     {
    //       id: 0,
    //       name: "Featured",
    //       subItems: [
    //         { singleItem: "New arrival" },
    //         { singleItem: "Bestsellers" },
    //         { singleItem: "Shop All sale" },
    //       ],
    //     },
    //     {
    //       id: 1,
    //       name: "Shoes",
    //       subItems: [
    //         { singleItem: "Air Max" },
    //         { singleItem: "Air Jordan" },
    //         { singleItem: "Nike" },
    //         { singleItem: "Adidas" },
    //         { singleItem: "Reebok" },
    //         { singleItem: "Puma" },
    //         { singleItem: "Vans" },
    //         { singleItem: "Skechers" },
    //         { singleItem: "Converse" },
    //         { singleItem: "Shop All Men's Shoes" },
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "Clothing",
    //       subItems: [
    //         { singleItem: "T-Shirts" },
    //         { singleItem: "Hoodies" },
    //         { singleItem: "Jackets" },
    //         { singleItem: "Pants" },
    //         { singleItem: "Shorts" },
    //         { singleItem: "Socks" },
    //       ],
    //     },
    //     {
    //       id: 3,
    //       name: "Shop by Sport",
    //       subItems: [
    //         { singleItem: "Running" },
    //         { singleItem: "Training & Gym" },
    //         { singleItem: "Basketball" },
    //         { singleItem: "Football" },
    //         { singleItem: "Soccer" },
    //         { singleItem: "Golf" },
    //         { singleItem: "Skateboarding" },
    //         { singleItem: "Tennis" },
    //         { singleItem: "Baseball" },
    //         { singleItem: "Yoga" },
    //         { singleItem: "Surf" },
    //         { singleItem: "Shop All Sports" },
    //       ],
    //     },
    //     {
    //       id: 4,
    //       name: "Accessories and equipment",
    //       subItems: [
    //         { singleItem: "Bags" },
    //         { singleItem: "Hats" },
    //         { singleItem: "Socks" },
    //         { singleItem: "Gloves" },
    //         { singleItem: "Watches" },
    //         { singleItem: "Fitness Equipment" },
    //       ],
    //     },
    //   ],
    // },
  ]);

  return (
    <>
      <div className={classes.dropdown_Wrapper}>
        <div className={classes.dropdown_Inner}>
          {dropDownItems.map((head) => {
            return (
              <div key={head.id} className={classes.title}>
                {head.items.map((subheads) => {
                  return (
                    <div className={classes.singleItem_wrapper}>
                      <div className={classes.subHeads}>{subheads.name}</div>
                      {subheads.subItems.map((singleItem) => {
                        return (
                          <div className={classes.single_item}>
                            {singleItem.singleItem}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SubNavItems;
