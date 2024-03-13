"use client";
import { useState } from "react";
import Image from "next/image";
import { formatCurrency } from "@/app/lib/utils";
import { UserGroupIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ScholarModal from "./scholarModal";

export default function SideCoursesTable({ courses }: { courses: object[] }) {
  const [selectedCourse, setSelectedCourse] = useState<{
    title: string;
    scholarship: number;
  } | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleApplyForScholarship = (course: any) => {
    setSelectedCourse({ title: course.title, scholarship: course.scholarship });
    setShowModal(true);
  };

  return (
    <div className=" flow-root">
      <div className="inline-block align-middle pt-1 rounded-t-3xl">
        <div className="md:pt-0 flex flex-wrap items-start justify-evenly">
          {courses?.map(
            (course: any) =>
              !course.isMasterCourse && (
                <div
                  key={course.id}
                  className="bg-white mt-5 mb-5 px-2 mx-3 shadow-courses rounded-2xl flex flex-col relative shadow-xl transition-transform hover:scale-105 "
                  style={{
                    width: "275px",
                    height: "400px",
                    background: "#EAF4D3",
                  }}
                >
                  <div className="flex items-center">
                    <Image
                      src={course.image.url}
                      className="rounded-t-3xl pt-4"
                      width={275}
                      height={200}
                      alt={`${course.title}'s profile picture`}
                      style={{ height: "175px" }}
                    />
                    <span className="absolute top-2 right-5 bg-blue-300 font-bold text-black text-sm px-2 py-1 rounded-full">
                      Best Seller
                    </span>
                  </div>
                  <div className="px-1">
                    <div
                      className="flex justify-between items-center pt-2"
                      style={{ height: "85px" }}
                    >
                      <div style={{ width: "150px" }}>
                        <p className="text-black font-bold text-sm">
                          {course.title}
                        </p>
                        <div className="text-xs">
                          {course.studentPerBatch} students per batch
                        </div>
                      </div>
                      <div className="flex flex-col text-sm items-end">
                        <div className="pr-1 text-red-500 font-bold">
                          {course.rating}/5
                        </div>
                        <div className="flex">
                          {[...Array(Math.ceil(course.rating))].map(
                            (_, index) => (
                              <Image
                                key={index}
                                src="/star.svg"
                                className="mr-0"
                                width={15}
                                height={15}
                                alt="star"
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex py-1 text-lg font-bold items-center justify-center">
                      {formatCurrency(course.cost)}
                    </div>
                    <div className="flex justify-around pb-2">
                      <div className="flex text-sm">
                        <BookOpenIcon className="w-[18px] h-[18px] mr-1" />
                        {course.numberOfClasses} classes
                      </div>
                      <div className="flex text-sm">
                        <UserGroupIcon className="w-[18px] h-[18px] mr-1" />
                        {course.totalStudent} students
                      </div>
                    </div>
                    <div className="w-full border-b mb-2"></div>
                    <div className="flex justify-center">
                      {course.scholarship > 0 ? (
                        <div>
                          <button
                            onClick={() => handleApplyForScholarship(course)}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded w-60"
                          >
                            Apply for Scholarship{" "}
                          </button>
                          <h6 className="text-center text-sm pt-1 font-bold">
                            Upto{" "}
                            <span className="text-red-500">
                              {course.scholarship}%{" "}
                            </span>
                            scholarship available
                          </h6>
                        </div>
                      ) : (
                        <div>
                          <Link href="/BuyEnquiry">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded w-60 text-center">
                              Buy Now
                            </button>
                          </Link>
                          <h6 className="text-center text-sm pt-1 font-bold">
                            {" "}
                            HURRY UP!! Limited slots left
                          </h6>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      {showModal && (
        <ScholarModal onClose={() => setShowModal(false)}>
          <div className="w-[40rem]">
            {selectedCourse && (
              <>
                <h1 className="font-bold pb-2 text-2xl text-center">
                  {selectedCourse.title} Scholarship Form
                </h1>
              </>
            )}
            <p
              className="text-lg pb-2 font-bold text-center"
              style={{ color: "gray" }}
            >
              🚀 Unlock Your Learning Journey with SaralTech! 🌟
            </p>
            {selectedCourse && (
              <>
                <p className="pb-2 font-bold">
                  🚀 We're offering up to{" "}
                  <span style={{ color: "#000080" }}>
                    {selectedCourse.scholarship}%
                  </span>{" "}
                  scholarship to passionate learners, valuing their dedication
                  and potential. Share your aspirations through questions like:
                </p>
              </>
            )}
            <ol className="pb-3">
              <li>1. Why do you want to join this program? (100 Points).</li>
              <li>2. Showcase your accomplishments (50 Points).</li>
              <li>3. Present your resume/proposal (100 Points).</li>
            </ol>
            <p className="text-center" style={{ color: "#7393B3" }}>
              It's not just a program; it's a launchpad for your dreams! 🌐✨{" "}
            </p>
            <p className="text-center pb-3" style={{ color: "	#7393B3" }}>
              Apply today and let your journey begin.
            </p>
            <p style={{ color: "#000080" }}>
              #SaralTech #ScholarshipOpportunity #InnovationJourney 🚀💡
            </p>
            <Link
              href="/ScholarshipRequest"
              className="flex justify-center pt-3"
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded w-40 ">
                Apply Now
              </button>
            </Link>
          </div>
        </ScholarModal>
      )}
    </div>
  );
}
