
import PrimaryNav from "../components/primary-nav";
import SecondaryNav from "../components/secondary-nav";
import styles from "../styles/Home.module.css";
import Offers from "../components/offers";
import HeroComponent from "../components/hero-component";

export default function Home() {


  let data = {
    id: 0,
    title: "CUSHIONING TO THE MAX",
    subTitle: "Coming 2.7",
    buttonText: "Notify Me",
    image: "/assets/images/mainWrapper/main_img.png"
  }

  let data2 = {
    id: 1,
    title: "BUILT TO BE DIFFERENT",
    subTitle: "More stability and better cushioning to unleash your explosive game",
    buttonText: "Shop",
    image: "/assets/images/mainWrapper/Screenshot25.png"
  }

  return (
    <div className={styles.container}>

      <SecondaryNav />
      <PrimaryNav />
      <Offers />
      <HeroComponent data={data} />
      <HeroComponent data={data2} />

    </div>
  );
}
