import styles from "./Banner.module.css";
import { Button } from "react-bootstrap";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className={`${styles.backButton} d-block d-lg-none`}>
        <p className="text-white h1">
          <FontAwesomeIcon icon={faArrowLeft} />
        </p>
      </div>
      <div className={`${styles.joinGroup} d-block d-lg-none`}>
        <Button variant="outline-light">Join Group</Button>
      </div>
    </div>
  );
}
