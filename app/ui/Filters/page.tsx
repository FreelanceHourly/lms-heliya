"use client";
import { useState } from "react";
import { ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../button";
import { lusitana } from "@/app/ui/fonts";
import {
  fetchCourses,
  fetchGovtCourses,
  fetchJeeCourses,
  fetchNeetCourses,
  fetch8thCourses,
  fetch9thCourses,
  fetch10thCourses,
  fetch11thCourses,
  fetch12thCourses,
} from "@/app/lib/data";

export default function Filter() {
  const [checkedItems, setCheckedItems] = useState<{
    [key: string]: boolean;
  }>({
    diploma: false,
    governmentExams: false,
    jee: false,
    neet: false,
    twelveClass: false,
    elevenClass: false,
    tenthClass: false,
    ninthClass: false,
    eightClass: false,
    // Add more checkbox states as needed
  });

  // Function to handle checkbox change
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  // Function to handle "Apply Filter" button click
  const handleApplyFilter = async () => {
    // Create an array of selected checkbox names
    const selectedCheckboxes = Object.keys(checkedItems).filter(
      (checkbox) => checkedItems[checkbox as keyof typeof checkedItems]
    );

    // Send selectedCheckboxes array to the backend
    console.log("Selected checkboxes:", selectedCheckboxes);

    try {
      for (const checkbox of selectedCheckboxes) {
        switch (checkbox) {
          case "diploma":
            await fetchCourses("diploma");
            break;
          case "governmentExams":
            await fetchGovtCourses("governmentExams");
            break;
          case "jee":
            await fetchJeeCourses("jee");
            break;
          case "neet":
            await fetchNeetCourses("neet");
            break;
          case "twelveClass":
            await fetch12thCourses("twelveClass");
            break;
          case "elevenClass":
            await fetch11thCourses("elevenClass");
            break;
          case "tenthClass":
            await fetch10thCourses("tenthClass");
            break;
          case "ninthClass":
            await fetch9thCourses("ninthClass");
            break;
          case "eightClass":
            await fetch8thCourses("eightClass");
            break;
          default:
            break;
        }
      }
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }

    // Reset the state of checkboxes if needed
    // setCheckedItems({
    //   diploma: false,
    //   governmentExams: false,
    //   jee: false,
    //   neet: false,
    //   // Reset other checkbox states as needed
    // });
  };
  return (
    <main className="flex flex-col pt-[72px] left-0 pr-2 h-[88vh]">
      <aside
        id="sidebar-multi-level-sidebar"
        className="h-[88vh] left-0 w-45"
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
          <Button
            className="w-[110px] mb-4 text-lg text-center font-bold ml-7"
            onClick={handleApplyFilter}
          >
            Apply Filter
          </Button>
          <h1 className="text-2xl pb-2 pl-2 text-blue-500">Level:</h1>
          <ul className="font-medium text-xl pl-2">
            <li>
              <label className="flex items-center rounded-lg mb-1">
                <input
                  type="checkbox"
                  name="diploma"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.diploma}
                />
                <span className="flex-1 hover:text-purple-500 pl-2">
                  Diploma
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center rounded-lg mb-1">
                <input
                  type="checkbox"
                  name="governmentExams"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.governmentExams}
                />
                <span className="flex-1 hover:text-purple-500 pl-2">
                  Government Exams
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center rounded-lg mb-1">
                <input
                  type="checkbox"
                  name="jee"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.jee}
                />
                <span className="flex-1 hover:text-purple-500 pl-2">JEE</span>
              </label>
            </li>
            <li>
              <label className="flex items-center rounded-lg mb-1">
                <input
                  type="checkbox"
                  name="neet"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.neet}
                />
                <span className="flex-1 hover:text-purple-500 pl-2">NEET</span>
              </label>
            </li>
            <li>
              <label className="flex items-center rounded-lg mb-1">
                <input
                  type="checkbox"
                  name="twelveClass"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.twelveClass}
                />
                <span className="flex-1 hover:text-purple-500 pl-2">12th</span>
              </label>
            </li>
            <li>
              <label className="flex items-center rounded-lg mb-1">
                <input
                  type="checkbox"
                  name="elevenClass"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.elevenClass}
                />
                <span className="flex-1 hover:text-purple-500 pl-2">11th</span>
              </label>
            </li>
            <li>
              <label className="flex items-center rounded-lg mb-1">
                <input
                  type="checkbox"
                  name="tenthClass"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.tenthClass}
                />
                <span className="flex-1 hover:text-purple-500 pl-2">10th</span>
              </label>
            </li>
            <li>
              <label className="flex items-center rounded-lg mb-1">
                <input
                  type="checkbox"
                  name="ninthClass"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.ninthClass}
                />
                <span className="flex-1 hover:text-purple-500 pl-2">9th</span>
              </label>
            </li>
            <li>
              <label className="flex items-center rounded-lg mb-1">
                <input
                  type="checkbox"
                  name="eigthClass"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.eightClass}
                />
                <span className="flex-1 hover:text-purple-500 pl-2">8th</span>
              </label>
            </li>
          </ul>
          {/* <h1 className="text-2xl p-2 text-blue-500">Category:</h1>
          <ul className="font-medium text-xl pl-2">
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
          <h1 className="text-2xl p-2 text-blue-500">Mentors</h1> */}
        </div>
      </aside>
    </main>
  );
}
