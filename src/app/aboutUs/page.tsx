"use client";
import {
  Container,
  Typography,
  Grid,
  Box,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import styles from "./aboutUs.module.css";
import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";
import vision from "../../../public/vision.webp";
import mission from "../../../public/mission.avif";

const About = () => {
  const values = [
    {
      title: "Customer Satisfaction",
      description:
        "We prioritize the needs of our clients by delivering timely and reliable services that exceed expectations.",
    },
    {
      title: "Professionalism and Expertise",
      description:
        "With a team of seasoned travel professionals, we provide expert advice and guidance to help clients make informed decisions.",
    },
    {
      title: "Innovation and Technology",
      description:
        "We leverage modern technology to offer real-time access to the best fares and reservations worldwide, ensuring convenience at every step.",
    },
    {
      title: "Integrity and Transparency",
      description:
        "We uphold honesty and transparency in all interactions, ensuring that clients are fully informed about pricing, policies, and terms.",
    },
    {
      title: "Excellence and Quality",
      description:
        "We maintain high standards across all our services, ensuring each traveler enjoys an experience tailored to their needs.",
    },
    {
      title: "Collaborative Partnerships",
      description:
        "Through strong collaborations with global suppliers and service providers, we guarantee the best prices and services.",
    },
  ];
  const members = [
    {
      title: "Mr Johnson",
      role: "MD",
    },
    {
      title: "Mr Samson",
      role: "Legal",
    },
    {
      title: "Mrs Ada",
      role: "Consultant",
    },
    ,
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div className={styles.container}>
      <Typography variant="h1" className={styles.heading}>
        About Fairsure Travel and Tour
      </Typography>

      <Container maxWidth="lg">
        <section className={styles.storySection}>
          <Typography variant="h4" gutterBottom>
            Our Story
          </Typography>
          <Typography marginBottom={2}>
            Founded in 2012 and registered with the Corporate Affairs Commission
            (CAC) under RC 1032195, FAIRSURE Travels and Tours began its journey
            to simplify travel planning for individuals and businesses. Managed
            by travel professionals with over 15 years of industry experience,
            the company was established to deliver efficient and value-driven
            travel services.
          </Typography>
          <Typography marginBottom={2}>
            FAIRSURE is dedicated to making every trip a seamless experience by
            offering everything from flight reservations to hotel accommodations
            and visa assistance. With a commitment to innovation, the company
            integrates modern communication technology, enabling clients to
            access the best fares, book hotels, and enjoy comprehensive travel
            packages, all at their convenience.
          </Typography>
          <Typography marginBottom={2}>
            Through partnerships with local and international suppliers,
            FAIRSURE delivers high-quality services at competitive prices.
            Whether it’s a personal holiday or corporate travel, FAIRSURE
            ensures that every client enjoys a journey tailored to their needs.
          </Typography>
        </section>
        <section className={styles.storySection}>
          <Typography variant="h4" gutterBottom>
            Our Value
          </Typography>
          <div className={styles.cardwrapper}>
            {values.map((value, index) => (
              <Card className={styles.card} key={index}>
                <CardContent>
                  <Typography variant="h5" className={styles.cardTitle}>
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    className={styles.cardDescription}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className={styles.teamSection}>
          <Typography variant="h4" gutterBottom>
            Meet the Team
          </Typography>
          <Grid container spacing={4}>
            {members.map((member, index) => (
              <Grid item xs={6} sm={4} key={index}>
                <Box textAlign="center">
                  <Avatar
                    src={`/images/team${member}.jpg`}
                    alt={`Team Member ${member}`}
                    className={styles.avatar}
                    data-aos="zoom-in"
                  />
                  <Typography variant="h6">{member?.title} </Typography>
                  <Typography variant="body2"> {member?.role}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </section>

        <section className={styles.valuesSection}>
          <Typography variant="h4" gutterBottom>
            Our Vision
          </Typography>
          <div className={styles.valueContent}>
            <Typography sx={{ flex: 1 }}>
              Our vision is to become a recognized leader in the travel industry
              by offering innovative travel products and exceptional value-added
              services. We aim to redefine travel management by providing
              seamless, end-to-end services that exceed client expectations,
              making every journey a memorable one.
            </Typography>
            <div style={{ marginLeft: "20px" }}>
              <Image
                src={vision}
                alt="vision"
              
                loading="lazy"
                className={styles.valueimg}

              />
            </div>
          </div>
        </section>
        <section className={styles.valuesSection}>
          <Typography variant="h4" gutterBottom>
          Our Mission
          </Typography>
          <div className={styles.valueContent}>
          <div style={{ marginRight: "20px" }}>
              <Image
              className={styles.valueimg}
                 src={mission}
                alt="mission"
                
                loading="lazy"
              />
            </div>
          <Typography sx={{ flex: 1 }}>
              Our mission at FAIRSURE Travels and Tours is to manage all travel
              needs efficiently and provide seamless travel experiences to
              individuals and businesses. We strive to offer high-quality,
              personalized services, ensuring travelers enjoy convenience,
              comfort, and value throughout their journey.
            </Typography>
           
          </div>
        </section>

      </Container>
    </div>
  );
};

export default About;
