import { getSingleBooks } from "@/utils/getBooks";
import { Box, Container, Grid, Typography, Avatar } from "@mui/material";
import Image from "next/image";

// export async function generateStaticParams() {
//   const res = await fetch(
//     "https://easy-learning-platform.vercel.app/api/v1/books"
//   );
//   const books = await res.json();
//   const slicedBooks = books.slice(0, 9);
//   const ids = slicedBooks.map((book: any) => {
//     return {
//       id: book.id,
//     };
//   });
//   return ids;
// }

const BookDetailsPage = async ({ params }: any) => {
  const { data: book } = await getSingleBooks(params.bookId);
  //   console.log(book, "book data");

  return (
    <Box className="my-5">
      <h1>Course title: {book?.title}</h1>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image src={book?.cover_page} width={800} height={500} alt="book" />
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" component="h2">
              {book?.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
              }}
            >
              <Avatar alt="author" src={book?.author?.img} />
              <Typography>By {book?.writer}</Typography>
              <Typography>Price: ${book?.price}</Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "10px 0px",
                color: "gray",
              }}
            >
              {book?.description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BookDetailsPage;
