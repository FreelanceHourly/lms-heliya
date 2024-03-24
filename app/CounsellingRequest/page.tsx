// import RegisterForm from "@/app/ui/register-form";
import Image from "next/image";
import CounsellingForm from "../ui/counselling-form";

export default function CounsellingRequest() {
  return (
    <main className="flex items-center justify-center mt-5 mb-5 ">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4  border-black border-2">
       
        <div className="w-32 text-white md:w-36 ">
          <Image
            src="/heliya_lms.png"
            width={400}
            height={400}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          </div>
        <CounsellingForm />
      </div>
    </main>
  );
}