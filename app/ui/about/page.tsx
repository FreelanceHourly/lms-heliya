"use client";
import Image from "next/image";
import useFetchCoursesData from "../../hooks/useFetchCourseData";
import { CheckBadgeIcon,CheckCircleIcon } from "@heroicons/react/24/outline";
import CourseCard from "@/app/CourseCard/CourseCard";
import Link from "next/link";

export default function About() {

  const courses = useFetchCoursesData();
  
  return (
    <main className="flex flex-col w-full  sm:flex-row md:h-screen ">
      <div className="flex-1 col-span-6 flex flex-col justify-evenly">
        <div className = "flex gap-2 mx-auto lg:mx-0">
            <CheckBadgeIcon className="w-[20px] h-[20px] text-green-500"/>
            <h3 className="text-green-500 text-sm font-semibold text-center lg:text-start">Upto 100% scholarship available</h3>       
        </div>
        <h1 className= "text-midnightblue-500 text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">We believe every student have different learning curve.</h1>
        <div className="flex items-center lg:justify-between sm:justify-center ">
            <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm-inset-auto">
            <Link
            href="/CounsellingRequest" className="text-blueviolet-500 border border-semiblueviolet-500 text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-sky-200 hover:text-white hover:bg-blue-500" >
            <span>Consult our Career Experts</span>
          </Link>
            </div>
        </div>
        <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-10 lg:pt-5">"Build skills with our courses and mentor from world-class companies. 100% personalised coaching available. We are on mission to prepare every indiviual for the job market, and become independent ."</h3>
        <div className="flex items-center justify-between pt-10 lg:pt-4">
            <div className="flex gap-2">
                <CheckCircleIcon className="w-[25px] h-[25px] text-blue-500"/>
                <p className="text-sm sm:text-lg font-normal text-black">Tech</p>
            </div> 
            <div className="flex gap-2">
                <CheckCircleIcon className="w-[25px] h-[25px] text-blue-500"/>
                <p className="text-sm sm:text-lg font-normal text-black">Entrepreneurship</p>
            </div> 
            <div className="flex gap-2">
                <CheckCircleIcon className="w-[25px] h-[25px] text-blue-500"/>
                <p className="text-sm sm:text-lg font-normal text-black">Management</p>
            </div> 
        </div>
  </div>
  <div className="mt-5 px-4 py-4">
  <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">Check Out Our <span className="text-blue-600 dark:text-blue-500 lg:text-4xl">HERO Courses</span></h3>

  <div className="flex col-span-6 justify-center">
    <CourseCard  title={courses[0]?.attributes?.title} rating={courses[0]?.attributes?.rating}  imageUrl={courses[0]?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url} />
    <CourseCard  title={courses[1]?.attributes?.title} rating={courses[1]?.attributes?.rating}  imageUrl={courses[1]?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url} />
    <CourseCard title={courses[2]?.attributes?.title} rating={courses[2]?.attributes?.rating}  imageUrl={courses[2]?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url} />

   </div>
   <h3 className="mb-4 text-l font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">&nbsp; &nbsp; &nbsp;  And More<span className="text-blue-600 dark:text-blue-500 lg:text-4xl">.....</span></h3>

   </div>
    </main>
  );
}