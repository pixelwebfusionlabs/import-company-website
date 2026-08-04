"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Upload } from "lucide-react";
import { toast } from "sonner";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

const inquiryTypes = [
  "Vehicle Parts",
  "Elevators",
  "Hoists",
  "Home Accessories",
  "Commercial Supply",
  "Installation",
  "Maintenance",
  "Bulk Orders",
  "General Inquiry",
];

const budgets = [
  "Under $10,000",
  "$10,000 – $50,000",
  "$50,000 – $150,000",
  "$150,000 – $500,000",
  "$500,000+",
  "Not sure yet",
];

const timelines = [
  "ASAP / Urgent",
  "1 – 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "Exploring only",
];

const fieldClass =
  "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20";

export function ContactForm() {
  const [fileName, setFileName] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      newsletter: false,
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message");
      toast.success("Message sent. We will reply within one business day.");
      reset();
      setFileName(null);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" error={errors.firstName?.message}>
          <input className={fieldClass} {...register("firstName")} autoComplete="given-name" />
        </Field>
        <Field label="Last name" error={errors.lastName?.message}>
          <input className={fieldClass} {...register("lastName")} autoComplete="family-name" />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" error={errors.company?.message}>
          <input className={fieldClass} {...register("company")} autoComplete="organization" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input type="email" className={fieldClass} {...register("email")} autoComplete="email" />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" error={errors.phone?.message}>
          <input className={fieldClass} {...register("phone")} autoComplete="tel" />
        </Field>
        <Field label="Country" error={errors.country?.message}>
          <input className={fieldClass} {...register("country")} autoComplete="country-name" />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Field label="Inquiry type" error={errors.service?.message}>
          <select className={fieldClass} {...register("service")} defaultValue="">
            <option value="" disabled>
              Select inquiry type
            </option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget" error={errors.budget?.message}>
          <select className={fieldClass} {...register("budget")} defaultValue="">
            <option value="" disabled>
              Select budget
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Timeline" error={errors.timeline?.message}>
          <select className={fieldClass} {...register("timeline")} defaultValue="">
            <option value="" disabled>
              Select timeline
            </option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Subject" error={errors.subject?.message}>
        <input className={fieldClass} {...register("subject")} />
      </Field>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          rows={5}
          className={cn(fieldClass, "h-auto py-3")}
          {...register("message")}
        />
      </Field>

      <div>
        <label className="mb-2 block text-sm font-medium">Attachment (optional)</label>
        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted-foreground transition hover:border-brand-pink/50">
          <Upload className="size-4" />
          <span>{fileName || "Upload RFQ, specs, or packing list"}</span>
          <input
            type="file"
            className="sr-only"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          />
        </label>
        <p className="mt-1 text-xs text-muted-foreground">
          Files are noted with your inquiry. Max practical size 10MB.
        </p>
      </div>

      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
        {...register("website")}
      />

      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" className="mt-1 size-4 rounded border-border" {...register("consent")} />
        <span>
          I agree to the processing of my data as described in the{" "}
          <a href="/privacy" className="font-medium text-brand-pink underline-offset-2 hover:underline">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      {errors.consent ? (
        <p className="text-sm text-destructive">{errors.consent.message}</p>
      ) : null}

      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" className="mt-1 size-4 rounded border-border" {...register("newsletter")} />
        <span>Send me product updates and service offers.</span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-brand text-sm font-semibold text-white shadow-lg shadow-brand-pink/20 transition hover:opacity-95 disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : null}
        Send message
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      {children}
      {error ? <p className="mt-1.5 text-sm text-destructive">{error}</p> : null}
    </div>
  );
}
