"use client";
import TeacherProfile from '../../TeacherProfile/TeacherProfile';
import useFetchTeacherData from "../../hooks/useFetchTeacherData";

export default function Mentor() {

  const teachers = useFetchTeacherData();
  console.log(teachers);
  return (

    <div className='container mx-auto px-4'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto mb-5">
          <div className="flex flex-wrap w-full md:mb-10">
            <div className="lg:w-1/2 w-full  lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShop</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <TeacherProfile teachers={teachers} />
        </div>
      </section>
    </div>
  );
};

// export default  Mentor;
