import { Typography, Link, Box } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <Box className={styles.footerContainer}>
      <Box className={styles.contactInfo}>
        {/* Phone Number */}
        <Link href="tel:+2348058000936" className={styles.contactLink}>
          <Phone className={styles.icon} />
          <Typography variant="body1">0805 800 0936</Typography>
        </Link>

        {/* Email Address */}
        <Link
          href="mailto:info@travelagency.com"
          className={styles.contactLink}
        >
          <Email className={styles.icon} />
          <Typography variant="body1">info@travelagency.com</Typography>
        </Link>

        {/* Office Address */}
        <Box className={styles.address}>
          <LocationOn className={styles.icon} />
          <Typography variant="body1">
            unity bank building 7th floor, <br /> plot 785 Herbart Macurlay way
            CBD ,<br />
            Abuja, Nigeria.
          </Typography>
        </Box>
      </Box>

      <Typography variant="body2" className={styles.copyright}>
        &copy; {new Date().getFullYear()} Travel Agency. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
