"use client";
import  { useState, useEffect } from 'react';
// import ProductList from '../../TeacherProfile/TeacherProfile';
// import TeacherProfile from '../../TeacherProfile/TeacherProfile';
//"http://localhost:1337/api/courses?populate=*&filters%5BisHeroCourse%5D=true"
// "http://localhost:1337/api/teachers?populate=*",
const useFetchTeacherData = (): any =>  {
  const [teachers, setTeachers] = useState([]);
  const STRAPI_URL = process.env.STRAPI_URL;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(STRAPI_URL + '/api/teachers?populate=*');
      let data = await response.json();
      setTeachers(data.data);
      
    }
    fetchData();
  }, []);
  return teachers;
};

export default useFetchTeacherData;
