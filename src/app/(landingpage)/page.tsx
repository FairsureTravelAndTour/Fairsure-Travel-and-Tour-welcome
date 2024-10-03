import React from 'react'
import { Introduction } from './sections/intro'
import AboutUsAndTours from './sections/about'
import WhyChooseUs from './sections/whyChooseUs'
import Testimonials from './sections/Testimonial'
import NewsletterSignup from './sections/newsletter'

export const Welcome = () => {
  return (
    <div>
      <Introduction/>
      <AboutUsAndTours/>
      <WhyChooseUs/>
      <Testimonials/>
      <NewsletterSignup/>
      
    </div>
  )
}
