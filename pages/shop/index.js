import { useState } from "react";
import Offers from "../../components/offers";
import PrimaryNav from "../../components/primary-nav"
import SecondaryNav from "../../components/secondary-nav"
import TopFilterController from "../../components/shop-page/top-filter-controller";
import styles from "./shop.module.css"

const ShopPage = () => {

    const filters = [
        { id: 1, name: 'T-Shirts' },
        { id: 2, name: 'Trousers' },
        { id: 3, name: 'Shoes' },
        { id: 4, name: 'Accessories' }
    ];

    const [selectedFilter, setSelectedFilter] = useState(filters[0].id);
    const [showFilters, setShowFilters] = useState(true);

    const handleFilterChange = (filterId) => {
        setSelectedFilter(filterId);
    };

    const products = [
        {
            id: 1,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/air-max-270-mens-shoe-KkLcGR.png',
            title: 'Nike Air Max 270',
            description: 'The Nike Air Max 270 delivers visible cushioning under every step.',
            color: 'Black/White',
            mrp: '$150',
            mainCategory: 'Men',
            priceRange: '$150 - $200'
        },
        {
            id: 2,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/air-force-1-07-mens-shoe-KkLcGR.png',
            title: 'Nike Air Force 1',
            description: 'The Nike Air Force 1 features crisp leather edges for a cleaner, more streamlined look.',
            color: 'White',
            mrp: '$90',
            mainCategory: 'Men',
            priceRange: '$50 - $100'
        },
        {
            id: 3,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/blazer-mid-77-vintage-mens-shoe-KkLcGR.png',
            title: 'Nike Blazer Mid',
            description: 'The Nike Blazer Mid features a retro mid-top design with modern comfort.',
            color: 'Sail/Black',
            mrp: '$100',
            mainCategory: 'Men',
            priceRange: '$100 - $150'
        },
        {
            id: 4,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/sportswear-mens-t-shirt-KkLcGR.png',
            title: 'Nike Sportswear T-Shirt',
            description: 'The Nike Sportswear T-Shirt is made with soft cotton fabric for all-day comfort.',
            color: 'Red',
            mrp: '$25',
            mainCategory: 'Men',
            priceRange: '$25 - $50'
        },
        {
            id: 5,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/dri-fit-mens-t-shirt-KkLcGR.png',
            title: 'Nike Dri-FIT T-Shirt',
            description: 'The Nike Dri-FIT T-Shirt helps keep you dry and comfortable during workouts.',
            color: 'Blue',
            mrp: '$30',
            mainCategory: 'Men',
            priceRange: '$30 - $50'
        },
        {
            id: 6,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/sportswear-mens-pants-KkLcGR.png',
            title: 'Nike Sportswear Pants',
            description: 'The Nike Sportswear Pants are made with soft fleece fabric for warmth and comfort.',
            color: 'Black',
            mrp: '$60',
            mainCategory: 'Boys',
            priceRange: '$60 - $100'
        },
        {
            id: 7,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/dri-fit-mens-pants-KkLcGR.png',
            title: 'Nike Dri-FIT Pants',
            description: 'The Nike Dri-FIT Pants are designed to keep you dry and comfortable during workouts.',
            color: 'Gray',
            mrp: '$70',
            mainCategory: 'Girls',
            priceRange: '$70 - $100'
        },
        {
            id: 8,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/heritage-backpack-KkLcGR.png',
            title: 'Nike Heritage Backpack',
            description: 'The Nike Heritage Backpack features a durable design with multiple compartments.',
            color: 'Black',
            mrp: '$40',
            mainCategory: 'Unisex',
            priceRange: '$40 - $80'
        },
        {
            id: 9,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/pro-cap-KkLcGR.png',
            title: 'Nike Pro Cap',
            description: 'The Nike Pro Cap features a classic design with an adjustable strap for a custom fit.',
            color: 'White',
            mrp: '$25',
            mainCategory: 'Unisex',
            priceRange: '$25 - $50'
        },
        {
            id: 10,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/air-zoom-pegasus-mens-shoe-KkLcGR.png',
            title: 'Nike Air Zoom Pegasus',
            description: 'The Nike Air Zoom Pegasus provides responsive cushioning for a smooth ride.',
            color: 'Blue/White',
            mrp: '$120',
            mainCategory: 'Men',
            priceRange: '$120 - $150'
        },
        {
            id: 11,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/react-infinity-run-mens-shoe-KkLcGR.png',
            title: 'Nike React Infinity Run',
            description: 'The Nike React Infinity Run offers a soft, responsive ride with a breathable upper.',
            color: 'Black/Red',
            mrp: '$160',
            mainCategory: 'Men',
            priceRange: '$160 - $200'
        },
        {
            id: 12,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/metcon-6-mens-shoe-KkLcGR.png',
            title: 'Nike Metcon 6',
            description: 'The Nike Metcon 6 provides stability and durability for high-intensity workouts.',
            color: 'Gray/Black',
            mrp: '$130',
            mainCategory: 'Men',
            priceRange: '$130 - $160'
        },
        {
            id: 13,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/legend-t-shirt-KkLcGR.png',
            title: 'Nike Legend T-Shirt',
            description: 'The Nike Legend T-Shirt is made with sweat-wicking fabric to help keep you dry.',
            color: 'Green',
            mrp: '$35',
            mainCategory: 'Men',
            priceRange: '$35 - $60'
        },
        {
            id: 14,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/icon-clash-t-shirt-KkLcGR.png',
            title: 'Nike Icon Clash T-Shirt',
            description: 'The Nike Icon Clash T-Shirt features a bold graphic design for a standout look.',
            color: 'Pink',
            mrp: '$40',
            mainCategory: 'Men',
            priceRange: '$40 - $60'
        },
        {
            id: 15,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/flex-pants-KkLcGR.png',
            title: 'Nike Flex Pants',
            description: 'The Nike Flex Pants are designed to move with you for a natural range of motion.',
            color: 'Navy',
                    mrp: '$80',
            mainCategory: 'Men',
            priceRange: '$80 - $100'
        },
        {
            id: 16,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/therma-pants-KkLcGR.png',
            title: 'Nike Therma Pants',
            description: 'The Nike Therma Pants provide warmth and comfort during cold-weather workouts.',
            color: 'Olive',
            mrp: '$90',
            mainCategory: 'Men',
            priceRange: '$90 - $120'
        },
        {
            id: 17,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/elite-socks-KkLcGR.png',
            title: 'Nike Elite Socks',
            description: 'The Nike Elite Socks offer targeted cushioning and support for high-performance comfort.',
            color: 'White/Black',
            mrp: '$15',
            mainCategory: 'Men',
            priceRange: '$15 - $30'
        },
        {
            id: 18,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/gym-sack-KkLcGR.png',
            title: 'Nike Gym Sack',
            description: 'The Nike Gym Sack features a lightweight design with a drawstring closure for easy access.',
            color: 'Red',
            mrp: '$20',
            mainCategory: 'Men',
            priceRange: '$20 - $40'
        },
        {
            id: 19,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/air-vapormax-mens-shoe-KkLcGR.png',
            title: 'Nike Air VaporMax',
            description: 'The Nike Air VaporMax provides lightweight, bouncy cushioning for a comfortable ride.',
            color: 'Black/Blue',
            mrp: '$190',
            mainCategory: 'Men',
            priceRange: '$190 - $220'
        },
        {
            id: 20,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/free-rn-mens-shoe-KkLcGR.png',
            title: 'Nike Free RN',
            description: 'The Nike Free RN offers a natural feel with a flexible sole for a barefoot-like experience.',
            color: 'Gray/White',
            mrp: '$110',
            mainCategory: 'Men',
            priceRange: '$110 - $140'
        },
        {
            id: 21,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/joyride-run-mens-shoe-KkLcGR.png',
            title: 'Nike Joyride Run',
            description: 'The Nike Joyride Run features innovative cushioning for a personalized fit and feel.',
            color: 'White/Red',
            mrp: '$180',
            mainCategory: 'Men',
            priceRange: '$180 - $210'
        },
        {
            id: 22,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/air-t-shirt-KkLcGR.png',
            title: 'Nike Air T-Shirt',
            description: 'The Nike Air T-Shirt features a classic design with a bold Nike Air logo.',
            color: 'Black',
            mrp: '$30',
            mainCategory: 'Men',
            priceRange: '$30 - $50'
        },
        {
            id: 23,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/swoosh-t-shirt-KkLcGR.png',
            title: 'Nike Swoosh T-Shirt',
            description: 'The Nike Swoosh T-Shirt is made with soft cotton fabric for all-day comfort.',
            color: 'White',
            mrp: '$25',
            mainCategory: 'Men',
            priceRange: '$25 - $50'
        },
        {
            id: 24,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/tech-fleece-pants-KkLcGR.png',
            title: 'Nike Tech Fleece Pants',
            description: 'The Nike Tech Fleece Pants provide lightweight warmth and a modern look.',
            color: 'Gray',
            mrp: '$100',
            mainCategory: 'Boys',
            priceRange: '$100 - $150'
        },
        {
            id: 25,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/woven-pants-KkLcGR.png',
            title: 'Nike Woven Pants',
            description: 'The Nike Woven Pants offer a relaxed fit with a durable, water-repellent finish.',
            color: 'Black',
            mrp: '$75',
            mainCategory: 'Boys',
            priceRange: '$75 - $100'
        },
        {
            id: 26,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/running-gloves-KkLcGR.png',
            title: 'Nike Running Gloves',
            description: 'The Nike Running Gloves provide warmth and comfort during cold-weather runs.',
            color: 'Black',
            mrp: '$30',
            mainCategory: 'Women',
            priceRange: '$30 - $50'
        },
        {
            id: 27,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/headband-KkLcGR.png',
            title: 'Nike Headband',
            description: 'The Nike Headband helps keep sweat out of your eyes during intense workouts.',
            color: 'White',
            mrp: '$10',
            mainCategory: 'Women',
            priceRange: '$10 - $30'
        },
        {
            id: 28,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/air-max-90-mens-shoe-KkLcGR.png',
            title: 'Nike Air Max 90',
            description: 'The Nike Air Max 90 features a classic design with modern comfort and cushioning.',
            color: 'White/Black',
            mrp: '$140',
            mainCategory: 'Women',
            priceRange: '$140 - $170'
        },
        {
            id: 29,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/air-huarache-mens-shoe-KkLcGR.png',
            title: 'Nike Air Huarache',
            description: 'The Nike Air Huarache offers a snug, supportive fit with a comfortable ride.',
            color: 'Black/White',
            mrp: '$120',
            mainCategory: 'Women',
            priceRange: '$120 - $150'
        },
        {
            id: 30,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6c1e1d8e-7b8a-4c1e-8b1e-6b1e1d8e7b8a/air-presto-mens-shoe-KkLcGR.png',
            title: 'Nike Air Presto',
            description: 'The Nike Air Presto provides a sock-like fit with lightweight cushioning.',
            color: 'Blue/White',
            mrp: '$130',
            mainCategory: 'Women',
            priceRange: '$130 - $160'
        },
    ];


    const [filteredProducts, setFilteredProducts] = useState(products)



    const [filterDataRaw, setFilterDataRaw] = useState([
        {label: "Gender", selected: false, subItems : [
            {id: 0, name: 'Men', selected: false},
            {id: 1, name: 'Women', selected: false},
            {id: 2, name: 'Unisex', selected: false},
        ],},
        {label: "Kids", selected: false, subItems : [
            {id: 0, name: 'Boys', selected: false},
            {id: 1, name: 'Girls', selected: false},
        ],},
        {label: "Shop by Price", selected: false, subItems : [
            {id: 0, name: 'Under $50', selected: false},
            {id: 1, name: '$50 - $100', selected: false},
            {id: 2, name: '$100 - $150', selected: false},
            {id: 3, name: '$150 - $200', selected: false},
        ],},
    ])




    const handleSubItemChange = (filterLabel, subItemId) => {

        const updatedFilterData = filterDataRaw.map((filter) => {
            if (filter.label === filterLabel) {
                let updatedSubItems = filter?.subItems?.map((subItem) => {
                    if (subItem.id === subItemId) {
                        return { ...subItem, selected: !subItem.selected }
                    }
                    return subItem
                })

                return { ...filter, subItems: updatedSubItems }
                
            }
            return filter
        })

        setFilterDataRaw(updatedFilterData)


        //finding which subItems are selected
        let selectedFilters = updatedFilterData.map((filter) => {
            let myFilters =  filter.subItems.filter((subItem) => subItem.selected == true)
            console.log(myFilters)
            return myFilters
        })

        console.log(selectedFilters)


        //filtering products based on selected filters
        // if(selectedFilter){
        //     const filteredProducts = products.filter((product) => product.mainCategory === selectedFilter)
        //     setFilteredProducts(filteredProducts)
        // }
        
    }
    





    return (
        <div>
            <div className={styles.container}>
                <SecondaryNav />
                <PrimaryNav />
                <Offers />
                <TopFilterController setShowFilters={() => setShowFilters(!showFilters)} />
                <div className={[styles.shopContainer]} style={showFilters ? { gridTemplateColumns: '250px auto' } : { gridTemplateColumns: 'auto' }}>
                   {showFilters ?  <div className={styles.filterSection}>
                        <div className={styles.filterInner}>
                            <h2>Filters</h2>
                            <ul>
                                {filters.map((filter) => (
                                    <li key={filter.id} onClick={() => handleFilterChange(filter.id)} className={selectedFilter === filter.id ? styles.active : ''}>
                                        {filter.name}
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.mainFilters}>
                                {filterDataRaw.map((filter) => (
                                    <div key={filter.label} className={styles.filterItem}>
                                        <span>{filter.label}</span>
                                        <div className={styles.subFilters}>
                                            {filter.subItems.map((subItem) => (
                                                <div key={subItem.id} className={styles.subItem}>
                                                    <input type="checkbox" checked={subItem.selected} onChange={() => handleSubItemChange(filter.label, subItem.id)} />
                                                    <span>{subItem.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>



                        </div>
                    </div> : <div></div>}
                    <div className={styles.productSection}>
                        {filteredProducts.map((product) => (
                            <div key={product.id} className={styles.productCard}>
                                <img className={styles.image} src={product.image} alt={product.title} />
                                <div className={styles.productDetails}>
                                    <span className={styles.title}>{product.title}</span>
                                    <span className={styles.productSection}>{product.description}</span>
                                    <span className={styles.color}>Color: {product.color}</span>
                                    <span className={styles.price}>MRP: {product.mrp}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ShopPage;