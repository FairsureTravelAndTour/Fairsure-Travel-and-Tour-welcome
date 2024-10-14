'use client'
import React, { useEffect } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import styles from './AboutUs.module.css'; 
import paris from '../../../../public/paris.webp';
import safari from '../../../../public/sahara.avif';
import beach from '../../../../public/beach.webp';
import tokyo from '../../../../public/tokyo.avif';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutUsAndTours() {
  const tours = [
    {
      title: "Paris Getaway",
      description: "Discover the beauty of Paris with guided tours, fine dining, and luxury stays.",
      image: paris.src, 
    },
    {
      title: "Safari Adventure",
      description: "Experience the African wild on a thrilling safari tour.",
      image: safari.src, 
    },
    {
      title: "Beach Paradise",
      description: "Relax and unwind on the serene beaches of the Maldives.",
      image: beach.src, 
    },
    {
      title: "Cultural Tokyo",
      description: "Immerse yourself in the vibrant culture and history of Tokyo.",
      image: tokyo.src, 
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <Box className={styles.container}>
      {/* About Us Section */}
      <Box className={styles.aboutUs}>
        <Typography variant="h4" className={styles.heading}>About Us</Typography>
        <Typography variant="body1" className={styles.mission}>
          We offer curated travel experiences that bring the world closer to you. Whether you’re seeking adventure, relaxation, or cultural immersion, we have a journey for you.
        </Typography>
      </Box>

      {/* Featured Tours Section */}
      <Box className={styles.featuredTours}>
        <Typography variant="h5" className={styles.heading}>Featured Tours</Typography>
        <Grid container spacing={3}>
          {tours.map((tour, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className={styles.tourCard} data-aos="zoom-in">
                <CardMedia
                  component="img"
                  height="140"
                  image={tour.image} 
                  alt={tour.title}
                  
                />
                <CardContent>
                  <Typography variant="h6" component="div" style={{color:"white",fontWeight:"bold"}}>
                    {tour.title}
                  </Typography>
                  <Typography variant="body2" style={{color:"white"}}>
                    {tour.description}
                  </Typography>
                  <Button variant="contained" className={styles.learnMoreButton}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
