import styles from "./page.module.css";
import Button from "@/Components/Button/Button";
import Channels from "./_components/Channels/Channels";

export const metadata = {
  title: "Home Page",
  description: "Home description",
};


export default function Home() {
  return (
    <>

      {/* Custom */}
      <section className={styles.Home}>
        <div className={styles.HomeContent}>
          <div>
            <h6>Welcome To Amazon Fire TV</h6>
            <h5>
              Watch the latest movies and award winning TV shows
            </h5>
            <Button
              LinkTo=""
              LinkText="Explore Now"
            />
          </div>
        </div>
      </section>

      {/* For Channels */}
      <Channels />

    </>
  );
}
