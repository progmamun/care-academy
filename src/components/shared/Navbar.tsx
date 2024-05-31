"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { IconButton, Stack, Typography } from "@mui/material";

// icons
import { Facebook, Instagram, YouTube, Twitter } from "@mui/icons-material";

import Link from "next/link";

interface NavItem {
  pathname: string;
  route: string;
}

const navItems: NavItem[] = [
  {
    route: "Courses",
    pathname: "/courses",
  },
  {
    route: "Category",
    pathname: "/categories",
  },
  {
    route: "Books",
    pathname: "/books",
  },
  {
    route: "About",
    pathname: "/about",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];

function Navbar() {
  return (
    <>
      <AppBar
        sx={{
          bgcolor: "blue",
          position: "static",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/" className="w-48">
              <Typography variant="h6" gutterBottom>
                Care Academy
              </Typography>
            </Link>

            <Box className="w-full text-center">
              {navItems.map((item: NavItem) => (
                <Link key={item.pathname} href={item.pathname}>
                  <Button className="text-white">{item.route}</Button>
                </Link>
              ))}
            </Box>

            <Box>
              <Stack
                direction="row"
                sx={{
                  "& svg": {
                    color: "white",
                  },
                }}
              >
                <IconButton>
                  <Facebook />
                </IconButton>
                <IconButton>
                  <Instagram />
                </IconButton>
                <IconButton>
                  <YouTube />
                </IconButton>
                <IconButton>
                  <Twitter />
                </IconButton>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
