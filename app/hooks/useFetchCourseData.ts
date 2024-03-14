// hooks/useFetchCourseData.ts
"use client";
import { useEffect, useState } from "react";

const useFetchCoursesData = (): any => {
  const [courses, setCourses] = useState([]);


  useEffect(() => {
    async function fetchCoursesData() {
      try {
        const response = await fetch('https://strapi.saralgroups.com/api/courses?populate=*&filters%5BisHeroCourse%5D=true');

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