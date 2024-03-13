"use client";
import  { useState, useEffect } from 'react';
// import ProductList from '../../TeacherProfile/TeacherProfile';
// import TeacherProfile from '../../TeacherProfile/TeacherProfile';

const useFetchTeacherData = (): any =>  {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:1337/api/teachers?populate=*",
      );
      let data = await response.json();
      setTeachers(data.data);
      
    }
    fetchData();
  }, []);
  return teachers;
};

export default useFetchTeacherData;
