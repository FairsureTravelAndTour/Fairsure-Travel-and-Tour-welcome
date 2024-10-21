"use client";
import { Alert, Box, Container, Typography } from "@mui/material";
import styles from "./contactUs.module.css";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageStatus, setMessageStatus] = useState<string | null>(null);
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          "service_0dzqtfo",
          "template_2ffiesh",
          form.current,
          "FeGi2bTxPb_A2m_L0"
        );
        setMessageStatus("Message sent successfully!");
      } catch (error) {
        setMessageStatus("Failed to send message. Please try again.");
      }
    }
  };
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
        Contact Us
        <Box className={styles.info}>
          <Typography
            variant="h6"
            style={{
              maxWidth: "700px",
              display: "flex",
              flexWrap: "wrap",
              margin: "5px 20px",
            }}
          >
            We’d love to hear from you! Whether you have questions, need help
            with a booking, or want to know more about our travel services, our
            team is here to assist.
          </Typography>
        </Box>
      </Typography>
      <Container maxWidth="lg">
        <Box className={styles.info}>
        <Typography variant="h6" style={{ color: "white", margin: "20px 0", }}  textAlign="center" display="flex" justifyContent="center">
            <strong>
              {" "}
              Get in Touch with Us <br /> Use the form below to send us a
              message, book a call, or request more information. <br /> We’ll
              get back to you as soon as possible.
            </strong>
          </Typography>
        </Box>
        <form ref={form} onSubmit={sendEmail} className={styles.form} data-aos="zoom-in">
          <div className={styles.card}>
            {messageStatus && (
              <Alert
                className={styles.login}
                severity={
                  messageStatus.includes("success") ? "success" : "error"
                }
              >
                {messageStatus}
              </Alert>
            )}

            <a className={styles.login}> Get in touch with us</a>
            <div className={styles.inputBox}>
              <input type="text" name="user_name" aria-label="Name" required />
              <span className="user">Name</span>
            </div>

            <div className={styles.inputBox}>
              <input
                type="email"
                name="user_email"
                aria-label="Email"
                required
              />
              <span>Email address</span>
            </div>
            <div className={styles.inputBox}>
              <input type="text" name="subject" aria-label="Subject" required />
              <span>Subject</span>
            </div>
            <div className={styles.inputBox}>
              <textarea
                id=""
                aria-label="Message"
                name="message"
                rows={4}
                required
                aria-multiline
                className={styles.TextField}
              />
              <span>message</span>
            </div>

            <button className={styles.enter} type="submit">
              SEND
            </button>
          </div>
        </form>
      </Container>
      <Container maxWidth="lg">
        <Typography variant="h6" style={{ color: "white", marginTop: "20px " }}>
          <strong>
            {" "}
            Find Us on the Map Explore our location below to visit us:
          </strong>
        </Typography>

        <Box className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1500306893754!2d7.48544887361227!3d9.050076288661586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba3d6cef4c9%3A0x818eab5a4834a347!2sUnity%20Bank%20PLC!5e0!3m2!1sen!2sng!4v1728906378909!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Container>
    </div>
  );
};
export default Contact;
