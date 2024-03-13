import { fetch9thCourses } from "@/app/lib/data";
import Filter from "@/app/ui/Filters/page";
import SideCoursesTable from "@/app/ui/invoices/sideCoursesTable";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const { data: courses } = await fetch9thCourses(query);
  return (
    <div className="w-full flex">
      <Filter />
      <div
        className="pt-20 h-[100vh] overflow-y-auto "
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#7f7f7f transparent",
        }}
      >
        <h1 className="text-center text-4xl font-bold">9th Courses</h1>
        <SideCoursesTable courses={courses} />
      </div>
    </div>
  );
}
