"use client";
import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import styles from "./Newslettersignup.module.css";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform action (e.g., send to API)
    console.log("Email submitted:", email);
    setEmail(""); // Clear input field
  };

  return (
    <div
      className={styles.newsletterWrapper}
      
    >
      <Box className={styles.newsletterContainer}>
        <Typography variant="h5" className={styles.title}>
          Get Travel Deals Directly to Your Inbox!
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            label="Your Email Address"
            variant="outlined"
            value={email}
            onChange={handleInputChange}
            className={styles.inputField}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles.submitButton}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default NewsletterSignup;
