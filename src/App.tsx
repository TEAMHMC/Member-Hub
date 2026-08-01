import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ChevronRight,
  HeartPulse,
  Home,
  Info,
  MapPin,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

import { LogIn, Phone, X } from "lucide-react";

// shadcn/ui-style primitives
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

// Live backend wiring (real endpoints, no Airtable)
import {
  useVisitorContext,
  useNextActions,
  useEvents,
  useClientSession,
} from "@/lib/hooks";
import {
  context as ctxApi,
  client as clientApi,
  referrals as referralsApi,
  type NextAction,
  type HmcEvent,
} from "@/lib/api";

/**
 * HELPING+HEALING HUB — Production UI Mock (single-file)
 *
 * Updates requested:
 * - ASICS-level motion polish (no new content)
 * - Hero → Step 1 only (no cards below fold until user acts)
 * - HubLanding becomes scroll chapters (single “chapter” per scroll)
 * - Optional scroll-lock between chapters
 * - Donate behavior: modal OR direct redirect
 */

type PillTone = "blue" | "orange" | "yellow" | "neutral";

type Route =
  | { name: "hub" }
  | { name: "screenings" }
  | { name: "daily-needs" }
  | { name: "unstoppable" }
  | { name: "partners" }
  | { name: "checkin"; step: number };

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

const COLORS = {
  blue: "#233DFF",
  orange: "#FF6E40",
  yellow: "#F9C74F",
  pink: "#FF6F91",
};

// Donate behavior
const DONATE_MODE: "modal" | "redirect" = "modal";
const DONATE_URL = "https://www.healthmatters.clinic/donate";

// ASICS-like chapter pacing (optional cinematic)
const LOCK_SCROLL_BETWEEN_STEPS = true;

function Pill({
  tone = "neutral",
  icon: Icon,
  children,
  className,
}: {
  tone?: PillTone;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  className?: string;
}) {
  const toneClass =
    tone === "blue"
      ? "bg-[rgba(35,61,255,.10)] text-[rgb(35,61,255)] border-[rgba(35,61,255,.18)]"
      : tone === "orange"
        ? "bg-[rgba(255,110,64,.12)] text-[rgb(255,110,64)] border-[rgba(255,110,64,.20)]"
        : tone === "yellow"
          ? "bg-[rgba(249,199,79,.18)] text-[rgb(120,80,0)] border-[rgba(249,199,79,.28)]"
          : "bg-[rgba(15,15,15,.04)] text-zinc-800 border-[rgba(15,15,15,.10)]";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        toneClass,
        className
      )}
    >
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      <span className="leading-none">{children}</span>
    </span>
  );
}

function SoftIcon({
  icon: Icon,
  tone = "neutral",
}: {
  icon: React.ComponentType<{ className?: string }>;
  tone?: PillTone;
}) {
  const ringClass =
    tone === "blue"
      ? "border-[rgba(35,61,255,.18)] bg-[rgba(35,61,255,.06)]"
      : tone === "orange"
        ? "border-[rgba(255,110,64,.20)] bg-[rgba(255,110,64,.06)]"
        : tone === "yellow"
          ? "border-[rgba(249,199,79,.28)] bg-[rgba(249,199,79,.08)]"
          : "border-[rgba(15,15,15,.10)] bg-[rgba(15,15,15,.03)]";

  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-2xl border",
        ringClass
      )}
    >
      <Icon className="h-5 w-5 text-zinc-800" />
    </span>
  );
}

function GradientBg({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(35,61,255,.06),white_40%)]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
}

function useScrollToId() {
  return React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
}

function useInViewOnce<T extends HTMLElement>() {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView } as const;
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.2, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function SectionTitle({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h3 className="text-base font-semibold tracking-tight text-zinc-900">{title}</h3>
        <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>
      </div>
      {right ? <div className="flex items-center gap-2">{right}</div> : null}
    </div>
  );
}

function TopBar({
  onDonate,
  onSupport,
}: {
  onDonate: () => void;
  onSupport: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(15,15,15,.10)] bg-white shadow-sm">
          <span className="text-sm font-semibold tracking-tight text-zinc-900">H+</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
              Helping+Healing Hub
            </h1>
            <Pill tone="blue" icon={ShieldCheck}>
              Safe & private
            </Pill>
          </div>
          <p className="mt-1 text-sm text-zinc-600">
            Start where you are. We’ll help you find your next step.
          </p>
        </div>
      </div>

      <div className="flex w-full items-center gap-2 sm:w-auto">
        <div className="relative w-full sm:w-[360px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <Input
            className="h-11 rounded-2xl border-[rgba(15,15,15,.10)] bg-white pl-9 text-zinc-900 placeholder:text-zinc-500"
            placeholder="Search resources, events, or tools…"
          />
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Button
            onClick={onSupport}
            className="h-11 rounded-2xl bg-[#233DFF] text-white hover:bg-[#1f35e6]"
          >
            Get support
          </Button>
          <Button
            onClick={onDonate}
            variant="outline"
            className="h-11 rounded-2xl border-[rgba(15,15,15,.12)] bg-transparent text-zinc-900 hover:bg-transparent"
          >
            Donate now
          </Button>
        </div>
      </div>
    </div>
  );
}

function Hero({
  onStart,
  onDonate,
}: {
  onStart: () => void;
  onDonate: () => void;
}) {
  // Hero → Step 1 only (no extra cards below fold)
  return (
    <Card className="rounded-2xl border-[rgba(15,15,15,.10)] bg-white shadow-sm overflow-hidden">
      <CardContent className="p-6 sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="neutral">One step at a time</Pill>
            <Pill tone="blue">No pressure</Pill>
            <Pill tone="neutral" icon={ShieldCheck}>
              Your choice
            </Pill>
          </div>

          <h2 className="mt-4 text-[22px] sm:text-[28px] font-semibold tracking-tight text-zinc-900">
            Get support. Find care. Feel steadier.
          </h2>

          {/* underline sweep */}
          <div className="mt-2 h-[2px] w-full max-w-[300px] rounded-full bg-[rgba(15,15,15,.06)] overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: COLORS.blue }}
              initial={{ width: "0%" }}
              animate={{ width: "62%" }}
              transition={{ duration: 0.26, ease: "easeOut", delay: 0.05 }}
            />
          </div>

          <p className="mt-5 max-w-xl text-sm text-zinc-600">
            Skip the questionnaires if you want. You can still find events, screenings,
            and tools.
          </p>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button
              onClick={onStart}
              className="h-11 rounded-2xl bg-[#233DFF] text-white hover:bg-[#1f35e6]"
            >
              Start here
            </Button>
            <Button
              onClick={onDonate}
              variant="outline"
              className="h-11 rounded-2xl border-[rgba(15,15,15,.12)] bg-transparent text-zinc-900"
            >
              Donate now
            </Button>
          </div>

          <motion.div
            className="mt-7 inline-flex items-center gap-2 text-sm text-zinc-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18, delay: 0.18 }}
          >
            <SoftIcon icon={ChevronRight} tone="neutral" />
            <span>Start here to open the hub.</span>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
}

function StickyMiniNav({ onGo }: { onGo: (id: string) => void }) {
  return (
    <div className="sticky top-4 z-20">
      <div className="rounded-full border border-[rgba(15,15,15,.10)] bg-white/80 backdrop-blur px-2 py-1 shadow-sm">
        <div className="flex flex-wrap items-center gap-1">
          {[
            { id: "checkin", label: "Check-in" },
            { id: "tools", label: "Tools" },
            { id: "events", label: "Events" },
            { id: "care", label: "Care" },
          ].map((x) => (
            <button
              key={x.id}
              onClick={() => onGo(x.id)}
              className="rounded-full px-3 py-1 text-xs font-medium text-zinc-700 hover:bg-[rgba(15,15,15,.04)]"
            >
              {x.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function useChapterScrollLock({
  enabled,
  containerRef,
}: {
  enabled: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const animatingRef = React.useRef(false);

  React.useEffect(() => {
    if (!enabled) return;
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Heuristic: don’t force-lock on coarse pointers (most phones)
    const coarse = window.matchMedia?.("(pointer: coarse)").matches;
    if (coarse) return;

    const sections = Array.from(el.querySelectorAll<HTMLElement>("[data-chapter='true']"));
    if (sections.length === 0) return;

    const snapToIndex = (idx: number) => {
      const clamped = Math.max(0, Math.min(sections.length - 1, idx));
      const target = sections[clamped];
      if (!target) return;
      animatingRef.current = true;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => {
        animatingRef.current = false;
      }, 520);
    };

    const currentIndex = () => {
      const top = el.getBoundingClientRect().top;
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      sections.forEach((s, i) => {
        const d = Math.abs(s.getBoundingClientRect().top - top);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      return best;
    };

    const onWheel = (e: WheelEvent) => {
      if (animatingRef.current) {
        e.preventDefault();
        return;
      }
      if (Math.abs(e.deltaY) < 8) return;
      e.preventDefault();
      const idx = currentIndex();
      snapToIndex(idx + (e.deltaY > 0 ? 1 : -1));
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel as any);
  }, [enabled, containerRef]);
}

function HubLanding({
  onStartCheckIn,
  onOpenScreenings,
  onOpenDailyNeeds,
  onOpenUnstoppable,
}: {
  onStartCheckIn: () => void;
  onOpenScreenings: () => void;
  onOpenDailyNeeds: () => void;
  onOpenUnstoppable: () => void;
}) {
  const steps = [
    {
      step: 1,
      title: "Start here",
      desc: "Choose the next step that feels right.",
      action: onStartCheckIn,
      label: "Begin",
      tone: "blue" as const,
      icon: HeartPulse,
    },
    {
      step: 2,
      title: "Get support",
      desc: "Daily needs, referrals, and care navigation.",
      action: onOpenDailyNeeds,
      label: "Explore support",
      tone: "orange" as const,
      icon: Home,
    },
    {
      step: 3,
      title: "Find care",
      desc: "Clinics, screenings, and events near you.",
      action: onOpenScreenings,
      label: "View events",
      tone: "neutral" as const,
      icon: Calendar,
    },
    {
      step: 4,
      title: "Unstoppable tools",
      desc: "Calm resets and simple next steps.",
      action: onOpenUnstoppable,
      label: "Open tools",
      tone: "yellow" as const,
      icon: Sparkles,
    },
  ];

  const containerRef = React.useRef<HTMLDivElement>(null);
  useChapterScrollLock({ enabled: LOCK_SCROLL_BETWEEN_STEPS, containerRef });

  return (
    <div className="space-y-6">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="text-[22px] font-semibold tracking-tight text-zinc-900">
            One step at a time
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            You don’t need to do everything. Just take the next step.
          </p>
        </div>
      </Reveal>

      {/* ASICS-style pacing: scroll chapters (no new content) */}
      <div
        ref={containerRef}
        className={cn(
          "rounded-2xl border border-[rgba(15,15,15,.10)] bg-white shadow-sm overflow-hidden",
          "max-h-[78vh] overflow-y-auto",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "snap-y snap-mandatory"
        )}
      >
        {steps.map((s, idx) => (
          <section
            key={s.step}
            data-chapter="true"
            className={cn(
              "snap-start",
              "min-h-[78vh]",
              "flex items-center",
              "px-6 py-10 sm:px-10",
              idx !== steps.length - 1 ? "border-b border-[rgba(15,15,15,.08)]" : ""
            )}
          >
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2">
                    <Pill tone={s.tone}>Step {s.step}</Pill>
                    <Pill tone="neutral" icon={ChevronRight}>
                      Next
                    </Pill>
                  </div>

                  <div className="mt-5 flex items-start gap-3">
                    <SoftIcon icon={s.icon} tone={s.tone} />
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-zinc-900">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600">{s.desc}</p>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.55 }}
                  transition={{ duration: 0.22, ease: "easeOut", delay: 0.02 }}
                >
                  <Button
                    onClick={s.action}
                    className="h-11 rounded-2xl bg-[#233DFF] text-white hover:bg-[#1f35e6]"
                  >
                    {s.label}
                  </Button>
                </motion.div>
              </div>

              {/* subtle chapter progress line (no new content) */}
              <div className="mt-8 h-[2px] w-full rounded-full bg-[rgba(15,15,15,.06)] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: COLORS.blue }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${Math.round(((idx + 1) / steps.length) * 100)}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </section>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm text-zinc-600">
        <Info className="h-4 w-4" />
        <span>Scroll to move step by step.</span>
      </div>
    </div>
  );
}

function HubPage({
  onStartCheckIn,
  onOpenScreenings,
  onOpenDailyNeeds,
  onOpenUnstoppable,
}: {
  onStartCheckIn: () => void;
  onOpenScreenings: () => void;
  onOpenDailyNeeds: () => void;
  onOpenUnstoppable: () => void;
}) {
  const scrollTo = useScrollToId();

  return (
    <div className="space-y-10">
      <StickyMiniNav onGo={scrollTo} />

      <div id="checkin" className="scroll-mt-24">
        <HubLanding
          onStartCheckIn={onStartCheckIn}
          onOpenDailyNeeds={onOpenDailyNeeds}
          onOpenScreenings={onOpenScreenings}
          onOpenUnstoppable={onOpenUnstoppable}
        />
      </div>

      <div id="tools" className="scroll-mt-24">
        <Reveal>
          <Card className="rounded-2xl border-[rgba(15,15,15,.10)] bg-white shadow-sm">
            <CardContent className="p-6">
              <SectionTitle
                title="Quick tools"
                subtitle="Short, calm steps—no questionnaire required."
                right={<Pill tone="neutral">2–3 minutes</Pill>}
              />
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {["Calm Kit", "Game Plan", "Quick Reset"].map((t, i) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-[rgba(15,15,15,.10)] bg-white p-4"
                  >
                    <div className="flex items-start gap-3">
                      <SoftIcon
                        icon={i === 0 ? Sparkles : i === 1 ? MessageSquare : HeartPulse}
                        tone={i === 1 ? "yellow" : "blue"}
                      />
                      <div>
                        <p className="text-sm font-medium text-zinc-900">{t}</p>
                        <p className="mt-1 text-sm text-zinc-600">
                          {i === 0
                            ? "Breathing + grounding."
                            : i === 1
                              ? "A simple next-step plan."
                              : "A quick body check."}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>

      <div id="events" className="scroll-mt-24">
        <Reveal>
          <Card className="rounded-2xl border-[rgba(15,15,15,.10)] bg-white shadow-sm">
            <CardContent className="p-6">
              <SectionTitle
                title="Events & screenings"
                subtitle="Find a screening, clinic, or Unstoppable event near you."
                right={<Pill tone="blue">Near you</Pill>}
              />
              <div className="mt-4 space-y-3">
                {["Pop-up Clinic Screening", "Unstoppable Community Walk", "Resource Navigation Day"].map(
                  (t, i) => (
                    <div
                      key={t}
                      className="flex items-center justify-between rounded-2xl border border-[rgba(15,15,15,.10)] bg-white p-4"
                    >
                      <div className="flex items-center gap-3">
                        <SoftIcon
                          icon={i === 1 ? Sparkles : Calendar}
                          tone={i === 1 ? "yellow" : "neutral"}
                        />
                        <div>
                          <p className="text-sm font-medium text-zinc-900">{t}</p>
                          <p className="mt-1 text-sm text-zinc-600">
                            {i === 0
                              ? "Health screenings + referrals"
                              : i === 1
                                ? "Movement + reflection"
                                : "Care + services"}
                          </p>
                        </div>
                      </div>
                      <Button
                        onClick={onOpenScreenings}
                        variant="outline"
                        className="h-11 rounded-2xl border-[rgba(15,15,15,.12)] bg-transparent text-zinc-900"
                      >
                        View
                      </Button>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>

      <div id="care" className="scroll-mt-24">
        <Reveal>
          <Card className="rounded-2xl border-[rgba(15,15,15,.10)] bg-white shadow-sm">
            <CardContent className="p-6">
              <SectionTitle
                title="Daily needs support"
                subtitle="Housing, food, safety, transportation, and referrals."
                right={<Pill tone="orange">Support</Pill>}
              />
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={onOpenDailyNeeds}
                  className="h-11 rounded-2xl bg-[#233DFF] text-white hover:bg-[#1f35e6]"
                >
                  Explore support
                </Button>
                <Button
                  onClick={onStartCheckIn}
                  variant="outline"
                  className="h-11 rounded-2xl border-[rgba(15,15,15,.12)] bg-transparent text-zinc-900"
                >
                  Start a check-in
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}

function ProgressHeader({
  step,
  total,
  onBack,
  onClose,
}: {
  step: number;
  total: number;
  onBack: () => void;
  onClose: () => void;
}) {
  const pct = Math.max(0, Math.min(100, Math.round((step / total) * 100)));
  return (
    <div className="sticky top-4 z-20">
      <Card className="rounded-2xl border-[rgba(15,15,15,.10)] bg-white/80 backdrop-blur shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-2xl border border-[rgba(15,15,15,.10)] bg-white px-3 py-2 text-sm text-zinc-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <div className="text-sm text-zinc-600">
              Step {step} of {total}
            </div>
            <button
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-[rgba(15,15,15,.10)] bg-white"
              aria-label="Close"
            >
              <span className="text-zinc-700">×</span>
            </button>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-[rgba(15,15,15,.06)] overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${pct}%`, background: COLORS.blue }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function CheckInFlow({
  step,
  onBack,
  onNext,
  onClose,
}: {
  step: number;
  onBack: () => void;
  onNext: () => void;
  onClose: () => void;
}) {
  const total = 4;
  const prompts: Array<{ title: string; desc: string }> = [
    { title: "Quick check-in", desc: "How are you feeling right now?" },
    {
      title: "Daily needs",
      desc: "Do you need help with basics like food, housing, or safety?",
    },
    { title: "Care and support", desc: "Would you like an event, screening, or a referral?" },
    { title: "Your next step", desc: "Pick one thing to do today." },
  ];

  const p = prompts[Math.max(0, Math.min(prompts.length - 1, step - 1))];

  return (
    <div className="space-y-6">
      <ProgressHeader step={step} total={total} onBack={onBack} onClose={onClose} />

      <Card className="rounded-2xl border-[rgba(15,15,15,.10)] bg-white shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <SoftIcon icon={HeartPulse} tone="blue" />
            <div>
              <h3 className="text-base font-semibold tracking-tight text-zinc-900">{p.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{p.desc}</p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {["Not sure", "A little off", "Ready to move"].map((t, i) => (
              <div
                key={t}
                className="rounded-2xl border border-[rgba(15,15,15,.10)] bg-white p-4"
              >
                <p className="text-sm font-medium text-zinc-900">{t}</p>
                <p className="mt-1 text-sm text-zinc-600">
                  {i === 0
                    ? "That’s okay."
                    : i === 1
                      ? "Let’s take it slow."
                      : "Let’s go step by step."}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-end gap-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="h-11 rounded-2xl border-[rgba(15,15,15,.12)] bg-transparent text-zinc-900"
            >
              Exit
            </Button>
            <Button
              onClick={onNext}
              className="h-11 rounded-2xl bg-[#233DFF] text-white hover:bg-[#1f35e6]"
            >
              Continue
            </Button>
          </div>
        </CardContent>
      </Card>

      <Reveal>
        <Card className="rounded-2xl border-[rgba(15,15,15,.10)] bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <SoftIcon icon={Info} tone="neutral" />
              <div>
                <p className="text-sm font-medium text-zinc-900">You can skip this</p>
                <p className="mt-1 text-sm text-zinc-600">
                  If you’d rather not answer questions, go straight to events or tools.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </div>
  );
}

// Daily-needs referral request — submits to POST /api/public/referrals
function RequestHelpModal({
  need,
  onClose,
}: {
  need: { t: string; urgent: boolean } | null;
  onClose: () => void;
}) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [note, setNote] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [err, setErr] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (need) {
      setDone(false);
      setErr(null);
      setName("");
      setEmail("");
      setPhone("");
      setNote("");
    }
  }, [need]);

  const submit = async () => {
    if (!need) return;
    setBusy(true);
    setErr(null);
    try {
      const res = await referralsApi.submit({
        resourceId: `daily-needs:${need.t.toLowerCase().replace(/\s+/g, "-")}`,
        resourceName: need.t,
        memberName: name.trim(),
        memberEmail: email.trim().toLowerCase(),
        memberPhone: phone.trim() || undefined,
        reasonForReferral: note.trim() || `Requested help with ${need.t} via the Helping + Healing Hub.`,
        urgencyLevel: need.urgent ? "urgent" : "routine",
        preferredContactMethod: phone.trim() ? "phone" : "email",
      });
      if (!res.ok) throw new Error(res.error || "failed");
      ctxApi.event("hub_checkin", { need: need.t, action: "referral_submitted" });
      setDone(true);
    } catch {
      setErr("We could not submit that just now. Please try again, or call 211 for immediate help.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <AnimatePresence>
      {need ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Card>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900">{need.t}</h3>
                  <button aria-label="Close" onClick={onClose} className="rounded-full p-1 hover:bg-zinc-100">
                    <X className="h-5 w-5 text-zinc-500" />
                  </button>
                </div>

                {done ? (
                  <div className="space-y-3">
                    <p className="text-sm text-zinc-700">
                      Thank you. Our team has your request for <span className="font-medium">{need.t}</span> and
                      will follow up within 1 to 2 business days.
                    </p>
                    <p className="text-sm text-zinc-600">
                      If you need help right now, call 211 (LA County resources){need.urgent ? ", or 988 for crisis support" : ""}.
                    </p>
                    <Button className="w-full" onClick={onClose}>Done</Button>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-zinc-600">
                      Share how to reach you and our team will connect you with support. Free and confidential.
                    </p>
                    <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder="Phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <textarea
                      className="min-h-[80px] w-full rounded-2xl border border-black/10 bg-white p-3 text-sm text-zinc-900 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                      placeholder="Anything you want us to know (optional)"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                    {err ? <p className="text-sm text-hmc-pink">{err}</p> : null}
                    <Button
                      className="w-full"
                      disabled={busy || !name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
                      onClick={submit}
                    >
                      {busy ? "Sending..." : "Request help"}
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function DailyNeedsTab() {
  const [showOnlyUrgent, setShowOnlyUrgent] = React.useState(false);
  const [requested, setRequested] = React.useState<{ t: string; urgent: boolean } | null>(null);
  const items = [
    { t: "Food support", d: "Pantries and meal resources.", tone: "orange" as const, urgent: false },
    { t: "Housing help", d: "Shelter and short-term options.", tone: "orange" as const, urgent: true },
    { t: "Safety planning", d: "If you don’t feel safe right now.", tone: "yellow" as const, urgent: true },
  ];
  const shown = showOnlyUrgent ? items.filter((x) => x.urgent) : items;

  return (
    <div className="space-y-4">
      <SectionTitle
        title="Daily needs"
        subtitle="Start with basics. We’ll point you to support."
        right={
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-600">Urgent only</span>
            <Switch checked={showOnlyUrgent} onCheckedChange={setShowOnlyUrgent} />
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        {shown.map((x) => (
          <Card
            key={x.t}
            className="rounded-2xl border-[rgba(15,15,15,.10)] bg-white shadow-sm"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <SoftIcon icon={Home} tone={x.tone} />
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-zinc-900">{x.t}</h3>
                    <p className="mt-1 text-sm text-zinc-600">{x.d}</p>
                  </div>
                </div>
                {x.urgent ? <Pill tone="orange">Urgent</Pill> : <Pill tone="neutral">Info</Pill>}
              </div>
              <div className="mt-5">
                <Button
                  className="h-11 w-full rounded-2xl bg-[#233DFF] text-white hover:bg-[#1f35e6]"
                  onClick={() => {
                    ctxApi.event("tool_search", { query: x.t });
                    setRequested({ t: x.t, urgent: x.urgent });
                  }}
                >
                  Request help
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <RequestHelpModal
        need={requested}
        onClose={() => setRequested(null)}
      />
    </div>
  );
}

function UnstoppableTab({ onStartCheckIn }: { onStartCheckIn: () => void }) {
  return (
    <div className="space-y-4">
      <SectionTitle
        title="Unstoppable"
        subtitle="Tools and experiences built for healing through movement and connection."
        right={<Pill tone="yellow">Move • Heal • Transform</Pill>}
      />

      <div className="grid gap-4 md:grid-cols-3">
        {[
          "I didn’t think I needed support—until I tried this.",
          "The steps were simple. I felt better fast.",
          "It helped me connect the dots.",
        ].map((quote, i) => (
          <Card
            key={quote}
            className="rounded-2xl border-[rgba(15,15,15,.10)] bg-white shadow-sm"
          >
            <CardContent className="p-6">
              <Pill tone={i === 1 ? "blue" : i === 2 ? "orange" : "yellow"} icon={Sparkles}>
                Story
              </Pill>
              <p className="mt-3 text-sm text-zinc-900">“{quote}”</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="h-4 w-4" />
                  Short steps
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="h-4 w-4" />
                  Clear next move
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="h-4 w-4" />
                  Events + tools
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <Button className="h-11 w-full rounded-2xl bg-[#233DFF] text-white hover:bg-[#1f35e6]">
                  Try a tool
                </Button>
                <Button
                  onClick={onStartCheckIn}
                  variant="outline"
                  className="h-11 w-full rounded-2xl border-[rgba(15,15,15,.12)] bg-transparent text-zinc-900"
                >
                  Start check-in
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Reveal>
        <Card className="rounded-2xl border-[rgba(15,15,15,.10)] bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <SoftIcon icon={Calendar} tone="yellow" />
              <div>
                <h3 className="text-base font-semibold tracking-tight text-zinc-900">
                  Find the next Unstoppable event
                </h3>
                <p className="mt-1 text-sm text-zinc-600">
                  Movement sessions, reflection prompts, and community support.
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <Button className="h-11 rounded-2xl bg-[#233DFF] text-white hover:bg-[#1f35e6]">
                View events
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-2xl border-[rgba(15,15,15,.12)] bg-transparent text-zinc-900"
              >
                Learn more
              </Button>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </div>
  );
}

function PartnersTab() {
  return (
    <div className="space-y-4">
      <SectionTitle
        title="Partners"
        subtitle="For donors and partners: see impact and ways to support."
        right={<Pill tone="blue">Impact</Pill>}
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-2xl border-[rgba(15,15,15,.10)] bg-white shadow-sm md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <SoftIcon icon={Users} tone="blue" />
              <div>
                <h3 className="text-base font-semibold tracking-tight text-zinc-900">
                  Partner with Health Matters Clinic
                </h3>
                <p className="mt-1 text-sm text-zinc-600">
                  Sponsorships, community activation, and health equity initiatives.
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Sponsor an event", "Support tools", "Fund screenings", "Volunteer with us"].map(
                (t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-[rgba(15,15,15,.10)] bg-white p-4"
                  >
                    <p className="text-sm font-medium text-zinc-900">{t}</p>
                    <p className="mt-1 text-sm text-zinc-600">Short, clear next steps.</p>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-[rgba(15,15,15,.10)] bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <SoftIcon icon={MapPin} tone="neutral" />
              <div>
                <h3 className="text-base font-semibold tracking-tight text-zinc-900">Quick facts</h3>
                <p className="mt-1 text-sm text-zinc-600">Replace with your live stats.</p>
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Pill tone="neutral">25,000+ served</Pill>
              <Pill tone="neutral">Pop-up clinics</Pill>
              <Pill tone="neutral">Unstoppable community</Pill>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ScreeningsTab({ eventsLive = [] }: { eventsLive?: HmcEvent[] }) {
  const upcoming = eventsLive.slice(0, 6);
  return (
    <div className="space-y-4">
      <SectionTitle
        title="Screenings & events"
        subtitle="Upcoming screenings, wellness events, and ways to connect to care."
        right={
          <div className="flex items-center gap-2">
            <Pill tone="blue">Near you</Pill>
            <Pill tone="neutral">No login</Pill>
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-2xl border-[rgba(15,15,15,.10)] bg-white shadow-sm md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <SoftIcon icon={Calendar} tone="blue" />
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-zinc-900">Next events</h3>
                  <p className="mt-1 text-sm text-zinc-600">
                    Live from the Health Matters Clinic event calendar.
                  </p>
                </div>
              </div>
              <a href="https://eventfinder.healthmatters.clinic" target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  className="h-11 rounded-2xl border-[rgba(15,15,15,.12)] bg-transparent text-zinc-900"
                >
                  View calendar
                </Button>
              </a>
            </div>

            <div className="mt-5 space-y-3">
              {upcoming.length === 0 ? (
                <div className="rounded-2xl border border-[rgba(15,15,15,.10)] bg-white p-4 text-sm text-zinc-600">
                  Loading upcoming events, or none scheduled right now. Check the full calendar for the latest.
                </div>
              ) : (
                upcoming.map((ev) => (
                  <a
                    key={ev.id}
                    href={ev.rsvpUrl || ev.url || "https://eventfinder.healthmatters.clinic"}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => ctxApi.event("event_view", { eventId: ev.id, title: ev.title })}
                    className="flex items-center justify-between rounded-2xl border border-[rgba(15,15,15,.10)] bg-white p-4 hover:border-[rgba(35,61,255,.35)]"
                  >
                    <div>
                      <p className="text-sm font-medium text-zinc-900">{ev.title}</p>
                      <p className="mt-1 text-sm text-zinc-600">
                        {[ev.dateDisplay || ev.date, ev.time, ev.location].filter(Boolean).join(" · ") ||
                          "See details"}
                      </p>
                    </div>
                    <Pill tone="blue">{ev.type || "Event"}</Pill>
                  </a>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-[rgba(15,15,15,.10)] bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <SoftIcon icon={Stethoscope} tone="neutral" />
              <div>
                <h3 className="text-base font-semibold tracking-tight text-zinc-900">
                  Prefer in-person care?
                </h3>
                <p className="mt-1 text-sm text-zinc-600">
                  We’ll help you find the right event or partner.
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Button className="h-11 w-full rounded-2xl bg-[#233DFF] text-white hover:bg-[#1f35e6]">
                Find an event
              </Button>
              <Button
                variant="outline"
                className="h-11 w-full rounded-2xl border-[rgba(15,15,15,.12)] bg-transparent text-zinc-900"
              >
                Get a referral
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


// ── Donate modal (completed) ─────────────────────────────────────────────
function DonateModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const onContinue = React.useCallback(() => {
    window.location.assign(DONATE_URL);
  }, []);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Card>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900">Support the work</h3>
                  <button aria-label="Close" onClick={onClose} className="rounded-full p-1 hover:bg-zinc-100">
                    <X className="h-5 w-5 text-zinc-500" />
                  </button>
                </div>
                <p className="text-sm text-zinc-600">
                  Your gift funds free screenings, events, and community wellness across Los Angeles.
                  You will be taken to our secure donation page.
                </p>
                <div className="flex gap-2">
                  <Button className="flex-1" onClick={onContinue}>Continue to donate</Button>
                  <Button variant="outline" onClick={onClose}>Not now</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

// ── "Your next step" — ranked cards from the live rules engine ───────────
function NextActionsStrip({ actions }: { actions: NextAction[] }) {
  if (!actions.length) return null;
  const top = actions.slice(0, 3);
  return (
    <div className="space-y-3">
      <SectionTitle title="Your next step" subtitle="Personalized to where you are right now." />
      <div className="grid gap-3 sm:grid-cols-3">
        {top.map((a) => (
          <Card key={a.id} className={a.id === "crisis" ? "border-hmc-pink" : undefined}>
            <CardContent className="space-y-2">
              <div className="text-sm font-semibold text-zinc-900">{a.title}</div>
              <div className="text-sm text-zinc-600">{a.body}</div>
              <div className="flex flex-wrap gap-2 pt-1">
                <a href={a.cta.href} target={a.cta.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <Button size="sm">{a.cta.label}</Button>
                </a>
                {a.secondary ? (
                  <a href={a.secondary.href}>
                    <Button size="sm" variant="outline">{a.secondary.label}</Button>
                  </a>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ── Client sign-in (passwordless magic-link) ─────────────────────────────
function SignInModal({
  open,
  onClose,
  onSignedIn,
}: {
  open: boolean;
  onClose: () => void;
  onSignedIn: () => void;
}) {
  const [phase, setPhase] = React.useState<"email" | "code">("email");
  const [email, setEmail] = React.useState("");
  const [code, setCode] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [err, setErr] = React.useState<string | null>(null);

  const reset = () => {
    setPhase("email");
    setEmail("");
    setCode("");
    setErr(null);
    setBusy(false);
  };

  const requestCode = async () => {
    setBusy(true);
    setErr(null);
    try {
      await clientApi.requestLink(email.trim().toLowerCase());
      setPhase("code");
    } catch {
      setErr("We could not send a code to that email. Please check it and try again.");
    } finally {
      setBusy(false);
    }
  };

  const verify = async () => {
    setBusy(true);
    setErr(null);
    try {
      await clientApi.verifyLink(email.trim().toLowerCase(), code.trim());
      reset();
      onSignedIn();
      onClose();
    } catch {
      setErr("That code did not match. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          onClick={() => { reset(); onClose(); }}
        >
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Card>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900">Sign in to your Hub</h3>
                  <button aria-label="Close" onClick={() => { reset(); onClose(); }} className="rounded-full p-1 hover:bg-zinc-100">
                    <X className="h-5 w-5 text-zinc-500" />
                  </button>
                </div>
                {phase === "email" ? (
                  <>
                    <p className="text-sm text-zinc-600">
                      Enter your email and we will send you a 6-digit code. No password needed.
                    </p>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {err ? <p className="text-sm text-hmc-pink">{err}</p> : null}
                    <Button className="w-full" disabled={busy || !email} onClick={requestCode}>
                      {busy ? "Sending..." : "Send my code"}
                    </Button>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-zinc-600">
                      We sent a code to <span className="font-medium">{email}</span>. Enter it below.
                    </p>
                    <Input
                      inputMode="numeric"
                      placeholder="123456"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    {err ? <p className="text-sm text-hmc-pink">{err}</p> : null}
                    <Button className="w-full" disabled={busy || code.length < 6} onClick={verify}>
                      {busy ? "Verifying..." : "Verify and sign in"}
                    </Button>
                    <button className="text-sm text-zinc-500 underline" onClick={() => setPhase("email")}>
                      Use a different email
                    </button>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

// ── Root: routing + live data wiring ─────────────────────────────────────
export default function App() {
  const [route, setRoute] = React.useState<Route>({ name: "hub" });
  const [donateOpen, setDonateOpen] = React.useState(false);
  const [signInOpen, setSignInOpen] = React.useState(false);

  // Live data
  useVisitorContext(); // sets hmc_vid cookie on load
  const { actions, refresh: refreshActions } = useNextActions();
  const { events } = useEvents();
  const { me, refresh: refreshMe, signOut } = useClientSession();

  const go = (name: Route["name"]) => {
    if (name === "checkin") {
      setRoute({ name: "checkin", step: 1 });
      ctxApi.event("hub_checkin", { step: "start" });
    } else {
      setRoute({ name } as Route);
      ctxApi.event("tool_open", { view: name });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkInNext = () => {
    if (route.name !== "checkin") return;
    if (route.step >= 4) {
      ctxApi.event("hub_checkin", { step: "complete" }).then(() => refreshActions());
      setRoute({ name: "hub" });
    } else {
      setRoute({ name: "checkin", step: route.step + 1 });
    }
  };

  return (
    <GradientBg>
      <TopBar onDonate={() => setDonateOpen(true)} onSupport={() => setDonateOpen(true)} />

      {/* Signed-in status / sign-in entry */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 pt-2">
        <button
          onClick={() => go("hub")}
          className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          Helping + Healing Hub
        </button>
        {me?.email ? (
          <div className="flex items-center gap-3 text-sm text-zinc-600">
            <span>
              {me.profile?.firstName ? `Hi, ${me.profile.firstName}` : me.email}
              {me.credits?.balance ? ` · ${me.credits.balance} credits` : ""}
            </span>
            <button className="underline" onClick={() => signOut()}>Sign out</button>
          </div>
        ) : (
          <button
            onClick={() => setSignInOpen(true)}
            className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-zinc-900"
          >
            <LogIn className="h-4 w-4" /> Sign in
          </button>
        )}
      </div>

      <main className="mx-auto max-w-5xl space-y-8 px-4 py-6">
        {route.name === "hub" && (
          <>
            <NextActionsStrip actions={actions} />
            <HubPage
              onStartCheckIn={() => go("checkin")}
              onOpenScreenings={() => go("screenings")}
              onOpenDailyNeeds={() => go("daily-needs")}
              onOpenUnstoppable={() => go("unstoppable")}
            />
          </>
        )}

        {route.name === "screenings" && <ScreeningsTab eventsLive={events} />}
        {route.name === "daily-needs" && <DailyNeedsTab />}
        {route.name === "unstoppable" && <UnstoppableTab onStartCheckIn={() => go("checkin")} />}
        {route.name === "partners" && <PartnersTab />}
        {route.name === "checkin" && (
          <CheckInFlow
            step={route.step}
            onBack={() => setRoute({ name: "checkin", step: Math.max(1, route.step - 1) })}
            onNext={checkInNext}
            onClose={() => go("hub")}
          />
        )}
      </main>

      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />
      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} onSignedIn={() => { refreshMe(); refreshActions(); }} />
    </GradientBg>
  );
}
