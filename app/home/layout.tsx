import SideNav from "@/app/ui/dashboard/sidenav";
import Footer from "../ui/dashboard/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-col ">
      <div className="flex-none">
        <SideNav/>
      </div>
      <div className="pt-24 px-6">{children}</div>
      <div className="mt-4"><Footer/></div>
    </div>
  );
}
