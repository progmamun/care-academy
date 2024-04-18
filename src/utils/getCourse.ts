export const getAllCourses = async () => {
  const res = await fetch(
    "https://easy-learning-platform.vercel.app/api/v1/courses"
  );

  return res.json();
};

export const getSingleCourses = async (id: string) => {
  const res = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/courses/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};

export const getCourseOfCategories = async (id: String[]) => {
  const res = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/courses?category_id=${id}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};

export const getCourseOfSubCategories = async (id: String[]) => {
  const res = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/courses?sub_category_id=${id}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};
