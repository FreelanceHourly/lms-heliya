import About from "@/app/ui/about/page";
import Becomemember from "@/app/ui/becomemember/page";

export default async function Page() {
  return (
    <main>
      <div className="grid gap-6 ">
        <About />
        <Becomemember/>
      </div>
    </main>
  );
}