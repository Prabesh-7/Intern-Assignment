"use client";

import Image from "next/image";
import React , {useState} from "react";

import { GoogleIcon } from "../../icons/Icon";
import { Eye, EyeOff } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "../../../lib/schema";

import { Input } from "@/components/ui/input"
import {
  Field,

  FieldLabel,

} from "@/components/ui/field"

import { Button } from "@/components/ui/button";


export default function page() {

   const [showPassword, setShowPassword] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchema) {
    console.log("Form Data:", data);
  }

  return (
   

     <main className="container h-screen flex item-center justify-center overflow-hidden">
      <div className="flex item-center justify-center my-10 rounded-2xl overflow-hidden">
        <div className="flex-1 max-w-[640px] bg-primary_brand py-5 pb-80 px-12 relative">
          <h2 className="text-[48px] pt-20 leading-[1.2] font-bold text-white">
            Manage your business with confidence
          </h2>
          <p className="text-white text-xl mt-8">
            {' '}
            Experience a secure, seamless platform that keeps every part of your
            business running smoothly.
          </p>
          <div className=" absolute bottom-0 left-1/2 -translate-x-1/2 flex item-center justify-center ">
            <Image
              height={400}
              width={400}
              src="/images/login.png"
              alt="Sign In Illustration"
              className="w-[372px] "
            />
          </div>
        </div>



        <div className="flex-1 bg-white relative">
          <div className="px-[64px] py-[30px] space-y-[16px] flex flex-col ">
            <div>
              <h1 className="text-[36px] font-semibold leading-[150%] tracking-normal text-[#000000] text-center ">
                Logo goes Here
              </h1>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-[32px] font-semibold leading-[150%] tracking-normal text-title_brand">
                Welcome
              </h2>
              <p className="text-[16px] font-normal leading-[150%] tracking-normal text-body-text_brand">
                Log in to manage your products, orders, inventory, shipping, and
                more — all from one dashboard.
              </p>
            </div>

            

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">


              <Field className="gap-2 ">
                <FieldLabel className="text-base text-title_brand font-medium ">
                  {' '}
                  Email
                </FieldLabel>

                <Input className="h-12 border border-[#B6B6B6]"
                {...register("email")}
                />
                  {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </Field>

              <Field className="gap-2">
                <FieldLabel className="text-base text-title_brand font-medium">
                  {' '}
                  Password
                </FieldLabel>

         

                       <div className="relative">
                  <Input
                    className="h-12 border-[#B6B6B6] pr-12"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                </div>

                 

                  {errors.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </Field>

              <Button type="submit" disabled={isSubmitting} variant={'secondary'} className="w-full h-14">
                Login
              </Button>
            </form>





       

            <div className="flex items-center gap-4">
  <hr className="flex-1 border-t border-[#B6B6B6]" />
  <span className="text-sm text-body-text_brand">OR</span>
  <hr className="flex-1 border-t border-[#B6B6B6]" />
</div>

            <Button
              variant="ghost"
              className="w-[560px] h-[64px] h-14 bg-[#D7D7D7]"
            >
              <GoogleIcon/>
              Log in with google
            </Button>

            <div className="text-center text-[14px] left-0 w-full font-normal leading-[150%] tracking-normal text-body-text_brand absolute bottom-[10px]">
              Dont have an account?{' '}
              <span className="text-secondary_brand">Create a free store</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
