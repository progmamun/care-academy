import { Box, Button, Container, IconButton, Typography } from "@mui/material";

// icons
import { Facebook, Instagram, YouTube, Twitter } from "@mui/icons-material";

import Link from "next/link";

interface NavItem {
  pathname: string;
  route: string;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
  return (
    <Box className="bg-blue-500 px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
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
        </Box>
        <Box className="w-full text-center">
          {navItems.map((item) => (
            <Link key={item.pathname} href={item.pathname}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>

        <Typography variant="body2" color="white" textAlign="center">
          &copy;{currentYear} The CareAcademy. Design by Al Mamun Khan.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
