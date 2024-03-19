import { fetchCourses } from "@/app/lib/data";
import Table from "@/app/ui/invoices/table";
import Master from "@/app/ui/invoices/master";
import Filter from "@/app/ui/Filters/page";
import { useState } from "react";
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) 
{
  const query = searchParams?.query || "";

  const { data: courses } = await fetchCourses(query);
  
  return (
 
  
  

    <div className="w-full flex flex-col max-lg:items-center  lg:flex-row">
    <Filter />
      <div
        className="pt-5 md:pt-20 h-[100vh] overflow-y-auto w-[100%] mt-2"
        style={{
          overflowX: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <Master courses={courses} />
        <Table courses={courses} />
      </div>
    </div>
     
  );
}
