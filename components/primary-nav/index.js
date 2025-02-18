import { useState } from "react";
import classes from "./index.module.css";
import SubNavItems from "../sub-nav-item";

const PrimaryNav = () => {
  const [navItems, setNavItems] = useState([
    {
      id: 0,
      name: "New & Featured",
      alias: "newAndFeatured",

      //   subItems: [
      //     "New Releases",
      //     "Best Sellers",
      //     "Best of Air Max Shoes",
      //     "Fall Essentials",
      //     "Bags & Backpacks",
      //     "Sale",
      //   ],
    },
    { id: 1, name: "Men", alias: "men" },
    {
      id: 2,
      name: "Women",
      //   subItems: [
      //     "New Releases",
      //     "Best Sellers",
      //     "Best of Air Max Shoes",
      //     "Fall Essentials",
      //     "Bags & Backpacks",
      //     "Sale",
      //   ],
    },
    { id: 3, name: "Kids" },
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
              {/* {item.subItems && ( */}
              <div className={classes.subNavItemsParent}>
                <SubNavItems />
              </div>
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
