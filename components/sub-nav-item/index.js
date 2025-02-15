import classes from './index.module.css'
const SubNavItems = ({ items }) => {
    return (
        <div className={classes.subItemsWrapper}>
            {items.map((subItem, index) => (
                <span key={index}>{subItem}</span>
            ))}
        </div>
    )
}


export default SubNavItems;