import classes from "./index.module.css";

const SubNavItems = ({ data }) => {

  return (
    <>
      <div className={classes.dropdown_wrapper}>
        <div className={classes.dropdown_inner} style={{ display: "flex" }}>
          {data.map((head) => {
            return (
              <div key={head.id} className={classes.single_main_item}>
                <div style={{ fontWeight: "bold" }}>{head.name}</div>
                {head.subItems.map((subheads) => {
                  return (
                    <div className={classes.singleItem_wrapper}>
                      <div className={classes.single_item}>{subheads.name}</div>
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
