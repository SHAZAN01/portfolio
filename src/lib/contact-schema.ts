import { z } from "zod";

export const TOPICS = [
  "Job or internship",
  "Full-time opportunity",
  "Founding engineer role",
  "Co-founder conversation",
  "Research collaboration",
  "Project collaboration",
  "Something else",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  topic: z.enum(TOPICS, { message: "Please choose a topic." }),
  company: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(20, "A couple of sentences helps me reply well (20+ characters).").max(4000, "Please keep it under 4000 characters."),
  website: z.string().max(0).optional().default(""), // honeypot: must stay empty
});

export type ContactInput = z.infer<typeof contactSchema>;
