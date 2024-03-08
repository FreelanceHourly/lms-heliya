"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  phoneNumber: z.string().min(1).max(10),
  whyThisProgram: z.string().min(10).max(1000),
  currentAchievements: z.string().min(10).max(1000),
  resumeProposal: z.string().min(10).max(1000),
});

export async function scholarshiprequest(prevState: any, formData: any) {
  const STRAPI_URL = process.env.STRAPI_URL;
  if (!STRAPI_URL) throw new Error("Missing STRAPI_URL environment variable.");
  const url = `${STRAPI_URL}/api/scholarship-enquiries`;

  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    whyThisProgram: formData.get("whyThisProgram"),
    currentAchievements: formData.get("currentAchievements"),
    resumeProposal: formData.get("resumeProposal"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to apply.",
    };
  }

  const { name, email, phoneNumber, whyThisProgram, currentAchievements, resumeProposal } = validatedFields.data;

  const review = { name, email, phoneNumber, whyThisProgram, currentAchievements, resumeProposal };

  try {
    const response: any = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({data:{name:name, email:email, phoneNumber:phoneNumber, whyThisProgram: whyThisProgram, currentAchievements:currentAchievements,resumeProposal: resumeProposal }}),
      cache: "no-cache",
    });

    const data = await response.json();
    if (!response.ok && data.error)
      return { ...prevState, message: data.error.message, errors: null };
    if (response.ok && data.jwt) cookies().set("jwt", data.jwt);
  } catch (error) {
    console.log(error);
    return { error: "Server error please try again later." };
  }
  redirect("/home/courses");
}
