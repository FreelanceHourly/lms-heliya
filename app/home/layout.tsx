import Navbar from "@/app/ui/dashboard/sidenav";
import Footer from "../ui/dashboard/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-col w-full ">
      <div className="flex-none fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="flex-none w-full">{children}</div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
}
