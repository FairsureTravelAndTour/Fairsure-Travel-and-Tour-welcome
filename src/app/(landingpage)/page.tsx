import React, { lazy, Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress'; // MUI spinner

const Introduction = lazy(() => import('./sections/intro'));
const AboutUsAndTours = lazy(() => import('./sections/about'));
const WhyChooseUs = lazy(() => import('./sections/whyChooseUs'));
const Testimonials = lazy(() => import('./sections/Testimonial'));
const NewsletterSignup = lazy(() => import('./sections/newsletter'));


export const Welcome = () => {
  return (
    <div>
       <Suspense fallback={<CircularProgress style={{ margin: '20px auto' }} />}>
       <Introduction/>
       <AboutUsAndTours/>
      <WhyChooseUs/>
      <Testimonials/>
      <NewsletterSignup/>
       </Suspense>
      
      
    </div>
  )
}
