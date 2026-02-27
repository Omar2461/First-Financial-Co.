"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center "
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dijoz9ie7/image/upload/v1771697534/Gemini_Generated_Image_k4lmkbk4lmkbk4lm_az0jxd.png')",
      }}
    >
      <div className="container text-center mx-auto h-200  md:px-6 lg:py-24 flex flex-col items-center sm:items-start md:flex-row pt-30 sm:pt-65 relative 
     xl:py-20 xl:pl-0 xl:pr-0
      ">
        <div
          className="flex flex-col items-center  sm:items-start lg:justify-center lg:items-center w-90 md:w-fit h-fit space-y-6 
        md:-mt-10 md:-mr-5 relative xl:mr-25 2xl:mr-60 2xl:mt-30 lg:w-130 lg:mt-25 lg:mr-10
        "
        >
          <h1
            className="flex flex-col text-center md:ml-15 xl:ml-0 text-[38px] sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-[#505041]
        md:w-100 lg:w-fit
          "
          >
            <span className="">القوائم الأولى - محاسبون ومراجعون قانونيون</span>
          </h1>

          <h2 className="w-80 sm:w-90 md:w-100 md:mr-8 md:mt-3 lg:mr-0 lg:ml-17 xl:ml-0 xl:mt-0 lg:text-[24px] text-[22px] text-[#909064] ">
            نقود أعمالكم نحو استقرار مالي مستدام
          </h2>
        </div>

        <p
          className="md:flex md:justify-center text-center text-black text-[21px] 
           md:text-xl leading-relaxed w-90 md:w-110 lg:w-140 2xl:w-140 md:absolute sm:-mr-3 mt-6 md:mr-0 md:bottom-64 md:right-2 md:pl-8
           lg:pl-0 lg:bottom-75 2xl:right-54 xl:right-20 xl:items-center xl:bottom-83 2xl:bottom-75 xl:text-md tracking-[.25em]  "
        >
          في شركة القوائم الأولى نضع خبرتنا المحاسبية بين يديك لنساعدك على تحقيق
          أهدافك المالية بكفاءة وموثوقية. ملتزمين بتقديم حلول دقيقة ومبتكرة
          ومتوافقة مع أعلى المعايير المهنية.
        </p>

        <div className="hidden sm:block h-fit ml-14 md:flex md:justify-center lg:mr-20 lg:mt-33 xl:mr-30 xl:mt-20">
          <Image
            src="https://res.cloudinary.com/dijoz9ie7/image/upload/v1771672474/cpa-1-reub66lczybg6qaul99hiu2nofz3i74114fkee2s88_nlo7fa.png"
            alt="Accounting"
            width={300}
            height={300}
            className="w-95 -mr-15 md:mr-0 xl:mr-8 xl:w-85 lg:w-57"
            priority
          />
        </div>
      </div>
    </section>
  );
}
