import Image from "next/image";
import ScholarshipForm from "../ui/scholarship-form";


export default function ScholarshipRequest() {
  return (
    <main className="flex items-center justify-center mt-3 mb-4 ">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col p-1  border-black border-2">
       
        <div className="w-32 text-white md:w-36 ">
          <Image
            src="/saralschool.png"
            width={400}
            height={400}
            className="hidden md:block"
            alt="logo"
          />
        </div>
        <ScholarshipForm />
      </div>
    </main>
  );
}