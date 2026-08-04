"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { company } from "@/lib/content/company";
import { navigation } from "@/lib/content/site";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const megaGroups = [
  { key: "company", label: "Company", items: navigation.company },
  { key: "services", label: "Services", items: navigation.services },
  { key: "industries", label: "Industries", items: navigation.industries },
  { key: "insights", label: "Insights", items: navigation.insights },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={company.logo}
            alt={`${company.name} logo`}
            width={48}
            height={48}
            className="size-10 object-contain md:size-12"
            priority
          />
          <div className="leading-tight">
            <span className="font-display block text-base font-semibold tracking-tight sm:text-lg md:text-xl">
              SN <span className="text-gradient-brand">Factory</span>
            </span>
            <span className="hidden text-[10px] tracking-[0.18em] text-muted-foreground uppercase sm:block">
              {company.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {megaGroups.map((group) => (
            <div
              key={group.key}
              className="relative"
              onMouseEnter={() => setActiveMega(group.key)}
              onMouseLeave={() => setActiveMega(null)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-muted hover:text-foreground"
                aria-expanded={activeMega === group.key}
              >
                {group.label}
                <ChevronDown className="size-3.5 opacity-60" />
              </button>
              <AnimatePresence>
                {activeMega === group.key ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 z-50 w-[340px] -translate-x-1/2 pt-3"
                  >
                    <div className="glass rounded-2xl p-3">
                      <ul className="space-y-1">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block rounded-xl px-3 py-2.5 transition hover:bg-muted"
                              onClick={() => setActiveMega(null)}
                            >
                              <span className="block text-sm font-semibold">{item.title}</span>
                              <span className="block text-xs text-muted-foreground">
                                {item.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
          <Link
            href="/careers"
            className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-muted hover:text-foreground"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand-pink/20 transition hover:opacity-95"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-11 min-h-11 min-w-11 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background lg:hidden"
          >
            <div className="max-h-[calc(100vh-4rem)] space-y-4 overflow-y-auto px-4 py-6">
              {megaGroups.map((group) => (
                <div key={group.key}>
                  <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    {group.label}
                  </p>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-xl px-3 py-2.5 hover:bg-muted"
                          onClick={() => setOpen(false)}
                        >
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-col gap-2 border-t border-border pt-4">
                <Link
                  href="/careers"
                  className="rounded-xl px-3 py-2.5 font-medium hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-4 py-3 font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
