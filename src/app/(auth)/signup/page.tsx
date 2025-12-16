"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const supabase = createClient()
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          company_name: companyName,
          full_name: fullName,
          phone,
        },
      },
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    if (data.user){
      router.push('/dashboard')
    }

  }

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Side - Promo */}
      <div className="hidden lg:flex flex-1 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="flex flex-col justify-center px-12 z-10 max-w-lg">
          <h2 className="text-4xl font-bold mb-6">Join Izzy Today!</h2>
          <p className="text-lg opacity-90">
            Create content, engage your audience, and grow your brand with
            Izzy&apos;s all-in-one social media management platform.
          </p>
        </div>

        {/* Decorative Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <IconWrap className="top-40 left-40 -rotate-12">
            <Instagram />
          </IconWrap>
          <IconWrap className="bottom-40 left-16 rotate-6">
            <Facebook />
          </IconWrap>
          <IconWrap className="bottom-20 left-32 -rotate-6">
            <Youtube />
          </IconWrap>
          <IconWrap className="top-56 left-40 rotate-45">
            <TikTok />
          </IconWrap>

          {/* Glow */}
          <div className="absolute top-32 right-8 w-32 h-32 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-32 right-24 w-40 h-40 bg-white/10 rounded-full blur-xl" />
          <div className="absolute top-1/2 right-12 w-24 h-24 bg-white/10 rounded-full blur-lg" />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8">
        <div className="w-full mx-auto bg-card p-8 rounded-xl border shadow-sm">
          {/* Logo */}
          <Link href="/" className="mb-6 flex items-center gap-3">
            <Image
              src="/izzy-logo.png"
              alt="logo"
              width={60}
              height={60}
              className="rounded-lg"
            />
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Create your account
            </h1>
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-primary font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-5">
            {/* company Name */}
            <div className="flex flex-col md:flex-row justify-between ">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Company Name <span className="text-gray-400">(Required)</span> 
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 rounded-lg border"
                />
              </div>
              {/* full Nmae */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your Phone Number"
                className="w-full px-4 py-3 rounded-lg border"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-lg border"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 rounded-lg border"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg
                hover:opacity-90 disabled:opacity-60 focus:ring-4 focus:ring-ring/40 transition"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
            {errorMessage && (
              <div className="text-sm text-red-500 bg-red-500/10 p-3 rounded-lg">
                {errorMessage}
              </div>
            )}
          </form>

          {/* Terms */}
          <p className="mt-6 text-center text-xs text-muted-foreground">
            By creating an account, you agree to our{" "}
            <Link href="#" className="text-primary hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

/* Helpers */
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
