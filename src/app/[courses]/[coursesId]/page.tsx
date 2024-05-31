import { getSingleCourses } from "@/utils/getCourse";
import { Box, Container, Grid, Typography, Avatar } from "@mui/material";
import Image from "next/image";

const CoursesDetailPage = async ({ params }: any) => {
  const { data: courses } = await getSingleCourses(params.coursesId);

  return (
    <Box className="my-5">
      <h1>Course title: {courses?.title}</h1>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image
              src={courses?.banner}
              width={800}
              height={500}
              alt="courses"
            />
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" component="h2">
              {courses?.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
              }}
            >
              <Avatar alt="author" src={courses?.author.img} />
              <Typography>By {courses?.author}</Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "10px 0px",
                color: "gray",
              }}
            >
              {courses?.description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CoursesDetailPage;
