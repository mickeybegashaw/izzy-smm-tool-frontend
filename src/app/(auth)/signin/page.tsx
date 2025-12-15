"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
export default function Login() {
    const supabase = createClient()
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }
    if (data.user) {
      router.push('/dashboard')
    }



  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center px-8">
        <div className="w-full max-w-sm mx-auto bg-card p-8 rounded-xl shadow-sm border">
          {/* Logo */}
          <Link href="/" className="mb-8 flex items-center gap-3">
            <Image src="/izzy-logo.png" alt="logo" width={60} height={60} />
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Sign in to your account
            </h1>
            <p className="text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-primary font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background
                  focus:outline-none focus:ring-4 focus:ring-ring/30"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background
                  focus:outline-none focus:ring-4 focus:ring-ring/30"
              />
            </div>

            {/* Forgot */}
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
             <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg
                hover:opacity-90 disabled:opacity-60 focus:ring-4 focus:ring-ring/40 transition"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
            {errorMessage && (
              <div className="text-sm text-red-500 bg-red-500/10 p-3 rounded-lg">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex flex-1 bg-primary text-primary-foreground relative">
        <div className="flex flex-col justify-center px-12 z-10 max-w-lg">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Izzy Social Media Management
          </h2>
          <p className="text-lg opacity-90">
            Manage all your social channels from one powerful dashboard.
          </p>
        </div>

        {/* Decorative Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <IconWrap className="top-40 right-40 -rotate-12">
            <Instagram />
          </IconWrap>
          <IconWrap className="bottom-40 right-16 rotate-6">
            <Facebook />
          </IconWrap>
          <IconWrap className="bottom-20 right-32 -rotate-6">
            <Youtube />
          </IconWrap>
          <IconWrap className="top-60 right-40 rotate-45">
            <TikTok />
          </IconWrap>

          {/* Glow */}
          <div className="absolute top-32 right-8 w-32 h-32 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-32 right-24 w-40 h-40 bg-white/10 rounded-full blur-xl" />
        </div>
      </div>
    </div>
  );
}

/* Small helper */
function IconWrap({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute w-12 h-12 flex items-center justify-center opacity-80 ${className}`}
    >
      {children}
    </div>
  );
}

function TikTok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.321 5.562a5.124 5.124 0 0 1-3.757-1.56 5.124 5.124 0 0 1-1.56-3.757h-3.75v13.52a2.72 2.72 0 1 1-2.72-2.72c.35 0 .685.067.995.186V7.42a6.47 6.47 0 0 0-.995-.078 6.47 6.47 0 1 0 6.47 6.47V8.77a8.86 8.86 0 0 0 5.317 1.757V6.77z" />
    </svg>
  );
}
