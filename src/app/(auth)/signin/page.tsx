import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const Signin = () => {
  return (
    <div className="bg-white h-full text-[#02000F] rounded-tl-4xl rounded-bl-4xl flex justify-center items-center">
      <div className="max-w-[400px] ">
        <h1 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight">
          Welcome back
        </h1>
        <p className="text-center text-md text-background/70 sm:text-lg mb-10 mt-2">
          Login to your account on Surventix and start exploring
        </p>

        <form className="flex flex-col gap-4">
      
          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input
              className="border border-[#02000F]/20 h-11"
              placeholder="Enter your email"
              type="email"
            />
          </div>
        
          <div className="flex flex-col gap-2">
            <Label>Password</Label>
            <Input
              className="border border-[#02000F]/20 h-11"
              placeholder="Enter password"
            />

            <Link className="text-md sm:text-base" href='#'>Forgot password?</Link>
          </div>

          <div>
            <button className="bg-[#003B64] w-full text-white h-11 rounded-lg mt-4">Login</button>
          </div>

          <div className="text-center text-md text-background/70 sm:text-base mt-2">
            Don&apos;t have an account? <Link href='/signup' className="text-[#003B64] font-semibold">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
