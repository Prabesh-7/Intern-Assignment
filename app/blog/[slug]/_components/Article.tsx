import React from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Article() {
  const htmlData =[


  

    `
    <p><span style="font-weight: bold;">Keeping your inventory accurate everywhere.</span></p>
<p>If your stock doesnt match across channels, you risk overselling, confusing customers, delaying orders, and losing trust. The good news is that with the right system and workflows, you can maintain accurate, real-time inventory with far less effort.</p>
<p>Heres a simple, practical guide on how to manage your inventory efficiently across both online and POS stores.<br /></p>
<p><br /></p>
<p><br /></p>
<div><p><br /></p></div>

  `,


  
    `
 <p></p>
<ol><li><span style="font-weight: bold;">Use One Central Inventory System for All Channels</span></li></ol>
<p></p>
<p>The most important step is to avoid managing stock separately in each platform.
You need one unified system that acts as your single source of truth.<br /></p>
<p><br /></p>
<p></p>
<br />
<p></p>
<p><br /></p>
<p><br /></p>
<div><p><br /></p></div>
  `,


   
    `
 <p></p>
<ol><li><span style="font-weight: bold;">Use One Central Inventory System for All Channels</span></li></ol>
<p></p>
<p>The most important step is to avoid managing stock separately in each platform.
You need one unified system that acts as your single source of truth.<br /></p>
<p><br /></p>
<p></p>
<br />
<p></p>
<p><br /></p>
<p><br /></p>
<div><p><br /></p></div>
  `,


   
    `
 <p></p>
<ol><li><span style="font-weight: bold;">Use One Central Inventory System for All Channels</span></li></ol>
<p></p>
<p>The most important step is to avoid managing stock separately in each platform.
You need one unified system that acts as your single source of truth.<br /></p>
<p><br /></p>
<p></p>
<br />
<p></p>
<p><br /></p>
<p><br /></p>
<div><p><br /></p></div>
  `,


   
    `
 <p></p>
<ol><li><span style="font-weight: bold;">Use One Central Inventory System for All Channels</span></li></ol>
<p></p>
<p>The most important step is to avoid managing stock separately in each platform.
You need one unified system that acts as your single source of truth.<br /></p>
<p><br /></p>
<p></p>
<br />
<p></p>
<p><br /></p>
<p><br /></p>
<div><p><br /></p></div>
  `,








  ] 


  
  return (

    <section className="container mx-auto">

      <div className="flex  flex-row gap-6 lg:mt-15 mt-6" >


      <div className="flex flex-col flex-1 px-4 lg:px-0 ">
          {htmlData.map((html, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: html }}
              
            />
          ))}
        </div>





    <div className="hidden lg:flex flex-col gap-6 ">
      <h1 className="text-[20px] font-semibold leading-[160%] tracking-normal text-title_brand">On this page</h1>

     <div className="bg-background_brand w-[376px]  rounded-2xl ">



      <div>
  <aside className="relative px-6 py-6 flex flex-col ">

    {/*left border*/}
    <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-gray-200 rounded"></div>

    {/* ACTIVE BUTTON*/}
    <Button 
      className="relative text-[16px] font-medium leading-[150%] tracking-normal text-primary_brand justify-start pl-6"
      variant='ghost'
    >
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary_brand rounded-r"></div>
      Use One Unified Inventory System
    </Button>

    {/* Inactive buttons */}
    <Button
      className="text-[16px] font-medium leading-[150%] tracking-normal text-title_brand justify-start pl-6"
      variant='ghost'
    >
      Enable Real-Time Syncing
    </Button>

    <Button 
      className="text-[16px] font-medium leading-[150%] tracking-normal text-title_brand justify-start pl-6"
      variant='ghost'
    >
      Set Up Low-Stock Alerts
    </Button>

    <Button
      className="text-[16px] font-medium leading-[150%] tracking-normal text-title_brand justify-start pl-6"
      variant='ghost'
    >
      Organize Products With Clear SKUs 
    </Button>
          
    <Button
      className="text-[16px] font-medium leading-[150%] tracking-normal text-title_brand justify-start pl-6"
      variant='ghost'
    >
      Automate Stock Updates Across Channels
    </Button>

    <Button
      className="text-[16px] font-medium leading-[150%] tracking-normal text-title_brand justify-start pl-6"
      variant='ghost'
    >
      Review Stock History Regularly
    </Button>
  </aside>
</div>



          </div>

      {/* <div className="bg-background_brand ">

      </div> */}

      <div className="flex justify-between">

        
        <h2 className="text-[20px] font-semibold tracking-normal leading-[160%]"> 
          Share this article</h2>
        {/* <div className="  bg-background_brand h-10 w-10 justify-center items-center flex rounded-[8px]">
           <Share2
           className="h-3 w-[10px]"/>
        </div> */}

        <Button
          size="icon"
          variant="ghost"
          className=" bg-background_brand justify-center items-center flex rounded-[8px] ">
          <Share2
          className="h-3 w-[10px] text-black"/>
        </Button>
    
      </div>
    </div>



  </div>

    </section>
  );
}

