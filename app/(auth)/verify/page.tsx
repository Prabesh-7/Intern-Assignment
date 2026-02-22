"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { verifyOtpSchema, VerifyOtpSchema } from "@/lib/schema";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function VerifyOtp() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<VerifyOtpSchema>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: { verificationCode: "" },
  });

  function onSubmit(data: VerifyOtpSchema) {
    console.log("Verified code:", data.verificationCode);
  }

  return (


    // <main className="  container flex items-center justify-center  h-screen  overflow-hidden  py-10 ">
    //   <div className="flex rounded-2xl  h-full overflow-hidden">
    //     <div className=" pt-25  space-y-8 bg-primary_brand w-[640px] px-12">

     <main className="container h-screen flex item-center justify-center overflow-hidden ">
      <div className="flex item-center justify-center my-10 rounded-2xl overflow-hidden">
        <div className="flex-1 max-w-[640px] bg-primary_brand py-25 pb-80 px-12 relative">
          <h2 className="text-[48px] leading-[1.2] font-bold text-white">
            Manage your business with confidence
          </h2>
          <p className="text-white text-xl mt-8">
            Experience a secure, seamless platform that keeps every part of your
            business running smoothly.
          </p>

          {/* <div className="mt-12.5 flex item-center justify-center "> */}
          <div className=" absolute bottom-0 left-1/2 -translate-x-1/2 flex item-center justify-center ">
            <Image
              height={400}
              width={400}
              src="/images/otp.png"
              alt="Sign In Illustration"
              className="w-[372px]"
            />
          </div>
        </div>

        {/* <div className="px-[64px]px-[64px] py-[30px] space-y-[32px] flex flex-col"> */}
  

        <div className="bg-[#FFFFFF]  flex flex-col flex-1  px-[64px] py-[156px]">

          <div className="flex flex-col gap-2">

            <h1 className="text-[32px] font-semibold text-title_brand leading-[150%] tracking-normal">Verification code</h1>
            <p className=" text-[14px] font-medium text-body-text_brand leading-[150%] tracking-normal">
              We’ve sent a 6-digit verification code to your email address.<br/>
              Enter the code below to continue.</p>
          </div>

    <form


      onSubmit={handleSubmit(onSubmit)}
      className=" flex  flex-col gap-8 mt-8 "
    >
      <Controller
        name="verificationCode"
        control={control}
        render={({ field }) => (
          <InputOTP maxLength={6} value={field.value} onChange={field.onChange}   pattern={REGEXP_ONLY_DIGITS} >
            <InputOTPGroup className="gap-[45px]">
              <InputOTPSlot
                index={0}
                className="w-14 h-14 rounded-[8px] border border-[#B6B6B6]"
              />
              <InputOTPSlot
                index={1}
                className="w-14 h-14 rounded-[8px] border border-[#B6B6B6] "
              />
              <InputOTPSlot
                index={2}
                className="w-14 h-14 rounded-[8px] border border-[#B6B6B6]"
              />
              <InputOTPSlot
                index={3}
                className="w-14 h-14 rounded-[8px] border border-[#B6B6B6]"
              />
              <InputOTPSlot
                index={4}
                className="w-14 h-14 rounded-[8px] border border-[#B6B6B6]"
              />
              <InputOTPSlot
                index={5}
                className="w-14 h-14 rounded-[8px] border border-[#B6B6B6]"
              />
            </InputOTPGroup>
          </InputOTP>
        )}
      />

      {errors.verificationCode && (
        <p className="text-xs text-red-500">
          {errors.verificationCode.message}
        </p>
      )}

    <Button type="submit" variant="secondary" disabled={isSubmitting} className="w-full">
  {isSubmitting ? "Verifying…" : "Verify & Continue"}
</Button>
    </form>



    <div className="text-center text-[14px] font-normal leading-[150%] tracking-normal mt-4 text-[#AEAEB2]">
      <p>Resend code in 00:45</p>
    </div>


     <div className="text-center text-[14px] font-normal leading-[150%] tracking-normal text-body-text_brand mt-2">
            Didn’t receive the code?{" "}
            <span className="text-secondary_brand cursor-pointer">Resend Code</span>
          </div>



        </div>

        </div>
      {/* </div> */}
    </main>










  );
}
