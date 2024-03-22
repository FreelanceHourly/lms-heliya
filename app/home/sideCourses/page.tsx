import { useState } from "react";
import { fetchDynamicCourses } from "@/app/lib/data";
import Filter from "@/app/ui/Filters/page";
import SideCoursesTable from "@/app/ui/invoices/sideCoursesTable";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const [courses, setCourses] = useState<any[]>([]);
  const handleApplyFilter = async (selectedCheckboxes: string[]) => {
    try {
      const { data: fetchedCourses } =
        await fetchDynamicCourses(selectedCheckboxes);
      setCourses(fetchedCourses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      // Handle error
    }
  };
  return (
    <div className="w-full flex">
      <Filter onApplyFilter={handleApplyFilter} />
      <div
        className="pt-20 h-[100vh] overflow-y-auto w-[100%] mt-4"
        style={{
          overflowX: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <SideCoursesTable courses={courses} />
      </div>
    </div>
  );
}
