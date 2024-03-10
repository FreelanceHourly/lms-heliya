"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/home" },
  {
    name: "Courses",
    href: "/home/courses",
  },
  {
    name: "Mentors",
    href: "/home/mentor",
  },
  {
    name: "Request Callback",
    href: "/CounsellingRequest",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[42px] grow items-center justify-center gap-2 rounded-md p-3 ml-7 text-lg font-large hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "text-blue-600": pathname === link.href,
              }
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
