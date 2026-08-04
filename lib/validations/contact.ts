import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required").max(80),
  lastName: z.string().min(2, "Last name is required").max(80),
  company: z.string().min(2, "Company is required").max(120),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone").max(30),
  country: z.string().min(2, "Country is required").max(80),
  service: z.string().min(2, "Select a service"),
  budget: z.string().min(1, "Select a budget range"),
  timeline: z.string().min(1, "Select a timeline"),
  subject: z.string().min(5, "Subject is required").max(160),
  message: z.string().min(20, "Please provide more detail").max(5000),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
  newsletter: z.boolean().optional(),
  website: z.string().max(0).optional(), // honeypot
  recaptchaToken: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email"),
  website: z.string().max(0).optional(),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
