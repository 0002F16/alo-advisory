"use client";

import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FormEvent, useId, useState } from "react";

type Status = "idle" | "submitting" | "success";

interface FieldErrors {
  name?: string;
  company?: string;
  email?: string;
  jurisdiction?: string;
  description?: string;
}

const JURISDICTION_OPTIONS = [
  { value: "", label: "Select jurisdiction" },
  { value: "saudi", label: "Saudi Arabia" },
  { value: "uae", label: "United Arab Emirates (DIFC / ADGM)" },
  { value: "both", label: "Saudi Arabia & UAE" },
  { value: "other", label: "Other / not yet defined" }
];

export default function ContactPageArchived() {
  return (
    <>
      <PageSection
        id="contact"
        aria-label="Contact ALO Advisory Group"
        borderedTop
      >
        <div className="relative">
          <div className="relative grid gap-10 md:gap-12 lg:gap-16 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] items-start">
            <Reveal className="panel p-6 sm:p-7 md:p-8 space-y-6">
              <ContactForm />
            </Reveal>
            <Reveal delay={80} className="panel p-6 sm:p-7 md:p-8">
              <WhatToPreparePanel />
            </Reveal>
          </div>
        </div>
      </PageSection>
      <SiteFooter />
    </>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const formId = useId();

  const isDisabled = status === "submitting" || status === "success";

  function validate() {
    const nextErrors: FieldErrors = {};

    if (!name.trim()) nextErrors.name = "Required";
    if (!company.trim()) nextErrors.company = "Required";
    if (!email.trim()) {
      nextErrors.email = "Required";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      nextErrors.email = "Enter a valid email";
    }
    if (!jurisdiction) nextErrors.jurisdiction = "Select a jurisdiction";
    if (!description.trim()) {
      nextErrors.description = "Add a brief description";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (isDisabled) return;

    const ok = validate();
    if (!ok) return;

    setStatus("submitting");

    // Simulate a short client-side submit delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("success");
  }

  return (
    <form
      aria-labelledby={`${formId}-title`}
      noValidate
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-3">
        <p className="text-[0.7rem] tracking-[0.26em] uppercase text-alo-muted">
          Contact
        </p>
        <h1
          id={`${formId}-title`}
          className="text-2xl sm:text-3xl md:text-[32px] font-serif"
        >
          Share the outline. We’ll respond with structure.
        </h1>
        <p className="text-sm sm:text-[0.95rem] text-alo-muted max-w-xl">
          Tell us a bit about your challenges and GCC ambitions.
        </p>
      </div>

      {status === "success" ? (
        <div
          role="status"
          className="rounded-lg border border-alo-gold/60 bg-alo-gold/5 px-4 py-3 text-sm text-alo-text"
        >
          Thanks. We'll review and respond to the email you provided.
        </div>
      ) : null}

      <div className="space-y-4">
        <Field
          label="Name"
          id={`${formId}-name`}
          required
          error={errors.name}
        >
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            className={inputClassName(errors.name)}
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={isDisabled}
          />
        </Field>

        <Field
          label="Company"
          id={`${formId}-company`}
          required
          error={errors.company}
        >
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClassName(errors.company)}
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            disabled={isDisabled}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <Field
          label="Email"
          id={`${formId}-email`}
          required
          error={errors.email}
        >
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            className={inputClassName(errors.email)}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={isDisabled}
          />
        </Field>

        <Field
          label="Jurisdiction interest"
          id={`${formId}-jurisdiction`}
          required
          error={errors.jurisdiction}
          hint="If uncertain, choose the closest option."
        >
          <select
            id={`${formId}-jurisdiction`}
            name="jurisdiction"
            className={inputClassName(errors.jurisdiction)}
            value={jurisdiction}
            onChange={(event) => setJurisdiction(event.target.value)}
            disabled={isDisabled}
          >
            {JURISDICTION_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label="Brief description"
        id={`${formId}-description`}
        required
        error={errors.description}
        hint="FCA position, activities, and GCC intent."
      >
        <textarea
          id={`${formId}-description`}
          name="description"
          rows={5}
          className={inputClassName(errors.description) + " resize-none"}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          disabled={isDisabled}
        />
      </Field>

      <Button type="submit" disabled={isDisabled} className="w-full">
        {status === "submitting" ? "Sending…" : "Start the conversation"}
      </Button>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

function Field({ id, label, required, error, hint, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="flex items-center gap-1 text-xs tracking-[0.2em] uppercase text-alo-muted"
      >
        <span>{label}</span>
        {required ? <span className="text-alo-gold">*</span> : null}
      </label>
      {children}
      {hint ? (
        <p className="text-[0.7rem] text-alo-muted/80">{hint}</p>
      ) : null}
      {error ? (
        <p className="text-[0.7rem] text-red-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClassName(hasError?: string) {
  const base =
    "w-full rounded-md border bg-[#050c0f] px-3 py-2 text-sm text-alo-text placeholder:text-alo-muted/50";
  const focus =
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-alo-gold focus-visible:border-alo-gold";
  const transition = "transition-colors duration-slow ease-linear";
  const border = hasError
    ? "border-red-400/70"
    : "border-white/15 hover:border-white/25";

  return [base, border, focus, transition].join(" ");
}

function WhatToPreparePanel() {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-2">
        <p className="text-[0.7rem] tracking-[0.26em] uppercase text-alo-muted">
          What to prepare
        </p>
        <h2 className="text-lg sm:text-xl md:text-[22px] font-serif">
          A short brief is enough.
        </h2>
        <div
          className="h-px w-10 bg-alo-gold/80"
          aria-hidden="true"
        />
      </div>

      <p className="text-sm sm:text-[0.95rem] text-alo-muted">
        Simple outline on the points below. We respond with feasibility and next steps.
      </p>

      <ul className="space-y-4 text-sm sm:text-[0.95rem]">
        <li className="space-y-1.5">
          <p className="font-medium text-alo-text">FCA status</p>
          <p className="text-alo-muted">Your authorisations and whether you're a principal or AR.</p>
        </li>
        <li className="space-y-1.5">
          <p className="font-medium text-alo-text">Activity scope</p>
          <p className="text-alo-muted">Activities and client segments in GCC markets.</p>
        </li>
        <li className="space-y-1.5">
          <p className="font-medium text-alo-text">Structure chart</p>
          <p className="text-alo-muted">Legal and operating structure, branches, subsidiaries.</p>
        </li>
      </ul>

      <p className="text-[0.75rem] text-alo-muted/80 border-t border-white/5 pt-4">
        Used only to assess fit. Not formal legal, tax or regulatory advice.
      </p>
    </div>
  );
}

