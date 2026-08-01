import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles, Phone, Heart, Brain, Calendar } from 'lucide-react';
import { sunny, context as ctxApi, toolLink, TOOLS, type SunnyTurn } from '../../services/api';

// Sunny — the AI Wellness Navigator. Remembers you (sessionId tied to the shared
// visitor), orchestrates the ecosystem (Check Yourself / Calm Kit / Events /
// human handoff), and notices distress signals to surface grounding before crisis.

const DISTRESS = [
  'suicid', 'kill myself', 'end it', 'want to die', 'hurt myself', 'self harm',
  'hopeless', 'can\'t go on', 'cant go on', 'no reason to live', 'overdose',
  'panic', 'can\'t breathe', 'cant breathe', 'spiraling', 'crisis',
];

interface Props {
  visitorId: string | null;
  pageTitle?: string;
  pageContext?: Record<string, unknown>;
}

const SunnyNavigator: React.FC<Props> = ({ visitorId, pageTitle, pageContext }) => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<SunnyTurn[]>([
    { role: 'assistant', content: "Hi, I'm Sunny. I'm here whenever you need me. What's on your mind today?" },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [showCrisis, setShowCrisis] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sessionId = React.useMemo(() => {
    const key = 'hmc_sunny_session';
    let s = localStorage.getItem(key);
    if (!s) {
      s = (visitorId ? `vid_${visitorId}` : 'anon_') + Math.random().toString(36).slice(2, 10);
      localStorage.setItem(key, s);
    }
    return s;
  }, [visitorId]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [msgs, busy]);

  const send = async (text: string) => {
    const message = text.trim();
    if (!message || busy) return;
    if (DISTRESS.some((d) => message.toLowerCase().includes(d))) setShowCrisis(true);

    const history = msgs.slice(-8);
    setMsgs((m) => [...m, { role: 'user', content: message }]);
    setInput('');
    setBusy(true);
    ctxApi.event('tool_search', { via: 'sunny', query: message.slice(0, 120) });

    try {
      const res = await sunny.chat(message, {
        history,
        pageTitle,
        pageContext,
        sessionId,
      });
      const reply = res.reply || res.message || "I'm here with you. Tell me a little more.";
      setMsgs((m) => [...m, { role: 'assistant', content: reply }]);
    } catch {
      setMsgs((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            "I'm having trouble responding right now. If you need someone now, call or text 988. Otherwise, try the tools below.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  };

  // Ecosystem hand-offs — the Navigator orchestrating the tools.
  const quickChips = [
    { label: 'Check in on my mood', icon: Brain, href: toolLink(TOOLS.checkYourself, {}, visitorId), tone: 'blue' as const, ev: 'check-yourself' },
    { label: 'Help me calm down', icon: Heart, href: toolLink(TOOLS.calmKit, {}, visitorId), tone: 'pink' as const, ev: 'calmkit' },
    { label: 'Find an event', icon: Calendar, href: toolLink(TOOLS.eventFinder, {}, visitorId), tone: 'orange' as const, ev: 'events' },
  ];

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => { setOpen((o) => !o); if (!open) ctxApi.event('tool_open', { tool: 'sunny' }); }}
        aria-label="Open Sunny, your wellness navigator"
        className="fixed bottom-6 right-6 z-[90] h-14 w-14 rounded-full bg-[#233DFF] text-white shadow-xl shadow-[#233DFF]/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
      >
        {open ? <X size={24} /> : <Sparkles size={24} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-[90] w-[calc(100vw-3rem)] max-w-[400px] h-[560px] max-h-[calc(100vh-8rem)] bg-white rounded-[28px] shadow-2xl border border-zinc-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="px-5 py-4 bg-[#233DFF] text-white flex items-center gap-3 shrink-0">
            <div className="h-9 w-9 rounded-full bg-white/15 flex items-center justify-center">
              <Sparkles size={18} />
            </div>
            <div className="leading-tight">
              <p className="font-semibold">Sunny</p>
              <p className="text-[11px] text-blue-100">Your wellness navigator</p>
            </div>
          </div>

          {/* Crisis banner */}
          {showCrisis && (
            <div className="px-4 py-3 bg-[#FF6F91]/10 border-b border-[#FF6F91]/20 flex items-center gap-3 shrink-0">
              <Phone size={16} className="text-[#FF6F91] shrink-0" />
              <p className="text-xs text-zinc-700 leading-snug">
                If you are in crisis, call or text <a href="tel:988" className="font-bold underline">988</a> now. You are not alone.
              </p>
            </div>
          )}

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user' ? 'bg-[#233DFF] text-white' : 'bg-zinc-100 text-zinc-800'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <div className="bg-zinc-100 text-zinc-500 rounded-2xl px-4 py-2.5 text-sm flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin" /> Sunny is thinking...
                </div>
              </div>
            )}
          </div>

          {/* Orchestration chips */}
          <div className="px-3 pb-2 flex gap-2 overflow-x-auto shrink-0">
            {quickChips.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => ctxApi.event('tool_open', { from: 'sunny', tool: c.ev })}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:border-[#233DFF]/40 transition-colors"
              >
                <c.icon size={13} /> {c.label}
              </a>
            ))}
          </div>

          {/* Composer */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="p-3 border-t border-zinc-100 flex items-center gap-2 shrink-0"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tell Sunny what you need..."
              className="flex-1 h-11 rounded-2xl bg-zinc-100 px-4 text-sm outline-none focus:ring-2 focus:ring-[#233DFF]/20"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="h-11 w-11 rounded-2xl bg-[#233DFF] text-white flex items-center justify-center disabled:opacity-40"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default SunnyNavigator;
