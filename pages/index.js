import Latest from "../components/letest";
import PrimaryNav from "../components/primary-nav";
import SecondaryNav from "../components/secondary-nav";
import styles from "../styles/Home.module.css";
import Offers from "../components/offers";
import HeroComponent from "../components/hero-component";
import Gap from "../components/gap";
import MemberBenifits from "../components/member-benifits";
import Footer from "../components/footer";
import BenifitCatagories from "../components/benifit-categories";

export default function Home() {
  let data = {
    id: 0,
    title: "CUSHIONING TO THE MAX",
    subTitle: "Coming 2.7",
    buttonText: "Notify Me",
    image: "/assets/images/mainWrapper/main_img.png",
  };

  let data2 = {
    id: 1,
    title: "BUILT TO BE DIFFERENT",
    subTitle:
      "More stability and better cushioning to unleash your explosive game",
    buttonText: "Shop",
    image: "/assets/images/mainWrapper/Screenshot25.png",
  };

  const memberBenifitsData = {
    items: [
      {
        id: 0,
        heading: "Member Product",
        subHeading: "Your Exclusive Access",
        btn: "Shop",
        image: "./assets/images/member-benifits/member1.jpg",
      },
      {
        id: 1,
        heading: "Nike By You",
        subHeading: "Your Customisation Service",
        btn: "Customise",
        image: "./assets/images/member-benifits/member2.png",
      },
      {
        id: 2,
        heading: "Member Rewards",
        subHeading: "How We Say Thank You",
        btn: "Celebrate",
        image: "./assets/images/member-benifits/member3.jpg",
      },
      {
        id: 3,
        heading: "Member Days",
        subHeading: "A Celebration Of You",
        btn: "Learn More",
        image: "./assets/images/member-benifits/member4.png",
      },
      {
        id: 4,
        heading: "Sport And Wellness Apps",
        subHeading: "Movement Where You Are",
        btn: "Move",
        image: "./assets/images/member-benifits/member5.jpg",
      },
      {
        id: 5,
        heading: "SNKRS",
        subHeading: "Your Ultimate Sneaker Community",
        btn: "Explore",
        image: "./assets/images/member-benifits/member6.jpg",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <SecondaryNav />
      <PrimaryNav />
      <Offers />
      <HeroComponent data={data} />
      <Gap height={40} />
      <Latest />
      <Gap height={100} />
      <HeroComponent data={data2} />
      <MemberBenifits title="Shop By Sport" showExtraData={false} data={memberBenifitsData} />
      <MemberBenifits title={"Member Benifits"} showExtraData={true} data={memberBenifitsData} />
      <BenifitCatagories />
      <Footer />
    </div>
  );
}
