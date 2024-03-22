"use client";
import { useState } from "react";
import { fetchDynamicCourses } from "@/app/lib/data";
import { ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../button";
import { lusitana } from "@/app/ui/fonts";

export default function Filter() {
  const [checkedItems, setCheckedItems] = useState<{
    [key: string]: boolean;
  }>({
    DIPLOMA: false,
    GOVT_EXAM: false,
    JEE: false,
    NEET: false,
    CLASS_12TH: false,
    CLASS_11TH: false,
    CLASS_10TH: false,
    CLASS_9TH: false,
    CLASS_8TH: false,
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
    console.log(selectedCheckboxes);
    // onApplyFilter(selectedCheckboxes);
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleButtonClick = () => {
    toggleVisibility();
    handleApplyFilter();
  };

  return (
    <div className="flex flex-col">
      <div className="mt-[100px] ">
        <button
          className={`bg-blue-500 ${lusitana.className} w-40 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded`}
          onClick={toggleVisibility}
        >
          Filters
        </button>
      </div>
      {isVisible && (
        <main className="flex flex-col pt-[2px] left-0 pr-7  ">
          <aside
            id="sidebar-multi-level-sidebar"
            className=" left-0 w-full"
            aria-label="Sidebar"
          >
            <div className=" py-4 overflow-y-auto bg-gray-50">
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
                      name="DIPLOMA"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.DIPLOMA}
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
                      name="GOVT_EXAM"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.GOVT_EXAM}
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
                      name="JEE"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.JEE}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      JEE
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center rounded-lg mb-1">
                    <input
                      type="checkbox"
                      name="NEET"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.NEET}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      NEET
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center rounded-lg mb-1">
                    <input
                      type="checkbox"
                      name="CLASS_12TH"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.CLASS_12TH}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      12th
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center rounded-lg mb-1">
                    <input
                      type="checkbox"
                      name="CLASS_11TH"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.CLASS_11TH}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      11th
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center rounded-lg mb-1">
                    <input
                      type="checkbox"
                      name="CLASS_10TH"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.CLASS_10TH}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      10th
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center rounded-lg mb-1">
                    <input
                      type="checkbox"
                      name="CLASS_9TH"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.CLASS_9TH}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      9th
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center rounded-lg mb-1">
                    <input
                      type="checkbox"
                      name="CLASS_8TH"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.CLASS_8TH}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      8th
                    </span>
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
