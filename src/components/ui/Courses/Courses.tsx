"use client";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import LoadingPage from "@/app/loading";

const Courses = () => {
  const [courses, setCourses] = useState<Record<string, any> | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://easy-learning-platform.vercel.app/api/v1/courses")
      .then((res) => res.json())
      .then((data) => {
        const coursesData = data.data?.data || [];
        setCourses(coursesData);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <LoadingPage />;
  if (!Array.isArray(courses) || courses.length === 0)
    return <p>No data found.</p>;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Box>
      <Typography gutterBottom variant="h2" component="div">
        All Courses
      </Typography>
      <Divider />
      <Carousel
        ssr={true}
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {courses.map((course: any) => (
          <div key={course.id} className="m-3 p-3">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea style={{ justifyContent: "center" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={course?.banner}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {course?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {}
                    {course?.description.length > 50
                      ? course.description.slice(0, 50) + "..."
                      : course.description}
                  </Typography>
                </CardContent>
                <Link
                  href={`/courses/${course?.id}`}
                  className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded block text-center"
                >
                  Details
                </Link>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default Courses;
