// "use client";
import type { Metadata } from "next";
import Banner from "@/components/ui/Banner/Banner";
import Courses from "@/components/ui/Courses/Courses";
import { Box } from "@mui/material";
import CategoryCard from "@/components/ui/Category/CategoryCard";

export const metadata: Metadata = {
  title: "Home | CareAcademy",
  description: "This is online education Website",
};

const HomePage = () => {
  return (
    <>
      <Box component="section">
        <Banner />
        <Courses />
        <CategoryCard />
      </Box>
    </>
  );
};

export default HomePage;
