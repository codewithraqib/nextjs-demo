import styles from './top-filter-controller.module.css';
const TopFilterController = ({setShowFilters}) => {

    return (
        <div className={styles.filtersHeading}>
            <span className={styles.headingLeft}>New & Upcoming Drops(245)</span>

            <div className={styles.controlsRight}>
                <div className={styles.filterItem} onClick={setShowFilters}>
                    <span>Hide Filters</span> <img className={styles.filterIcon} src="/assets/icons/bag.png" alt="arrow" />
                </div>
                <div className={styles.filterItem}>
                    <span>Sort by</span> <img className={styles.filterIcon} src="/assets/icons/heart.png" alt="arrow" />
                </div>
            </div>
        </div>
    )
}


export default TopFilterController;