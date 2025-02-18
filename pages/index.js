import Mainwrapper from "../components/mainWrapper";
import PrimaryNav from "../components/primary-nav";
import SecondaryNav from "../components/secondary-nav";
import styles from "../styles/Home.module.css";
import Offers from "../components/offers";

export default function Home() {

  return (
    <div className={styles.container}>

      <SecondaryNav />
      <PrimaryNav />
      <Offers />
      <Mainwrapper />

    </div>
  );
}
