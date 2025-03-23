import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div className="bg-white h-full text-[#02000F] rounded-tl-4xl rounded-bl-4xl flex justify-center items-center">
      <div className="max-w-[400px] ">
        <h1 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight">
          Welcome to Surventix
        </h1>
        <p className="text-center text-md text-background/70 sm:text-lg mb-10 mt-2">
          Register to create your first account on Surventix and start exploring
        </p>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Name</Label>
            <Input
              className="border border-[#02000F]/20 h-11"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input
              className="border border-[#02000F]/20 h-11"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Phone Number</Label>
            <Input
              className="border border-[#02000F]/20 h-11"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Password</Label>
            <Input
              className="border border-[#02000F]/20 h-11"
              placeholder="Enter password"
            />
          </div>

          <div>
            <button className="bg-[#003B64] w-full text-white h-11 rounded-lg mt-4">
              Register
            </button>
          </div>

          <div className="text-center text-md text-background/70 sm:text-base mt-2">
            Already have an account?{" "}
            <Link href="/signin" className="text-[#003B64] font-semibold">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
