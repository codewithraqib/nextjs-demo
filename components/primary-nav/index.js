import { useState } from "react";
import classes from "./index.module.css";
import SubNavItems from "../sub-nav-item";

const PrimaryNav = () => {
  const [navItems, setNavItems] = useState([
    {
      id: 0,
      name: "New & Featured",
      items: [
        {
          id: 0,
          name: "Featured",
          subItems: [
            { id: 0, link: "/new-arrival", name: "New arrivals" },
            { id: 1, link: "/nike-24-7", name: "Nike 24.7" },
            {
              id: 2,
              link: "/valentines-day-shop",
              name: "Valentine's Day Shop",
            },
            {
              id: 3,
              link: "/snkrs-launch-calendar",
              name: "SNKRS Launch Calendar",
            },
            { id: 4, link: "/member-exclusive", name: "Member Exclusive" },
            {
              id: 5,
              link: "/customise-with-nike-by-you",
              name: "Customise with Nike By You",
            },
            { id: 6, link: "/whats-trending", name: "What's Trending" },
            { id: 7, link: "/jordan", name: "Jordan" },
          ],
        },
        {
          id: 1,
          name: "Shop Icons",
          subItems: [
            { id: 0, link: "/air-force-1", name: "Air Force 1" },
            { id: 1, link: "/air-max", name: "Air Max" },
            { id: 2, link: "/jordan", name: "Jordan" },
            { id: 3, link: "/react", name: "React" },
            { id: 4, link: "/blazer", name: "Blazer" },
            { id: 5, link: "/dunk", name: "Dunk" },
            { id: 6, link: "/kyrie", name: "Kyrie" },
            { id: 7, link: "/lebron", name: "LeBron" },
            { id: 8, link: "/kobe", name: "Kobe" },
            { id: 9, link: "/kd", name: "KD" },
            { id: 10, link: "/pg", name: "PG" },
            { id: 11, link: "/giannis", name: "Giannis" },
            { id: 12, link: "/shop-all-icons", name: "Shop All Icons" },
          ],
        },
        {
          id: 2,
          name: "Shop by Sport",
          subItems: [
            { id: 0, link: "/running", name: "Running" },
            { id: 1, link: "/training-gym", name: "Training & Gym" },
            { id: 2, link: "/basketball", name: "Basketball" },
            { id: 3, link: "/football", name: "Football" },
            { id: 4, link: "/soccer", name: "Soccer" },
            { id: 5, link: "/golf", name: "Golf" },
            { id: 6, link: "/skateboarding", name: "Skateboarding" },
            { id: 7, link: "/tennis", name: "Tennis" },
            { id: 8, link: "/baseball", name: "Baseball" },
            { id: 9, link: "/yoga", name: "Yoga" },
            { id: 10, link: "/surf", name: "Surf" },
            { id: 11, link: "/shop-all-sports", name: "Shop All Sports" },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "Men",

      items: [
        {
          id: 0,
          name: "Featured",
          subItems: [
            { id: 0, link: "/new-arrival", name: "New arrival" },
            { id: 1, link: "/bestsellers", name: "Bestsellers" },
            { id: 2, link: "/shop-all-sale", name: "Shop All sale" },
          ],
        },
        {
          id: 1,
          name: "Shoes",
          subItems: [
            { id: 0, link: "/air-max", name: "Air Max" },
            { id: 1, link: "/air-jordan", name: "Air Jordan" },
            { id: 2, link: "/nike", name: "Nike" },
            { id: 3, link: "/adidas", name: "Adidas" },
            { id: 4, link: "/reebok", name: "Reebok" },
            { id: 5, link: "/puma", name: "Puma" },
            { id: 6, link: "/vans", name: "Vans" },
            { id: 7, link: "/skechers", name: "Skechers" },
            { id: 8, link: "/converse", name: "Converse" },
            {
              id: 9,
              link: "/shop-all-mens-shoes",
              name: "Shop All Men's Shoes",
            },
          ],
        },
        {
          id: 2,
          name: "Clothing",
          subItems: [
            { id: 0, link: "/t-shirts", name: "T-Shirts" },
            { id: 1, link: "/hoodies", name: "Hoodies" },
            { id: 2, link: "/jackets", name: "Jackets" },
            { id: 3, link: "/pants", name: "Pants" },
            { id: 4, link: "/shorts", name: "Shorts" },
            { id: 5, link: "/socks", name: "Socks" },
          ],
        },
        {
          id: 3,
          name: "Shop by Sport",
          subItems: [
            { id: 0, link: "/running", name: "Running" },
            { id: 1, link: "/training-gym", name: "Training & Gym" },
            { id: 2, link: "/basketball", name: "Basketball" },
            { id: 3, link: "/football", name: "Football" },
            { id: 4, link: "/soccer", name: "Soccer" },
            { id: 5, link: "/golf", name: "Golf" },
            { id: 6, link: "/skateboarding", name: "Skateboarding" },
            { id: 7, link: "/tennis", name: "Tennis" },
            { id: 8, link: "/baseball", name: "Baseball" },
            { id: 9, link: "/yoga", name: "Yoga" },
            { id: 10, link: "/surf", name: "Surf" },
            { id: 11, link: "/shop-all-sports", name: "Shop All Sports" },
          ],
        },
        {
          id: 4,
          name: "Accessories and equipment",
          subItems: [
            { id: 0, link: "/bags", name: "Bags" },
            { id: 1, link: "/hats", name: "Hats" },
            { id: 2, link: "/socks", name: "Socks" },
            { id: 3, link: "/gloves", name: "Gloves" },
            { id: 4, link: "/watches", name: "Watches" },
            { id: 5, link: "/fitness-equipment", name: "Fitness Equipment" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Women",
      items: [
        {
          id: 0,
          name: "Featured",
          subItems: [
            { id: 0, link: "/new-arrival", name: "New arrival" },
            { id: 1, link: "/bestsellers", name: "Bestsellers" },
            { id: 2, link: "/shop-all-sale", name: "Shop All sale" },
          ],
        },
        {
          id: 1,
          name: "Shoes",
          subItems: [
            { id: 0, link: "/air-max", name: "Air Max" },
            { id: 1, link: "/air-jordan", name: "Air Jordan" },
            { id: 2, link: "/nike", name: "Nike" },
            { id: 3, link: "/adidas", name: "Adidas" },
            { id: 4, link: "/reebok", name: "Reebok" },
            { id: 5, link: "/puma", name: "Puma" },
            { id: 6, link: "/vans", name: "Vans" },
            { id: 7, link: "/skechers", name: "Skechers" },
            { id: 8, link: "/converse", name: "Converse" },
            {
              id: 9,
              link: "/shop-all-mens-shoes",
              name: "Shop All Men's Shoes",
            },
          ],
        },
        {
          id: 2,
          name: "Clothing",
          subItems: [
            { id: 0, link: "/t-shirts", name: "T-Shirts" },
            { id: 1, link: "/hoodies", name: "Hoodies" },
            { id: 2, link: "/jackets", name: "Jackets" },
            { id: 3, link: "/pants", name: "Pants" },
            { id: 4, link: "/shorts", name: "Shorts" },
            { id: 5, link: "/socks", name: "Socks" },
          ],
        },
        {
          id: 3,
          name: "Shop by Sport",
          subItems: [
            { id: 0, link: "/running", name: "Running" },
            { id: 1, link: "/training-gym", name: "Training & Gym" },
            { id: 2, link: "/basketball", name: "Basketball" },
            { id: 3, link: "/football", name: "Football" },
            { id: 4, link: "/soccer", name: "Soccer" },
            { id: 5, link: "/golf", name: "Golf" },
            { id: 6, link: "/skateboarding", name: "Skateboarding" },
            { id: 7, link: "/tennis", name: "Tennis" },
            { id: 8, link: "/baseball", name: "Baseball" },
            { id: 9, link: "/yoga", name: "Yoga" },
            { id: 10, link: "/surf", name: "Surf" },
            { id: 11, link: "/shop-all-sports", name: "Shop All Sports" },
          ],
        },
        {
          id: 4,
          name: "Accessories and equipment",
          subItems: [
            { id: 0, link: "/bags", name: "Bags" },
            { id: 1, link: "/hats", name: "Hats" },
            { id: 2, link: "/socks", name: "Socks" },
            { id: 3, link: "/gloves", name: "Gloves" },
            { id: 4, link: "/watches", name: "Watches" },
            { id: 5, link: "/fitness-equipment", name: "Fitness Equipment" },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Kids",
      items: [
        {
          id: 0,
          name: "Featured",
          subItems: [
            { id: 0, link: "/new-arrival", name: "New arrival" },
            { id: 1, link: "/bestsellers", name: "Bestsellers" },
            { id: 2, link: "/shop-all-sale", name: "Shop All sale" },
          ],
        },
        {
          id: 1,
          name: "Shoes",
          subItems: [
            { id: 0, link: "/air-max", name: "Air Max" },
            { id: 1, link: "/air-jordan", name: "Air Jordan" },
            { id: 2, link: "/nike", name: "Nike" },
            { id: 3, link: "/adidas", name: "Adidas" },
            { id: 4, link: "/reebok", name: "Reebok" },
            { id: 5, link: "/puma", name: "Puma" },
            { id: 6, link: "/vans", name: "Vans" },
            { id: 7, link: "/skechers", name: "Skechers" },
            { id: 8, link: "/converse", name: "Converse" },
            {
              id: 9,
              link: "/shop-all-mens-shoes",
              name: "Shop All Men's Shoes",
            },
          ],
        },
        {
          id: 2,
          name: "Clothing",
          subItems: [
            { id: 0, link: "/t-shirts", name: "T-Shirts" },
            { id: 1, link: "/hoodies", name: "Hoodies" },
            { id: 2, link: "/jackets", name: "Jackets" },
            { id: 3, link: "/pants", name: "Pants" },
            { id: 4, link: "/shorts", name: "Shorts" },
            { id: 5, link: "/socks", name: "Socks" },
          ],
        },
        {
          id: 3,
          name: "Kids by age",
          subItems: [
            { id: 0, link: "/older-kids", name: "older kids" },
            { id: 1, link: "/younger-kids", name: "Younger kids" },
            { id: 2, link: "/babies", name: "babies" },
            ,
          ],
        },
        {
          id: 4,
          name: "Accessories and equipment",
          subItems: [
            { id: 0, link: "/bags", name: "Bags" },
            { id: 1, link: "/hats", name: "Hats" },
            { id: 2, link: "/socks", name: "Socks" },
            { id: 3, link: "/gloves", name: "Gloves" },
            { id: 4, link: "/watches", name: "Watches" },
            { id: 5, link: "/fitness-equipment", name: "Fitness Equipment" },
          ],
        },
      ],
    },
    { id: 4, name: "Sale" },
    { id: 5, name: "SNKRS" },
  ]);

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.mainWrapperInner}>
        <div className={classes.logoWrapper}>
          <img
            className={classes.logo}
            src="/assets/icons/nike-logo.png"
            alt="logo"
          />
        </div>
        <div className={classes.navItemsWrapper}>
          {navItems.map((item) => (
            <div key={item.id} className={classes.navItem}>
              <span>{item.name}</span>
              {item.items && (
                <div className={classes.subNavItemsParent}>
                  <SubNavItems data={item.items} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={classes.secondaryItems}>
          <div className={classes.inputWrapper}>
            <img
              className={classes.searchIcon}
              src="/assets/icons/search.png"
              alt="search"
            />
            <input
              className={classes.myInput}
              type="text"
              placeholder="Search"
            />
          </div>
          <div className={classes.wishlist}>
            <img
              className={classes.icon}
              src="/assets/icons/heart.png"
              alt="search"
            />
          </div>
          <div className={classes.bagIcon}>
            <img
              className={classes.icon}
              src="/assets/icons/bag.png"
              alt="bag"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryNav;
