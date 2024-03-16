import { fetchGovtCourses } from "@/app/lib/data";
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
  const { data: courses } = await fetchGovtCourses(query);
  return (
    <div className="w-full flex">
      <Filter />
      <div
        className="pt-20 h-[100vh] overflow-y-auto w-[100%] mt-4"
        style={{
          overflowX: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <h1 className="text-center text-4xl font-bold">Government Courses</h1>
        <SideCoursesTable courses={courses} />
      </div>
    </div>
  );
}
