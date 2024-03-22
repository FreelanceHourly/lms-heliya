"use client";
import { useFormState } from "react-dom";
import { buyrequest } from "@/app/lib/buy-requests";
import { lusitana } from "@/app/ui/fonts";
import {
  AtSymbolIcon,
  PhoneIcon,
  UserIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./button";
import Link from "next/link";

export default function BuyForm({ onClose }: { onClose: () => void }) {
  const initialState = {};
  const [state, dispatch] = useFormState(buyrequest, initialState);
  return (
    <form className="space-y-1 mt-2 mr-3" action={dispatch}>
      <div className="flex-1 rounded-lg bg-gray-50 px-4">
        <h1 className={`${lusitana.className} mb-2 text-xl`}>
          Pave your path to success with our courses!
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-1 mt-3 block text-sm font-medium text-gray-900"
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[7px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div>
            <label
              className="mb-1 mt-3 block text-sm font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[7px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div>
            <label
              className="mb-1 mt-3 block text-sm font-medium text-gray-900"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[7px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="phoneNumber"
                type="string"
                name="phoneNumber"
                placeholder="Enter your phone number"
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div>
            <label
              className="mb-1 mt-3 block text-sm font-medium text-gray-900"
              htmlFor="description"
            >
              Description
            </label>
            <div className="relative">
              <textarea
                className="peer block w-full rounded-md border border-gray-200 py-[7px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="description"
                rows={3}
                name="description"
                placeholder="Any queries"
              />
              <PencilSquareIcon className="pointer-events-none absolute left-3 h-[18px] w-[18px] mt-[-67px] text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <BuyButton />
        <div className="flex h-8 items-end space-x-1">
          {state?.message ? (
            <div
              id="customer-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              <p>{state.message}</p>
            </div>
          ) : null}
        </div>
      </div>
    </form>
  );
}

function BuyButton() {
  return (
    <Button className="mt-6 w-full">
      Buy Now
      <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
