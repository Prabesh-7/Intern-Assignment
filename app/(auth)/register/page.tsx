"use client";

import React , {useState} from "react";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "../../../lib/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {
  Field,

  FieldLabel,

} from "@/components/ui/field"

import { Eye, EyeOff } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox"

import Image from "next/image";

export default function RegisterPage() {

  
     const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: RegisterSchema) {
    console.log("Form Data:", data);
  }







  return (


    <main className="  container flex items-center justify-center  h-screen  overflow-hidden  py-10 ">
      <div className="flex rounded-2xl  h-full overflow-hidden">
        <div className=" pt-25  space-y-8 bg-primary_brand w-[640px] px-12">
          <h2 className="text-[48px] leading-[1.2] font-bold text-white">
            Manage your business with confidence
          </h2>
          <p className="text-white text-xl">
            Experience a secure, seamless platform that keeps every part of your
            business running smoothly.
          </p>

          <div className="mt-12.5 flex item-center justify-center ">
            <Image
              height={400}
              width={400}
              src="/images/login.png"
              alt="Sign In Illustration"
              className="w-[372px]"
            />
          </div>
        </div>

        {/* <div className="px-[64px] py-[30px] space-y-[32px] flex flex-col"> */}
            <div  className=" bg-[#FFFFFF]  flex flex-1 flex-col px-[64px] py-[59px]  gap-8  "> 

                 <div >
            <h1 className="text-[36px] font-semibold leading-[150%] tracking-normal text-[#000000] text-center">
              Logo goes Here
            </h1>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-[32px] font-semibold leading-[150%] tracking-normal text-title_brand">
              Set up your store
            </h2>
            <p className="text-[16px] font-normal leading-[150%] tracking-normal text-body-text_brand">
             Just a few details and you're ready to go.
            </p>
          </div>



                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

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
    



         {/* Checkbox */}
      <div className="flex items-start gap-2">
        <Controller
          name="terms"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="terms"
              checked={field.value}
              onCheckedChange={field.onChange}  
              className="border border-[#D7D7D7]"
            />
          )}
        />
        <label htmlFor="terms" className="text-[14px] leading-snug cursor-pointer">
          By proceeding, you agree to the{" "}
          <span  className="text-teal-500 hover:underline">
            Terms and Conditions
          </span>{" "}
          and{" "}
          <span  className="text-teal-500 hover:underline">
            Privacy <br/> Policy
          </span>
        </label>
      </div>

      {/* Show error if unchecked on submit */}
      {errors.terms && (
        <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
      )}

        

        {/* Button */}
        <Button
          type="submit"
          variant="secondary"
          disabled={isSubmitting}
          className="w-[560px] h-[64px]"
        >
          {isSubmitting ? "Submitting..." : "Register"}
        </Button>
      </form>

        <div className="text-center text-[14px] font-normal leading-[150%] tracking-normal text-body-text_brand ">
            Already have an account?{" "}
            <span className="text-secondary_brand">Log in</span>
          </div>
            </div>
     
        </div>
      {/* </div> */}
    </main>
 


 
  );
}
