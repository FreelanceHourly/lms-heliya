"use client";
import { useState } from "react";
import { ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../button";
import { lusitana } from "@/app/ui/fonts";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
    SCIENCE: false,
    MEDICAL: false,
    ARTS: false,
    COMMERCE: false,
    ENGINEERING: false,
    MANAGEMENT: false,
    SALES: false,
    ENTREPRENEURSHIP: false,
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
  };

  const [areLevelsVisible, setAreLevelsVisible] = useState(true);
  const [areCategoriesVisible, setAreCategoriesVisible] = useState(true);

  const toggleLevelsVisibility = () => {
    setAreLevelsVisible(!areLevelsVisible);
  };

  const toggleCategoriesVisibility = () => {
    setAreCategoriesVisible(!areCategoriesVisible);
  };

  return (
    <div className="flex flex-col w-[290px]">
      <h1 className="mt-[100px] p-2 pt-0 text-3xl pb-2 pl-2 text-blue-700 font-semibold">
        All Filters
      </h1>
      <main className="flex flex-col pt-[2px] left-0 pr-7  ">
        <aside
          id="sidebar-multi-level-sidebar"
          className=" left-0 w-full"
          aria-label="Sidebar"
        >
          <div className=" py-4 overflow-y-auto bg-gray-50">
            <div
              onClick={toggleLevelsVisibility}
              className="flex items-center justify-between text-2xl pb-2 pl-2 text-blue-500 cursor-pointer"
            >
              <span>Level</span>
              {areLevelsVisible ? (
                <IoIosArrowUp size={24} className="mr-3" />
              ) : (
                <IoIosArrowDown size={24} className="mr-3" />
              )}
            </div>
            {areLevelsVisible && (
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
                      Govt. Exams
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
            )}
            <div
              onClick={toggleCategoriesVisibility}
              className="flex items-center justify-between text-2xl pb-2 pl-2 text-blue-500 cursor-pointer"
            >
              <span>Categories</span>
              {areCategoriesVisible ? (
                <IoIosArrowUp size={24} className="mr-3" />
              ) : (
                <IoIosArrowDown size={24} className="mr-3" />
              )}
            </div>
            {areCategoriesVisible && (
              <ul className="font-medium text-xl pl-2">
                <li>
                  <label className="flex items-center rounded-lg mb-1">
                    <input
                      type="checkbox"
                      name="SCIENCE"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.SCIENCE}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      Science
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center rounded-lg mb-1">
                    <input
                      type="checkbox"
                      name="MEDICAL"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.MEDICAL}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      Medical
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center rounded-lg mb-1">
                    <input
                      type="checkbox"
                      name="ARTS"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.ARTS}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      Arts
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center rounded-lg mb-1">
                    <input
                      type="checkbox"
                      name="COMMERCE"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.COMMERCE}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      Commerce
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center rounded-lg mb-1">
                    <input
                      type="checkbox"
                      name="ENGINEERING"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.ENGINEERING}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      Engineering
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center rounded-lg mb-1">
                    <input
                      type="checkbox"
                      name="MANAGEMENT"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.MANAGEMENT}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      Management
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center rounded-lg mb-1">
                    <input
                      type="checkbox"
                      name="SALES"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.SALES}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      Sales
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center rounded-lg mb-1">
                    <input
                      type="checkbox"
                      name="ENTREPRENEURSHIP"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.ENTREPRENEURSHIP}
                    />
                    <span className="flex-1 hover:text-purple-500 pl-2">
                      Entrepreneurship
                    </span>
                  </label>
                </li>
              </ul>
            )}
            <Button
              className="w-[110px] mt-4 text-lg font-bold ml-11"
              onClick={handleApplyFilter}
            >
              Apply Filter
            </Button>
          </div>
        </aside>
      </main>
    </div>
  );
}
