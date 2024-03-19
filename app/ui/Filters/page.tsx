"use client";
import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../button";
import { lusitana } from "@/app/ui/fonts";



export default function Filter() {
  const [checkedItems, setCheckedItems] = useState<{
    [key: string]: boolean;
  }>({
    diploma: false,
    govt: false,
    jee: false,
    neet: false,
    twelth: false,
    eleventh: false,
    tenth: false,
    ninth: false,
    eighth: false,
  });

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  const handleApplyFilter = async () => {
    const selectedCheckboxes = Object.keys(checkedItems).filter(
      (checkbox) => checkedItems[checkbox as keyof typeof checkedItems]
    );

    console.log("Selected checkboxes:", selectedCheckboxes);

    selectedCheckboxes.forEach((checkbox) => {
      if (checkbox === "diploma") {
        window.location.href = "/home/courses";
      } else {
        window.location.href = `/home/sideCourses/${checkbox}Courses`;
      }
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleButtonClick = () => {
    toggleVisibility(); // Call the toggleVisibility function
    handleApplyFilter(); // Call the additionalFunction function
  };

  return (
    <div className="flex flex-col">
<div className="mt-[100px] ">
    <button className={ `bg-blue-500 ${lusitana.className} w-40 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded`} onClick={toggleVisibility}>
        Filters
      </button></div>
      {isVisible && (
    <main className="flex flex-col pt-[2px] left-0 pr-7  ">
      
      <aside
        id="sidebar-multi-level-sidebar"
        className=" left-0 w-full"
        aria-label="Sidebar"
      >
        <div
          className=" py-4 overflow-y-auto bg-gray-50"
          
        >
          {/* <h2
            className={`${lusitana.className} text-3xl text-gray-800 pb-3 font-bold text-center`}
          >
            Filters
          </h2> */}
          <Button
            className="w-[110px] mb-4 text-lg text-center font-bold ml-7"
            onClick={handleButtonClick}
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
                  name="govt"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.govt}
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
                  name="twelth"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.twelth}
                />
                <span className="flex-1 hover:text-purple-500 pl-2">12th</span>
              </label>
            </li>
            <li>
              <label className="flex items-center rounded-lg mb-1">
                <input
                  type="checkbox"
                  name="eleventh"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.eleventh}
                />
                <span className="flex-1 hover:text-purple-500 pl-2">11th</span>
              </label>
            </li>
            <li>
              <label className="flex items-center rounded-lg mb-1">
                <input
                  type="checkbox"
                  name="tenth"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.tenth}
                />
                <span className="flex-1 hover:text-purple-500 pl-2">10th</span>
              </label>
            </li>
            <li>
              <label className="flex items-center rounded-lg mb-1">
                <input
                  type="checkbox"
                  name="ninth"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.ninth}
                />
                <span className="flex-1 hover:text-purple-500 pl-2">9th</span>
              </label>
            </li>
            <li>
              <label className="flex items-center rounded-lg mb-1">
                <input
                  type="checkbox"
                  name="eighth"
                  onChange={handleCheckboxChange}
                  checked={checkedItems.eighth}
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
     )}
    </div>
  );
}
