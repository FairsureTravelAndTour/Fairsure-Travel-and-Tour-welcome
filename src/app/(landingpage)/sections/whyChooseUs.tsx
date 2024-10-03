"use client"
import React, { useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { MonetizationOn, SupportAgent, Explore } from '@mui/icons-material'; 
import styles from './WhyChooseUs.module.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  const features = [
    {
      title: "Affordable Pricing",
      description: "We offer the best prices for unforgettable experiences.",
      icon: <MonetizationOn fontSize="large" style={{ color: "#4caf50" }} />, // Pricing Icon
    },
    {
      title: "Experienced Guides",
      description: "Our guides are experts with years of experience in the field.",
      icon: <Explore fontSize="large" style={{ color: "#ff5722" }} />, // Explore Icon
    },
    {
      title: "24/7 Customer Support",
      description: "We're here to assist you at every step of your journey.",
      icon: <SupportAgent fontSize="large" style={{ color: "#03a9f4" }} />, // Support Icon
    },
  ];

  return (
    <Box className={styles.container}>
      {/* Why Choose Us Section */}
      <Typography variant="h4" className={styles.heading}>
        Why Choose Us?
      </Typography>
      <Grid container spacing={3} className={styles.gridContainer}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={styles.featureCard} data-aos="zoom-in">
              <CardContent className={styles.cardContent}>
                <Avatar className={styles.icon}>{feature.icon}</Avatar>
                <Typography variant="h6" className={styles.featureTitle}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" className={styles.featureDescription}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
