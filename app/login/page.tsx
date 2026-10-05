"use client";
import Link from "next/link";
import { useState, type SubmitEvent } from "react";
import {
  ArrowRight,
  BookOpen,
  EyeIcon,
  EyeOffIcon,
  KeyRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema } from "@/lib/schema/auth.schema";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function LoginPage() {
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = loginSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!result.success) {
      const nextErrors: { email?: string; password?: string } = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if ((field === "email" || field === "password") && !nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      }
      setErrors(nextErrors);
      setMessage("");
      return;
    }

    setErrors({});
    setMessage("Sign-in is not connected yet. Please check back soon.");
  }

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f8f5] px-5 py-12 text-[#0c263f] sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-36 -top-44 size-[34rem] rounded-full bg-[#e4efeb] blur-3xl" />
        <div className="absolute -bottom-56 -left-40 size-[34rem] rounded-full bg-[#f3ead2]/80 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#0c263f_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      </div>

      <div className="flex w-full items-center justify-center">
        <section className="mx-auto w-full max-w-md lg:mx-0">
          <Link
            href="/"
            className="mb-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[#0c263f]/75 transition hover:text-[#2b9d8f]"
          >
            <span className="grid size-9 place-items-center rounded-full border border-[#0c263f]/10 bg-white/80">
              <BookOpen size={17} />
            </span>
            SAÑJÑĀNĀ DEVELOPMENT
          </Link>

          <Card className="gap-0 rounded-3xl border border-[#0c263f]/[0.07] bg-white/90 py-0 shadow-[0_24px_80px_-32px_rgba(12,38,63,0.22)] backdrop-blur-sm">
            <CardHeader className="gap-2 px-7 pt-8 sm:px-9 sm:pt-10">
              <div className="mb-2 grid size-11 place-items-center rounded-lg bg-[#e4efeb] text-[#176b63]">
                <KeyRound size={20} strokeWidth={1.8} />
              </div>
              <CardTitle className="text-2xl font-semibold tracking-[-0.04em] text-[#0c263f] sm:text-[1.75rem]">
                Welcome back
              </CardTitle>
              <CardDescription className="text-sm leading-6 text-[#64748b]">
                Sign in to continue to editor.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-7 pt-7 sm:px-9 sm:pb-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#0c263f]">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    onChange={() =>
                      setErrors((current) => ({ ...current, email: undefined }))
                    }
                    className="h-12 rounded-lg border-[#dce3e6] bg-[#f9fafc] px-4 text-sm focus-visible:border-[#2b9d8f] focus-visible:ring-[#2b9d8f]/20"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-700">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <Label htmlFor="password" className="text-[#0c263f]">
                      Password
                    </Label>
                    <Link
                      href="#"
                      className="text-xs font-semibold text-[#19766d] transition hover:text-[#0c263f]"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <InputGroup className="h-12 rounded-lg border-[#dce3e6] bg-[#f9fafc] text-sm has-[[data-slot=input-group-control]:focus-visible]:border-[#2b9d8f] has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-[#2b9d8f]/20">
                    <InputGroupInput
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      aria-invalid={Boolean(errors.password)}
                      aria-describedby={
                        errors.password ? "password-error" : undefined
                      }
                      onChange={() =>
                        setErrors((current) => ({
                          ...current,
                          password: undefined,
                        }))
                      }
                    />
                    <InputGroupAddon align="inline-end">
                      <InputGroupButton
                        variant="ghost"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        aria-pressed={showPassword}
                        className="hover:bg-white cursor-pointer"
                        onClick={() => setShowPassword((visible) => !visible)}
                      >
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                  {errors.password && (
                    <p id="password-error" className="text-xs text-red-700">
                      {errors.password}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-[#0c263f] text-sm font-semibold text-white hover:bg-[#17405b]"
                >
                  Sign in <ArrowRight className="ml-1" size={16} />
                </Button>
                <p
                  aria-live="polite"
                  className="min-h-5 text-center text-xs text-[#64748b]"
                >
                  {message}
                </p>
              </form>
              <p className="mt-2 text-center text-xs leading-5 text-[#64748b]">
                Access is for authorized SañJñāNā team members.
              </p>
            </CardContent>
          </Card>
          <p className="mt-6 text-center text-xs text-[#64748b]">
            <Link href="/" className="transition hover:text-[#19766d]">
              ← Return to the website
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
