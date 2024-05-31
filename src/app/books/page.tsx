"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import LoadingPage from "../loading";

const BookPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [allBooks, setAllBooks] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://easy-learning-platform.vercel.app/api/v1/books?page=${currentPage}&limit=9`
    )
      .then((res) => res.json())
      .then((data) => {
        const booksData = data?.data || [];
        setAllBooks(booksData);
        setLoading(false);
      });
  }, [currentPage]);

  if (isLoading) return <LoadingPage />;

  const totalBooks = allBooks.meta?.total || 0;
  const limit = allBooks.meta?.limit || 1;
  const totalPages = Math.ceil(totalBooks / limit);

  // Function to handle page change
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <Box className="mt-5 px-5 py-2">
      <Typography variant="h2">All Books</Typography>
      <Divider />
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {allBooks &&
          allBooks.data.map((book: any) => (
            <Grid key={book.id} item xs={4}>
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
                      src={book.cover_page}
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
                      {book.category}
                    </p>
                    <Typography gutterBottom>Title: {book.title}</Typography>
                    <Typography gutterBottom>Price: ${book.price}</Typography>
                    <Link
                      href={`/books/${book.id}`}
                      className="block text-center text-green-500 hover:text-green-700"
                    >
                      See Details
                    </Link>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              component={Button}
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
          defaultPage={1}
        />
      </Stack>
    </Box>
  );
};

export default BookPage;
