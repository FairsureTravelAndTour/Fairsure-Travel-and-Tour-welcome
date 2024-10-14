import React from "react";
import styles from "./intro.module.css";
import { Button } from "@mui/material";

 const Introduction = () => {
  return (
    <div className={styles.indriduction__wrapper}>
      <div className={styles.indriduction__content}>
        <h1 className={styles.heading}>Welcome to Fairsure Travel and Tour</h1>

        <h2 className={styles.sub__heading}>Explore the World with Us</h2>
        <p className={styles.description}>
          Discover amazing destinations, immersive experiences, and
          unforgettable adventures. Whether you're planning a relaxing beach
          vacation or an exciting city tour, we’ve got the perfect package for
          you.
        </p>
        <Button variant="contained" className={styles.ctaButton}>
          Start Your Journey{" "}
        </Button>
      </div>
    </div>
  );
};
export default Introduction;