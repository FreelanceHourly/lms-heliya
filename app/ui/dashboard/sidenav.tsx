// SideNav.tsx
import Link from 'next/link';
import Image from 'next/image';
import { PowerIcon } from '@heroicons/react/24/outline';
import { logoutAction } from '@/app/lib/auth/logout-action';
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function SideNav() {
  return (
    <nav className="bg-white pl-3 flex-col fixed top-0 w-full z-10">
      <div className="flex items-center justify-between">
        <div className='flex items-center'>
          <Link href="/">
            <div className="mr-4">
              <Image
                src="/saralschool.png"
                width={230}
                height={230}
                alt="logo"
              />
            </div>
          </Link>
          <div className='flex w-[60%] justify-evenly items-start pl-10'><NavLinks /></div>
        </div>
        <form
          action={async () => {
            'use server';
            await logoutAction();
          }}
        >
          <button className="flex items-center justify-center gap-2 rounded-md p-3 text-lg font-large hover:text-red-600 pr-10">
            <PowerIcon className="w-6" />
            <span className="md:block">Sign In</span>
          </button>
        </form>
      </div>
    </nav>
  );
}
