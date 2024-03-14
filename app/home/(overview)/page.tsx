import About from "@/app/ui/about/page";
import Becomemember from "@/app/ui/becomemember/page";

export default async function Page() {
  return (
    <main className="w-full mt-24  overflow-x-hidden overscroll-x-none ">
        <About />
        <Becomemember />
    </main>
  );
}
