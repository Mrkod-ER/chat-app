"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SignInButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import {
  MessageSquare,
  Users,
  Zap,
  Shield,
  Globe,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Send,
  Smile,
  ChevronDown,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full overflow-y-auto thin-scrollbar">
      <Authenticated>
        <AuthenticatedHome />
      </Authenticated>
      <Unauthenticated>
        <UnauthenticatedHome />
      </Unauthenticated>
    </div>
  );
}

/* ─── Animated Counter ─── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`space-y-1 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className="text-3xl md:text-4xl font-bold text-primary">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   UNAUTHENTICATED LANDING
   ═══════════════════════════════════════════ */
function UnauthenticatedHome() {
  return (
    <div className="relative">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient-shift" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* ── Hero ── */}
      <section className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm font-medium">Live &amp; Real-time</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Connect Instantly with
            <span className="block mt-1 bg-gradient-to-r from-primary via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Anyone, Anywhere
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience seamless conversations with our modern chat platform.
            Built for speed, designed for simplicity, crafted for connection.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <SignInButton
              mode="modal"
              forceRedirectUrl="/conversations"
              signUpFallbackRedirectUrl="/conversations"
            >
              <Button size="lg" className="group gap-2 text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </SignInButton>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-xl backdrop-blur-sm"
              onClick={() => document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" })}
            >
              See it in Action
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 w-full max-w-lg mx-auto">
            <AnimatedStat value="100" label="Active Users" />
            <AnimatedStat value="1000" label="Messages Sent" />
            <AnimatedStat value="99.9%" label="Uptime" />
          </div>

          {/* Scroll Indicator */}
          <button
          
            onClick={() => document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" })}
            className="mx-auto pt-4 animate-bounce text-muted-foreground hover:text-foreground transition-colors flex flex-col items-center gap-1"
          >
            <span className="text-xs">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ── Chat Preview ── */}
      <section id="preview" className="px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              See it in <span className="text-primary">action</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A preview of your future chat experience
            </p>
          </div>

          <ChatPreview />
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="px-4 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-14">
            <h2 className="text-3xl md:text-5xl font-bold">
              Everything you need to
              <span className="block text-primary">stay connected</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful features designed to make communication effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Lightning Fast"
              description="Messages delivered in milliseconds with zero lag."
              accent="from-amber-500/15 to-amber-500/5"
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Secure & Private"
              description="End-to-end encryption keeps conversations private."
              accent="from-emerald-500/15 to-emerald-500/5"
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Group Chats"
              description="Create groups, collaborate with teams and communities."
              accent="from-violet-500/15 to-violet-500/5"
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6" />}
              title="Always Available"
              description="Access messages from any device, anywhere in the world."
              accent="from-blue-500/15 to-blue-500/5"
            />
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Rich Messaging"
              description="Share text, emojis, images and more in your chats."
              accent="from-pink-500/15 to-pink-500/5"
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Always Improving"
              description="Regular updates bring new features and optimizations."
              accent="from-cyan-500/15 to-cyan-500/5"
            />
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-4 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <Card className="relative overflow-hidden rounded-2xl border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="relative p-10 md:p-16 text-center space-y-5">
              <Sparkles className="w-10 h-10 text-primary mx-auto" />
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to start chatting?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Join thousands already connecting on our platform
              </p>
              <SignInButton
                mode="modal"
                forceRedirectUrl="/conversations"
                signUpFallbackRedirectUrl="/conversations"
              >
                <Button size="lg" className="text-lg px-8 py-6 mt-2 rounded-xl shadow-lg shadow-primary/25">
                  Get Started for Free
                </Button>
              </SignInButton>
            </div>
          </Card>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-4 py-8 border-t border-border/40">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="font-semibold text-foreground">ChatApp</span>
          </div>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> for better conversations
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ─── Chat Preview ─── */
function ChatPreview() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timers = chatMessages.map((_, i) =>
      setTimeout(() => setVisible(i + 1), 600 + i * 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative max-w-lg mx-auto">
      {/* Glow behind */}
      <div className="absolute -inset-6 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent rounded-[2rem] blur-2xl" />

      <Card className="relative rounded-2xl overflow-hidden border-border/50 shadow-2xl shadow-primary/5">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50 bg-card/80 backdrop-blur-sm">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
            A
          </div>
          <div className="flex-1">
            <div className="font-semibold text-sm">Alice</div>
            <div className="text-[11px] text-green-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Online
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 space-y-3 min-h-[220px] bg-background/50">
          {chatMessages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
              style={{
                opacity: i < visible ? 1 : 0,
                transform: i < visible ? "translateX(0)" : `translateX(${msg.sent ? "30px" : "-30px"})`,
                transition: "all 0.4s ease-out",
              }}
            >
              <div
                className={`max-w-[75%] px-3.5 py-2 rounded-2xl text-sm leading-relaxed ${msg.sent
                  ? "bg-primary text-primary-foreground rounded-br-sm"
                  : "bg-muted rounded-bl-sm"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing dots */}
          {visible >= chatMessages.length && (
            <div className="flex justify-start" style={{ animation: "fade-in-up 0.3s ease-out" }}>
              <div className="bg-muted px-4 py-2.5 rounded-2xl rounded-bl-sm flex gap-1.5">
                {[0, 200, 400].map((delay) => (
                  <span
                    key={delay}
                    className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
                    style={{ animation: "typing-dot 1.4s infinite", animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="px-3 py-2.5 border-t border-border/50 flex items-center gap-2 bg-card/80">
          <Smile className="w-5 h-5 text-muted-foreground/60" />
          <div className="flex-1 px-3 py-1.5 rounded-lg bg-muted/50 text-sm text-muted-foreground">
            Type a message…
          </div>
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Send className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
        </div>
      </Card>
    </div>
  );
}

const chatMessages = [
  { text: "Hey! Have you tried this new chat app? 🚀", sent: false },
  { text: "Not yet! Is it good?", sent: true },
  { text: "It's amazing — super fast and gorgeous ✨", sent: false },
  { text: "Signing up right now! 😍", sent: true },
];

/* ─── Feature Card ─── */
function FeatureCard({
  icon,
  title,
  description,
  accent = "from-primary/15 to-primary/5",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: string;
}) {
  return (
    <Card className="group relative p-6 rounded-xl border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative">
        <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-1.5">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}

/* ═══════════════════════════════════════════
   AUTHENTICATED HOME
   ═══════════════════════════════════════════ */
function AuthenticatedHome() {
  return (
    <div className="h-full flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full space-y-8 animate-fade-in-up">
        {/* Welcome */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome back! 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Pick up where you left off.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-5 pt-4">
          <Link href="/conversations" className="group">
            <Card className="p-6 rounded-xl border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-1">Conversations</h3>
                  <p className="text-sm text-muted-foreground">Continue your ongoing chats</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
              </div>
            </Card>
          </Link>

          <Link href="/friends" className="group">
            <Card className="p-6 rounded-xl border-border/50 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-violet-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-1">Friends</h3>
                  <p className="text-sm text-muted-foreground">Manage friends &amp; requests</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-violet-500 group-hover:translate-x-1 transition-all mt-1" />
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}