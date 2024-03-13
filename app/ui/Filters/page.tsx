import Link from "next/link";
import Image from "next/image";
import { Button } from "../button";
import { lusitana } from "@/app/ui/fonts";
import { FaHandPointRight } from "react-icons/fa";

export default function Filter({ courses }: { courses: object[] }) {
  return (
    <main className="flex flex-col pt-[72px] left-0 pr-2 h-[88vh]">
      <aside
        id="sidebar-multi-level-sidebar"
        className="h-[88vh] left-0 w-40"
        aria-label="Sidebar"
      >
        <div
          className="h-[88vh] py-4 overflow-y-auto bg-gray-50"
          style={{ background: "#C6D2ED" }}
        >
          <h2
            className={`${lusitana.className} text-3xl text-gray-800 pb-3 font-bold text-center`}
          >
            Filters
          </h2>
          <h1 className="text-2xl pb-2 pl-2 text-blue-500">Level:</h1>
          <ul className="font-medium text-xl pl-2">
            <li>
              <a
                href="/home/courses"
                className="flex items-center rounded-lg mb-1"
              >
                <FaHandPointRight />
                <span className="flex-1 hover:text-purple-500 pl-2">
                  Diploma
                </span>
              </a>
            </li>
            <li>
              <a
                href="/home/sideCourses/12thCourses"
                className="flex items-center mb-1"
              >
                <FaHandPointRight />
                <span className="flex-1 hover:text-purple-500 pl-2">12th</span>
              </a>
            </li>
            <li>
              <a
                href="/home/sideCourses/11thCourses"
                className="flex items-center mb-1"
              >
                <FaHandPointRight />
                <span className="flex-1 hover:text-purple-500 pl-2">11th</span>
              </a>
            </li>
            <li>
              <a
                href="/home/sideCourses/10thCourses"
                className="flex items-center mb-1"
              >
                <FaHandPointRight />
                <span className="flex-1 hover:text-purple-500 pl-2">10th</span>
              </a>
            </li>
            <li>
              <a
                href="/home/sideCourses/9thCourses"
                className="flex items-center mb-1"
              >
                <FaHandPointRight />
                <span className="flex-1 hover:text-purple-500 pl-2">9th</span>
              </a>
            </li>
            <li>
              <a
                href="/home/sideCourses/8thCourses"
                className="flex items-center"
              >
                <FaHandPointRight />
                <span className="flex-1 hover:text-purple-500 pl-2">8th</span>
              </a>
            </li>
          </ul>
          <h1 className="text-2xl p-2 text-blue-500">Mentors</h1>
        </div>
      </aside>
    </main>
  );
}
