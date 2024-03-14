// hooks/useFetchCourseData.ts
"use client";
import { useEffect, useState } from "react";

const useFetchCoursesData = (): any => {
  const [courses, setCourses] = useState([]);
  const STRAPI_URL = process.env.STRAPI_URL;

  useEffect(() => {
    async function fetchCoursesData() {
      try {
        const response = await fetch(STRAPI_URL + '/api/courses?populate=*&filters%5BisHeroCourse%5D=true');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const coursesData = await response.json();
        setCourses(coursesData.data);
      } catch (error) {
        console.error("Error fetching courses data:", error);
      }
    }

    fetchCoursesData();
  }, []);

  return courses;
};

export default useFetchCoursesData;