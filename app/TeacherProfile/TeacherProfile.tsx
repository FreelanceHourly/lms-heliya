
// export type teacherprofileProps = {

//   name: string;
//   qualification : string;
//   experience: string;
//   field: string ;
//   imageUrl : string;
// };

// const TeacherProfile = (props: teacherprofileProps) => {
//   const { name , qualification , experience , field , imageUrl} = props;
//   const imageSrc = imageUrl ? `${imageUrl}` : '';
import React from "react";
import Image from "next/image";

export type TeacherProfileProps = {

  teachers :  any[] ;
};
const TeacherProfile = (props: TeacherProfileProps) => {
  const {teachers} = props;

  // const imageSrc = imageUrl ? `${imageUrl}` : '';
  return (

    <>
    <div className="flex flex-wrap -m-4">
      {teachers.map((item) => {
        return (
          <div key={item.id} className="xl:w-1/4 md:w-1/2 px-4">
        {/* <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
      <div className=" rounded-lg w-40 p-3 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 relative">
      <div className=" max-w-sm w-60 h-80 rounded-lg bg-white-300 border-white-200 bg-opacity-50 shadow dark:border-gray-700" >
    <a href="#">
    <Image className="rounded-t-lg " src={`${item.attributes.profile_picture.data.attributes.url}`} width={350} height={100} alt="" />
        
        </a>
    <div className="p-2">
        <a href="#">
            <h4 className="mb-2 text-l font-bold tracking-tight text-black dark:text-black" >{item.attributes.Name}</h4>
        </a>

       <div className="flex flex-col justify-between">
       <h4 className="mb-2 text-l font-bold tracking-tight text-black dark:text-black" >Qualification : {item.attributes.qualification}</h4>
       <h4 className="mb-2 text-l font-bold tracking-tight text-black dark:text-black" >Experience :{item.attributes.experience}</h4>
       <h4 className="mb-2 text-l font-bold tracking-tight text-black dark:text-black" >Specialisation :{item.attributes.field}</h4>
       <div>
        <a href="#" className="inline-flex items-center mt-1 px-2 py-3 text-sm font-medium w-20 h-5 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Profile
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a></div>
</div>
    </div>
    </div>
        </div>
      
    </div>

    */}
   
<div
    className="max-w-2xl h-100 mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg text-gray-900">
    <div className="rounded-t-lg h-32 overflow-hidden bg-blue-900">
        {/* <Image className="object-cover object-top w-full" src={`${item.attributes.profile_picture.data.attributes.url}`} width={200} height={100} alt='Mountain'/> */}
    </div>
    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <Image className="object-cover object-center h-32" src={`${item.attributes.profile_picture.data.attributes.url}`} width={200} height={100} alt='Woman looking front'/>
    </div>
    <div className="h-62 text-center mt-2">
        <h2 className="font-semibold">{item.attributes.Name}</h2>
        <p className="text-gray-500">{item.attributes.field}</p>
    </div>
    <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        {/* <li className="flex flex-col items-center justify-around">
            <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <div>2k</div>
        </li> */}
        <li className="flex flex-col items-center justify-between">
        <svg className="w-4 fill-current text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"/>
</svg>
            <div>{item.attributes.qualification}</div>
        </li>
        <li className="flex flex-col items-center justify-around">
            <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>
            <div>{item.attributes.experience} years</div>
        </li>
    </ul>
    <div className="p-4 border-t mx-8 mt-2">
        <button className="w-6/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">View Profile</button>
    </div>
</div>
    </div>
    );
  })}

</div>
</>
  );
};

export default TeacherProfile;