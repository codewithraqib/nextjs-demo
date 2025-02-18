import PrimaryNav from "../components/primary-nav";
import SecondaryNav from "../components/secondary-nav";
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <div className={styles.container}>

      <SecondaryNav />
      <PrimaryNav />
      <PrimaryNav />
      <PrimaryNav />
      <PrimaryNav />
      <PrimaryNav />

    </div>
  );
}
