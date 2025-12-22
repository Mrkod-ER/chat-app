"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SignInButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { MessageSquare, Users, Zap, Shield, Globe, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Authenticated>
        <AuthenticatedHome />
      </Authenticated>
      <Unauthenticated>
        <UnauthenticatedHome />
      </Unauthenticated>
    </div>
  );
}

function UnauthenticatedHome() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient-shift" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-32 md:pt-32 md:pb-48">
          <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Real-time Communication</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
              Connect Instantly with
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Anyone, Anywhere
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Experience seamless conversations with our modern chat platform. Built for speed,
              designed for simplicity, and crafted for connection.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <SignInButton
                mode="modal"
                forceRedirectUrl="/conversations"
                signUpFallbackRedirectUrl="/conversations"
              >
                <Button size="lg" className="group gap-2 text-lg px-8 py-6">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SignInButton>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 backdrop-blur-sm">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 w-full max-w-2xl">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Messages Sent</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Everything you need to
              <span className="block text-primary">stay connected</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful features designed to make communication effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Lightning Fast"
              description="Messages delivered in milliseconds. Experience real-time chat with zero lag."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Secure & Private"
              description="End-to-end encryption keeps your conversations private and secure."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Group Chats"
              description="Create groups, collaborate with teams, and connect with communities."
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6" />}
              title="Always Available"
              description="Access your messages from any device, anywhere in the world."
            />
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Rich Messaging"
              description="Share text, emojis, and more with our feature-rich chat interface."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Always Improving"
              description="Regular updates bring new features and improvements to enhance your experience."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <Card className="relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="relative p-12 md:p-20 text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to start chatting?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of users already connecting on our platform
              </p>
              <SignInButton
                mode="modal"
                forceRedirectUrl="/conversations"
                signUpFallbackRedirectUrl="/conversations"
              >
                <Button size="lg" className="text-lg px-8 py-6 mt-4">
                  Get Started for Free
                </Button>
              </SignInButton>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}

function AuthenticatedHome() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        {/* Welcome Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome back! 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            You're all set. Start a conversation or continue where you left off.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 pt-8">
          <Link href="/conversations">
            <Card className="p-8 hover:bg-accent transition-all duration-200 cursor-pointer group border-border/50">
              <MessageSquare className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-2">Your Conversations</h3>
              <p className="text-muted-foreground">
                View and continue your ongoing chats
              </p>
            </Card>
          </Link>

          <Link href="/friends">
            <Card className="p-8 hover:bg-accent transition-all duration-200 cursor-pointer group border-border/50">
              <Users className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-2">Friends</h3>
              <p className="text-muted-foreground">
                Manage your friends and send requests
              </p>
            </Card>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 pt-8">
          <Card className="p-6 text-center backdrop-blur-sm bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
            <div className="text-3xl font-bold text-primary mb-1">5</div>
            <div className="text-sm text-muted-foreground">Active Chats</div>
          </Card>
          <Card className="p-6 text-center backdrop-blur-sm bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
            <div className="text-3xl font-bold text-accent mb-1">12</div>
            <div className="text-sm text-muted-foreground">Friends</div>
          </Card>
          <Card className="p-6 text-center backdrop-blur-sm bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
            <div className="text-3xl font-bold text-primary mb-1">247</div>
            <div className="text-sm text-muted-foreground">Messages</div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 md:p-8 hover:bg-accent/50 transition-all duration-200 group cursor-pointer border-border/50 backdrop-blur-sm">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
}