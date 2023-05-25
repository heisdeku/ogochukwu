import Input from "@/components/Input";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Login() {
  const router = useRouter();
  return (
    <div className="min-h-screen overflow-hidden pt-8 mx-24 px-1">
      <div className="flex justify-between flex-row items-center">
        <Image
          src={"/logo-black.svg"}
          width={99}
          height={18}
          alt="Kooha Logo Black"
        />
        <div
          className="cursor-pointer flex items-center text-gray-400 leading-text"
          aria-label="button"
        >
          <p>Don’t have an account?</p>
          <button className="text-primary-300 ml-1">Request invite</button>
        </div>
      </div>
      <section className="max-w-[430px] mx-auto pt-[180px]">
        <h2 className="text-base font-bold text-[32px] leading-[43px] mb-2">
          Agent Login
        </h2>
        <p className="leading-22">
          Enter your details and log back into your agent account
        </p>
        <form className="mt-8">
          <Input
            type="email"
            label="Email address"
            placeholder="Enter your email address"
          />
          <Input type="password" label="Password" placeholder="*******" />
        </form>
        <button className="w-full h-btn text-white bg-primary-300 rounded-tiny font-bold text-base leading-5">
          Log in{" "}
        </button>
        <div
          className="cursor-pointer flex items-center text-gray-400 leading-text mt-8"
          aria-label="button"
        >
          <p>Having troubles logging in?</p>
          <button
            onClick={() => router.push("/home")}
            className="text-primary-300 ml-1"
          >
            Reset password
          </button>
        </div>
      </section>
    </div>
  );
}

export default Login;
