"use client";
import { useFormState } from "react-dom";
import { buyrequest } from "@/app/lib/buy-requests";
import { lusitana } from "@/app/ui/fonts";
import { AtSymbolIcon, PhoneIcon, UserIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./button";
import Link from "next/link";

export default function ScholarshipForm() {
  const initialState = {};
  const [state, dispatch] = useFormState(buyrequest, initialState);
  return (
    <form className="space-y-3" action={dispatch}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Unlock your potential with our scholarship opportunities!
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state?.errors?.name ? (
              <div
                id="customer-error"
                aria-live="polite"
                className="mt-2 text-sm text-red-500"
              >
                {state.errors.name.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state?.errors?.email ? (
              <div
                id="customer-error"
                aria-live="polite"
                className="mt-2 text-sm text-red-500"
              >
                {state.errors.email.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="phoneNumber"
                type="string"
                name="phoneNumber"
                placeholder="Enter your phone number"
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state?.errors?.phoneNumber ? (
              <div
                id="customer-error"
                aria-live="polite"
                className="mt-2 text-sm text-red-500"
              >
                {state.errors.phoneNumber.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="whyThisProgram"
            >
              Why you wanted to join this program? * (100 Points)
            </label>
            <div className="relative">
              <textarea
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="whyThisProgram"
                rows={4}
                name="whyThisProgram"
                placeholder="how can this course help you"
              />
              <PencilSquareIcon className="pointer-events-none absolute left-3 top-1/4 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state?.errors?.whyThisProgram ? (
              <div
                id="customer-error"
                aria-live="polite"
                className="mt-2 text-sm text-red-500"
              >
                {state.errors.whyThisProgram.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="currentAchievements"
            >
              What are your current achievements? * (50 Points)
            </label>
            <div className="relative">
              <textarea
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="currentAchievements"
                rows={4}
                name="currentAchievements"
                placeholder="how can this course help you"
              />
              <PencilSquareIcon className="pointer-events-none absolute left-3 top-1/4 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state?.errors?.currentAchievements ? (
              <div
                id="customer-error"
                aria-live="polite"
                className="mt-2 text-sm text-red-500"
              >
                {state.errors.currentAchievements.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="resumeProposal"
            >
              Link for Resume/Proposal (100 Points)
            </label>
            <div className="relative">
              <textarea
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="resumeProposal"
                rows={4}
                name="resumeProposal"
                placeholder="how can this course help you"
              />
              <PencilSquareIcon className="pointer-events-none absolute left-3 top-1/4 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state?.errors?.resumeProposal ? (
              <div
                id="customer-error"
                aria-live="polite"
                className="mt-2 text-sm text-red-500"
              >
                {state.errors.resumeProposal.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <ScholarshipButton />
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
        <Link className="text-muted text-gray-400" href="/home/courses">
          back
        </Link>
      </div>
    </form>
  );
}

function ScholarshipButton() {
  return (
    <Button className="mt-4 w-full">
      Apply Now<ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}