import styles from "./hotel-item.module.css";
import SimpleImageSlider from "react-simple-image-slider";

const HotelItem = ({ hotel, addToFav }) => {
  return (
    <div className={styles.hotel_item_wrapper}>
      <div className={styles.img_wrapper}>
        {hotel.images ? (
          <SimpleImageSlider
            width={336}
            height={260}
            images={hotel.images}
            showBullets={true}
            showNavs={false}
            loop={true}
            autoPlay={true}
            autoPlayDelay={1000}
          />
        ) : (
          <img src="/assets/images/hotel1.avif" alt="hotel1" />
        )}

        <div className={styles.img_overlay}>
          {hotel?.guest_fav ? (
            <span className={styles.guest_fav}>Guest Favourite</span>
          ) : (
            <span></span>
          )}
          {hotel?.can_be_fav ? (
            <img
              onClick={() => addToFav(hotel.id)}
              src={
                hotel?.fav
                  ? "/assets/images/heart-filled.png"
                  : "/assets/images/heart.png"
              }
            />
          ) : null}
        </div>
      </div>
      <div className={styles.details_wrapper}>
        <div className={styles.hotel_title}>
          <span>{hotel?.name}</span>
          {hotel?.rating && <span>{hotel?.rating}</span>}
        </div>
        <div className={styles.hotel_distance}>{hotel?.distance}</div>
        <div className={styles.hotel_date}>{hotel?.date}</div>
        <div className={styles.hotel_rate}>
          <span className="bold">{hotel?.rate}</span> <span>night</span>
        </div>
      </div>
    </div>
  );
};

export default HotelItem;
