"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import React from "react";
import { auth } from "../../../firebase";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;

        if (!user.emailVerified) {
          alert("Please verify your email before logging in.");
          return; // Prevent redirecting if email is not verified
        }
        console.log(user, "HUHUIHUI");

        router.push("/dashboard");
      } catch (err) {
        console.log(err);
        setErrors({ password: "Invalid email or password" });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="bg-white h-full text-[#02000F] md:rounded-tl-4xl md:rounded-bl-4xl flex justify-center items-center">
      <div className="max-w-[400px] w-full px-4">
        <h1 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight">
          Welcome back
        </h1>
        <p className="text-center text-md text-background/70 sm:text-lg mb-10 mt-2">
          Login to your account on Surventix and start exploring
        </p>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className={`border ${
                formik.errors.email && formik.touched.email
                  ? "border-red-500"
                  : "border-[#02000F]/20"
              } h-11`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-500">{formik.errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              className={`border ${
                formik.errors.password && formik.touched.password
                  ? "border-red-500"
                  : "border-[#02000F]/20"
              } h-11`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-sm text-red-500">{formik.errors.password}</p>
            )}
            <Link className="text-md sm:text-base" href="#">
              Forgot password?
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#003B64] w-full text-white h-11 rounded-lg mt-4"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>

          <div className="text-center text-md text-background/70 sm:text-base mt-2">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#003B64] font-semibold">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
