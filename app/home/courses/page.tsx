import { fetchCourses } from "@/app/lib/data";
import Table from "@/app/ui/invoices/table";
import Master from "@/app/ui/invoices/master";
import Filter from "@/app/ui/Filters/page";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

  const { data: courses } = await fetchCourses(query);
  return (
    <div className="w-full flex">
      <Filter />
      <div
        className="pt-20 h-[100vh] overflow-y-auto w-[100%]"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#7f7f7f transparent",
        }}
      >
        <Master courses={courses} />
        <Table courses={courses} />
      </div>
    </div>
  );
}
