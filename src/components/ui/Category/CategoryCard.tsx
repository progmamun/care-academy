import { getAllCategories } from "@/utils/getCategories";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = async () => {
  const { data: allCategories } = await getAllCategories();
  //   console.log(allCategories);

  return (
    <Box className="mt-5 px-5 py-2">
      <Typography variant="h2">Categories</Typography>
      <Divider />
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {allCategories.map((categories: any) => (
          <Grid key={categories?.id} item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "250px",
                    },
                  }}
                >
                  <Image
                    src={categories?.icon}
                    width={200}
                    height={200}
                    alt="img"
                  />
                </CardMedia>
                <CardContent>
                  <p
                    className="
                      w-[100px]
                      bg-red-500
                      px-2
                      text-white
                      my-5
                      rounded
                      "
                  >
                    {categories?.category}
                  </p>
                  <Typography gutterBottom>{categories?.title}</Typography>
                </CardContent>
                <Link
                  href="/"
                  className="block text-center text-green-500 hover:text-green-700"
                >
                  Buy Course
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryCard;
