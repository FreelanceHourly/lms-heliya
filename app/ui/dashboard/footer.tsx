import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { PowerIcon } from "@heroicons/react/24/outline";
import { logoutAction } from "@/app/lib/auth/logout-action";
import NavLinks from "@/app/ui/dashboard/nav-links";

export default function Footer() {
  return (
    <div className="z-10">
      <div className="flex w-[100%] h-[80%] p-4 pl-1 justify-between bg-[#c0c0c0]">
        <div className="w-[60%]">
          <div className="bg-transparent">
            <Image
              src="/saralschool.png"
              style={{ mixBlendMode: "multiply" }}
              width={230}
              height={230}
              alt="logo"
            />
            <p className="ml-4 text-md mt-[-15px]">
              Empowering minds to reach for the stars, one lesson at a time.
            </p>
          </div>
          <div className="flex mt-5 ml-4 text-xl">
            <FaFacebookF className="mr-5 hover:text-[#3b53b3]" />
            <FaTwitter className="mr-5 hover:text-[#3b53b3]" />
            <FaLinkedinIn className="mr-5 hover:text-[#3b53b3]" />
            <FaInstagram className="mr-5 hover:text-[#3b53b3]" />
          </div>
        </div>
        <div className="flex justify-between w-[35%]">
          <div className="flex flex-col justify-evenly text-lg font-medium ">
            <Link href="/" className="hover:text-[#3b53b3]">
              About Us
            </Link>
            <Link href="/home/courses" className="hover:text-[#3b53b3]">
              Our Courses
            </Link>
            <Link href="/home/mentor" className="hover:text-[#3b53b3]">
              Our Mentors
            </Link>
            <Link href="/CounsellingRequest" className="hover:text-[#3b53b3]">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col justify-evenly">
            <h1 className="text-md font-medium">Email</h1>
            <div className="pl-1 pt-1">
              <h2 className="text-sm font-normal">For Enquiry</h2>
              <Link
                href="mailto:edu@saralgroups.com"
                className="text-sm font-light hover:text-[#3b53b3]"
              >
                edu@saralgroups.com
              </Link>
            </div>
            <div className="pl-1 pt-1">
              <h2 className="text-sm font-normal">For Scholarship</h2>
              <Link
                href="mailto:sholarship@saralgroups.com"
                className="text-sm font-light hover:text-[#3b53b3]"
              >
                sholarship@saralgroups.com
              </Link>
            </div>
            <h1 className="text-md font-medium mt-2">Phone Number</h1>
            <p className="font-light pl-1 hover:text-[#3b53b3] cursor-pointer">
              +91 7827216955
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#3b53b3] text-white h-[100px] p-4">
        <div className="flex justify-between">
          <h1 className="text-lg w-[30%]">
            ©️2024, Saral School, All rights reserved.
          </h1>
          <div className="flex w-[40%] justify-evenly">
            <h1 className="hover:text-black cursor-pointer">
              <Link href="/RefundPolicy">Refund Policy</Link>
            </h1>
            <h1>|</h1>
            <h1 className="hover:text-black cursor-pointer">
              <Link href="/PrivacyPolicy">Privacy Policy</Link>
            </h1>
            <h1>|</h1>
            <h1 className="hover:text-black cursor-pointer">
              <Link href="/TermsCondition">Terms and Conditions</Link>
            </h1>
          </div>
        </div>
        <h1 className="flex justify-end mt-5 font-semibold">
          Made with ❤️ by SaralTech
          <span className="text-black">™</span>
        </h1>
      </div>
    </div>
  );
}
