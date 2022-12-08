import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.imgContainer}>
      <img src="/Cover.png" className={styles.bannerImg} />
      <div className={styles.imgTextContainer}>
        <p className={styles.imgText}> Computer Engineer </p>
        <p className={styles.smallerText}>
          142,765 Computer Engineers follow this
        </p>
      </div>
    </div>
  );
}
