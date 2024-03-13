import Image from "next/image";
import useFetchCoursesData from "../../hooks/useFetchCourseData";
import CourseCard from "@/app/CourseCard/CourseCard";
import Link from "next/link";

export default function Becomemember() {
  return (
    <main className="flex flex-col items-center p-6 ">
      <div className="width-full bg-black ">
        <u>
          <h1 className="mb-4 text-xl w-100% pt-4 font-extrabold leading-none tracking-tight bg-black text-white md:text-5xl lg:text-5xl dark:text-white">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Become a
            member of{" "}
            <span className="text-blue-600 dark:text-blue-500 lg:text-6xl">
              Saral School
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </h1>
        </u>
      </div>
      <div className="space-y-8 p-9 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {/* <!-- Item #1 --> */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <h2 className="font-bold text-slate-900">STEP 1</h2>
              {/* <time className="font-caveat font-medium text-indigo-500">08/06/2023</time> */}
            </div>
            <h3 className="text-slate-500">
              Explore and find the Course from our Catalog .
            </h3>
          </div>
        </div>

        {/* <!-- Item #2 --> */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">STEP 2</div>
              {/* <time className="font-caveat font-medium text-indigo-500">09/06/2023</time> */}
            </div>
            <div className="text-slate-500">
              Buy the course that will help you with your career
            </div>
          </div>
        </div>

        {/* <!-- Item #3 --> */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">STEP 3</div>
              {/* <time className="font-caveat font-medium text-indigo-500">10/06/2023</time> */}
            </div>
            <div className="text-slate-500">
              Apply for scholarship and get free access to many course. we give
              upto 100% scholarship{" "}
            </div>
          </div>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">STEP 4</div>
              {/* <time className="font-caveat font-medium text-indigo-500">12/06/2023</time> */}
            </div>
            <div className="text-slate-500">
              Join our course and head towards a better future . Became the
              member of SaralSchool .{" "}
            </div>
          </div>
        </div>
        {/* <!-- Item #5 --> */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">STEP 5</div>
              {/* <time className="font-caveat font-medium text-indigo-500">12/06/2023</time> */}
            </div>
            <div className="text-slate-500">
            Get complimentary placement and internship coaching with each professional course.{" "}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
