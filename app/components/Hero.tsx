"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dijoz9ie7/image/upload/v1771697534/Gemini_Generated_Image_k4lmkbk4lmkbk4lm_az0jxd.png')",
      }}
    >
      <div className="container text-center mx-auto h-200 px-6 py-16 lg:py-24 border border-black flex flex-col md:flex-row pt-65 relative  ">
        <div className="flex flex-col text-center md:text-start w-110 md:w-150 h-fit space-y-6 -mr-8 -mt-15 md:-mt-15 md:-mr-5 relative">
          <h1 className="flex flex-col text-center md:ml-15 text-[38px] sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#3f3f3f] leading-snug">
            <span className="block">القوائم الأولى - محاسبون</span>
            <span className="block">ومراجعون قانونيون</span>
          </h1>

          <h2 className="md:mr-8 text-[22px]  text-[#b8b8a4] font-semibold">
            نقود أعمالكم نحو استقرار مالي مستدام
          </h2>
        </div>

        <p className="md:flex md:justify-center text-center text-gray-600 text-[21px] 
        md:text-xl leading-relaxed w-100 md:w-110 md:absolute -mr-3 mt-6 md:mt-0 md:mr-0 md:bottom-70 md:right-2 md:pl-8">
          في شركة القوائم الأولى نضع خبرتنا المحاسبية بين يديك لنساعدك على تحقيق
          أهدافك المالية بكفاءة وموثوقية. ملتزمين بتقديم حلول دقيقة ومبتكرة
          ومتوافقة مع أعلى المعايير المهنية.
        </p>

        <div className="hidden sm:block h-fit mr-20 ">
          <Image
            src="https://res.cloudinary.com/dijoz9ie7/image/upload/v1771672474/cpa-1-reub66lczybg6qaul99hiu2nofz3i74114fkee2s88_nlo7fa.png"
            alt="Accounting"
            width={300}
            height={300}
            className="w-80 -mr-15"
            priority
          />
        </div>
      </div>
    </section>
  );
}
