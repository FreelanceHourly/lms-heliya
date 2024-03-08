"use client"
import { useState } from 'react';
import Image from "next/image";
import { formatCurrency } from "@/app/lib/utils";
import Link from "next/link";
import ScholarModal from './scholarModal';

export default function MastersTable({
  courses,
}: {
  courses: object[];
}) {
  const [selectedCourse, setSelectedCourse] = useState<{ title: string, scholarship: number } | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleApplyForScholarship = (course: any) => {
    setSelectedCourse({ title: course.title, scholarship: course.scholarship });
    setShowModal(true);
  };
  return (
    <div className=" flow-root">
      <div className="inline-block min-w-full align-middle">
        <h1 className="text-3xl font-bold text-center pb-3">Master Course</h1>
        <div className="md:pt-0 flex flex-wrap items-start justify-evenly ">
              {courses?.map((course: any) => (
                course.isMasterCourse && (
                  <div
                    key={course.id}
                    className="bg-white mb-8 px-2 rounded-2xl flex flex-col relative shadow-2xl transition-transform hover:scale-105"
                    style={{width: "350px", height:"450px", background: "radial-gradient(circle, #000000, #00007F)"}}
                  >
                      <div className="flex items-center">
                        <Image
                          src={
                            course.image.url
                          }
                          className="rounded-t-3xl pt-3"
                          width={350}
                          height={350}
                          alt={`${course.title}'s profile picture`}
                          style={{height:"180px"}}
                        />
                        <span className="absolute top-1 right-4 bg-blue-300 font-bold text-black text-sm px-2 py-1 rounded-full">
                          Best Seller
                        </span>
                      </div>
                    <div className="px-1">
                      <div className="flex justify-between items-center pt-2" style={{height:"85px"}}>
                        <div style={{width:"175px"}}>
                          <p className="text-white font-bold text-md">{course.title}</p>
                          <div className="text-xs text-white">
                            {course.studentPerBatch} students per batch
                          </div>
                        </div>
                        <div className="flex flex-col text-xs items-end">
                          <div className="pr-2 text-red-500 font-bold">{course.rating}/5</div>
                          <div className="flex">
                            {[...Array(Math.ceil(course.rating))].map((_, index) => (
                              <Image
                                key={index}
                                src="/star.svg"
                                className="mr-1"
                                width={15}
                                height={15}
                                alt="star"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex py-2 text-white text-lg font-bold items-center justify-center">
                        {formatCurrency(course.cost)}
                      </div>
                      <div className="flex justify-around pb-3 text-white">
                        <div className="flex text-sm">
                          <Image
                            src="https://edu.saralgroups.com/assets/courses/book-open.svg"
                            className="mr-1"
                            width={15}
                            height={15}
                            alt="book"
                          />
                          {course.numberOfClasses} classes
                        </div>
                        <div className="flex text-sm">
                          <Image
                            src="https://edu.saralgroups.com/assets/courses/users.svg"
                            className="mr-1"
                            width={15}
                            height={15}
                            alt="book"
                          />
                          {course.totalStudent} students
                        </div>
                      </div>
                      <div className="w-full border-b mb-4"></div>
                      <div className="flex justify-center">
                        {course.scholarship > 0 ? (
                          <div className="text-white">
                            <button onClick={() => handleApplyForScholarship(course)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1.5 px-4 rounded w-80">Apply for Scholarship </button>
                            <h6 className="text-center text-sm pt-1 font-bold">Upto <span className="text-red-500">{course.scholarship}% </span>scholarship available</h6>
                          </div>
                        ) : (
                          <Link href="/BuyEnquiry">
                            <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-1.5 px-4 rounded w-80">Buy Now</button>
                            <h6 className="text-center text-sm pt-2 font-bold text-sm text-red-400"> HURRY UP!! Limited slots left</h6>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                )
              ))}
        </div>
      </div>
      {showModal && (
        <ScholarModal onClose={() => setShowModal(false)}>
          <div className='w-[40rem]'>
            {selectedCourse && (
              <>
                <h1 className='font-bold pb-2 text-2xl text-center'>{selectedCourse.title} Scholarship Form</h1>
              </>
            )}
            <p className='text-lg pb-2 font-bold text-center' style={{color:"gray"}}>🚀 Unlock Your Learning Journey with SaralTech! 🌟</p>
            {selectedCourse && (
              <>
                <p className='pb-2 font-bold'>🚀 We're offering up to <span style={{color:"#000080"}}>{selectedCourse.scholarship}%</span> scholarship to passionate learners, valuing their dedication and potential. Share your aspirations through questions like:</p>
              </>
            )}
            <ol className='pb-3'>
              <li>1. Why do you want to join this program? (100 Points).</li>
              <li>2. Showcase your accomplishments (50 Points).</li>
              <li>3. Present your resume/proposal (100 Points).</li>
            </ol>
            <p className='text-center' style={{color:"#7393B3"}}>It's not just a program; it's a launchpad for your dreams! 🌐✨ </p>
            <p className='text-center pb-3' style={{color:"	#7393B3"}}>Apply today and let your journey begin.</p>
            <p style={{color:"#000080"}}>#SaralTech #ScholarshipOpportunity #InnovationJourney 🚀💡</p>
            <Link href="/ScholarshipRequest" className='flex justify-center pt-3'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded w-40 ">Apply Now</button></Link>
          </div>
        </ScholarModal>
      )}
    </div>
  );
}