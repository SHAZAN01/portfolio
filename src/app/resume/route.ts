import { redirect } from "next/navigation";
import { profile } from "@/content/profile";

export function GET() {
  redirect(profile.resumeUrl);
}
