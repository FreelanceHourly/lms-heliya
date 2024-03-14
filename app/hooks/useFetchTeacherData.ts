"use client";
import  { useState, useEffect } from 'react';
// import ProductList from '../../TeacherProfile/TeacherProfile';
// import TeacherProfile from '../../TeacherProfile/TeacherProfile';
//"http://localhost:1337/api/courses?populate=*&filters%5BisHeroCourse%5D=true"
// "http://localhost:1337/api/teachers?populate=*",
const useFetchTeacherData = (): any =>  {
  const [teachers, setTeachers] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://strapi.saralgroups.com/api/teachers?populate=*');
      let data = await response.json();
      setTeachers(data.data);
      
    }
    fetchData();
  }, []);
  return teachers;
};

export default useFetchTeacherData;
