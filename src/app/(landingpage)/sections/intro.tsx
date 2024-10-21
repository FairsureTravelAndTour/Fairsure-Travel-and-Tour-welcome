import React from "react";
import styles from "./intro.module.css";
import { Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

const Introduction = () => {
  return (
    <>
      <Head>
        <title>Fairsure Travel and Tour | Explore the World with Us</title>
        <meta
          name="description"
          content="Discover immersive travel packages and unforgettable adventures. Plan your dream vacation with Fairsure Travel."
        />
        <meta
          name="keywords"
          content="travel, tours, vacation, travel agency, beach holidays, city tours, group travel"
        />
        <meta property="og:title" content="Explore the World with Fairsure Travel" />
        <meta
          property="og:description"
          content="Book exclusive travel packages with Fairsure Travel and Tour. Discover destinations with us today!"
        />
        <meta property="og:image" content="/static/images/landing-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Head>

      <div className={styles.introWrapper}>
        <div className={styles.introContent}>
          <h1 className={styles.heading}>Welcome to Fairsure Travel and Tour</h1>
          <h2 className={styles.subHeading}>Explore the World with Us</h2>
          <p className={styles.description}>
            Uncover amazing destinations, unique experiences, and unforgettable adventures.
            Whether you’re seeking relaxation or exploration, we have the perfect package.
          </p>

          <Button
            variant="contained"
            className={styles.ctaButton}
            component={Link}
            href="/TourAndPackages"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </>
  );
};

export default Introduction;
