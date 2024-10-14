"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/Travel&Tourlogo.png";

const pages = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/aboutUs" },
  // { label: "TOUR AND PACKAGES", path: "/TourAndPackages" },
  { label: "CONTACT", path: "/contactUs" },
];

function NavBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        width: "90vw",
        margin: " 10px auto",
        borderRadius: "10px",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Image
              alt="fairsure logo"
              src={logo}
              width={100}
              height={100}
              style={{ height: "auto", width: "100%" }}
            />
          
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            {pages.map((page) => (
              <Link key={page.label} href={page.path} passHref>
                <Button sx={{ color: "#E0FFFF", fontWeight: 700 }}>
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
