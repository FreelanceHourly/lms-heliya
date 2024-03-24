"use client";
import Link from "next/link";
import Image from "next/image";
import { logoutAction } from "@/app/lib/auth/logout-action";

import { useState } from "react";

interface MobileNavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
  return (
    <a href={to} className={`mx-4 text-xl hover:text-blue-500`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }: MobileNavProps) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        <Link href="/">
          <div className="mr-4">
            <Image src="/heliya_lms.png" width={230} height={230} alt="logo" />
          </div>
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4 hover:text-blue-500"
          href="/home"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Home
        </a>
        <a
          className="text-xl font-normal my-4 hover:text-blue-500"
          href="/home/courses"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Courses
        </a>
        <a
          className="text-xl font-normal my-4 hover:text-blue-500"
          href="/home/mentor"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Mentors
        </a>
        <a
          className="text-xl font-normal my-4 hover:text-blue-500"
          href="/CounsellingRequest"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Request Callback
        </a>
        <form
          action={async () => {
            // "use server";
            await logoutAction();
          }}
        >
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <span className="md:block">Sign In</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <Link href="/">
          <div className="mr-4">
            <Image src="/heliya_lms.png" width={230} height={230} alt="logo" />
          </div>
        </Link>
      </div>
      <div className=" w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/home" ><span className="md:max-lg:text-xs ">Home</span></NavLink>
          <NavLink to="/home/courses"><span className="md:max-lg:text-xs">Courses</span></NavLink>
          <NavLink to="/home/mentor"><span className="md:max-lg:text-xs">Mentors</span></NavLink>
          <NavLink to="/CounsellingRequest"><span className="md:max-lg:text-xs">Request Callback</span></NavLink>
          <form
            action={async () => {
              await logoutAction();
            }}
          >
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none md:w-[80px] focus:ring-blue-300 font-medium rounded-lg text-sm  px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <span className="md:block ">Sign In</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
