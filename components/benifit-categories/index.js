import styles from "./benifit-categories.module.css";
const BenifitCatagories = () => {

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
    )
}


export default BenifitCatagories;