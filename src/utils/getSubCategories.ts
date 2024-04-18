export const getAllSubCategories = async () => {
  const res = await fetch(
    "https://easy-learning-platform.vercel.app/api/v1/sub-categories"
  );

  return res.json();
};

export const getSingleSubCategories = async (category_id: string) => {
  const res = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/sub-categories/${category_id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
