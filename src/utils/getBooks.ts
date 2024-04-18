export const getAllBooks = async () => {
  const res = await fetch(
    "https://easy-learning-platform.vercel.app/api/v1/books"
  );

  return res.json();
};

export const getSingleBooks = async (id: string) => {
  const res = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/books/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
