'use client';
import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  createStoreSchema, CreateStoreSchema } from "../../../lib/schema";

import { Button } from "@/components/ui/button";

import { Warning } from "../../icons/Icon";
import { Input } from "@/components/ui/input"


import {
  Field,

  FieldLabel,

} from "@/components/ui/field"

import Image from "next/image";

export default function page() {


  



     const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateStoreSchema>({
    resolver: zodResolver(createStoreSchema),
  });


   async function onSubmit(data: CreateStoreSchema) {
      console.log("Form Data:", data);

      reset();

   }

  return (

         <main className="container h-screen flex item-center justify-center overflow-hidden">
      <div className="flex item-center justify-center my-10 rounded-2xl overflow-hidden ">
        <div className="flex-1 max-w-[640px]  bg-primary_brand py-5 pb-80 px-12 relative">
          <h2 className={"font-inter text-[48px] leading-[120%] pt-20 font-bold tracking-normal text-white"}>
            Manage your business with confidence
          </h2>
          <p className="text-white text-xl mt-6 font-inter">
            Experience a secure, seamless platform that keeps every part of your
            business running smoothly.
          </p>

          <div className="absolute bottom-[-98] left-1/2 -translate-x-1/2 flex item-center justify-center ">
            <Image
              height={400}
              width={400}
              src="/images/createstore.png"
              alt="Sign In Illustration"
              className="w-[372px]"
            />
          </div>
        </div>

   

        <div className="flex-1 bg-white relative">
                    <div className="px-[64px] py-[24px] space-y-[16px] flex flex-col ">
      <div>
        <h1 className="text-[30px] font-semibold leading-[150%] tracking-normal text-[#000000] text-center ">
          Logo goes Here
        </h1>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-[28px] font-semibold leading-[150%] tracking-normal text-title_brand">
          Set up your business details
        </h2>
        <p className="text-[16px] font-normal leading-[150%] tracking-normal text-body-text_brand">
         Tell us your business name and type so we can personalize your dashboard and tools for your needs.
        </p>
      </div>
      

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


         <Field className="gap-2 ">
                <FieldLabel className="text-base text-title_brand font-medium ">
                  {' '}
                Business / Store Name
                </FieldLabel>

                <Input className="h-10 border border-[#B6B6B6]"
                {...register("storeName")}
                />
                  {errors.storeName && (
                  <p className="text-sm text-red-500">{errors.storeName.message}</p>
                )}
              </Field>



  <Field className="gap-2">
        <FieldLabel className="text-base text-title_brand font-medium ">
                  {' '}
                Select Plan
                </FieldLabel>

                  <select
    {...register("plan")}
    className="h-10 border border-[#B6B6B6] rounded-md px-3 focus:outline-none"
  >
    <option value="">Select</option>
    <option value="general">General</option>
    <option value="fashion">Fashion</option>
    <option value="stores_and_accessories">Stores & Accessories</option>
    <option value="beauty_and_cosmetics">Beauty & Cosmetics</option>
    <option value="local_and_online_service">Local & Online Service</option>
  </select>

  {errors.plan && (
    <p className="text-sm text-red-500">{errors.plan.message}</p>
  )}


  </Field>

     <Field className="gap-2 ">
                <FieldLabel className="text-base text-title_brand font-medium ">
                  {' '}
                Store Address
                </FieldLabel>

                <Input className="h-12 border border-[#B6B6B6]"
                {...register("storeAddress")}
                />
                  {errors.storeAddress && (
                  <p className="text-sm text-red-500">{errors.storeAddress.message}</p>
                )}
              </Field>



     <Field className="gap-2 ">
                <FieldLabel className="text-base text-title_brand font-medium ">
                  {' '}
                Contact Number
                </FieldLabel>

                <Input className="h-10 border border-[#B6B6B6]"
                {...register("contactNumber")}
                />
                  {errors.contactNumber && (
                  <p className="text-sm text-red-500">{errors.contactNumber.message}</p>
                )}
              </Field>




  {/* Submit Button */}
  <Button
    type="submit"
    variant="secondary"
    disabled={isSubmitting}
    className="w-full h-10"
  >
    {isSubmitting ? "Creating..." : "Create Store"}
  </Button>
</form>


<div className="bg-[#E3F1FF] h-[37px] w-[560px] flex justify-center gap-2 items-center   rounded-[8px]">
  <Warning/>
   
  <p  className="py-2 text-[#0088FF] ">

  

    You can update your details anytime from your{" "}<span className=" font-semibold">account settings.</span> </p>


</div>

     
    </div>
      
        </div>
      </div>
    </main>










   



  );
}
