export const getAllCategories = async () => {
  const res = await fetch(
    "https://easy-learning-platform.vercel.app/api/v1/categories"
  );

  return res.json();
};

export const getSingleCategories = async (id: string) => {
  const res = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/categories/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
