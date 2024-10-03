"use client"
import React, { useEffect } from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import { FaQuoteLeft } from 'react-icons/fa'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
 
  {
    name: 'Alice Johnson',
    destination: 'Paris',
    quote: 'Our trip to Paris was unforgettable! The guides were knowledgeable and made everything easy.',
    photo: 'path/to/alice.jpg', 
  },
  {
    name: 'Michael Smith',
    destination: 'Safari Adventure',
    quote: 'The safari tour exceeded our expectations! We saw so many incredible animals in their natural habitat.',
    photo: 'path/to/michael.jpg', 
  },
  {
    name: 'Emily Davis',
    destination: 'Maldives',
    quote: 'The Maldives was pure paradise! Everything from the beaches to the service was outstanding.',
    photo: 'path/to/emily.jpg',
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#1c2b33' }} >
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white' }} >
        What Our Travelers Say
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper data-aos="zoom-in" elevation={3} sx={{ padding: '1.5rem', textAlign: 'center' }}>
              <Avatar
                alt={testimonial.name}
                src={testimonial.photo} // Avatar image
                sx={{ width: 56, height: 56, margin: '0 auto', marginBottom: '1rem' }}
              />
              <Box sx={{ fontSize: '1.5rem', color: '#ff5722', marginBottom: '0.5rem' }}>
                <FaQuoteLeft />
              </Box>
              <Typography variant="body1" gutterBottom>
                {testimonial.quote}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {testimonial.destination}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
