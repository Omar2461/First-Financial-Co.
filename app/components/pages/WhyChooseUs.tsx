import React from 'react'

function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-[url('/images/bg.jpg')] bg-cover bg-center">
 
  <div className="absolute inset-0 bg-[#5f5a42]/80"></div>

  <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

  
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      لماذا تختارنا؟
    </h2>

    <p className="max-w-2xl mx-auto text-sm md:text-base mb-16">
      نحرص في شركة القوائم الأولى على تقديم خدمات محاسبية موثوقة تلبي احتياجات
      عملائنا وتحقق لهم التميز والنجاح
    </p>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

 
      <div className="relative bg-[#f4f2e8] rounded-2xl shadow-lg p-8 text-center text-gray-800">

    
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#8c8868] w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl shadow">
          🤝
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3 text-[#8c8868]">
          شريك نجاح
        </h3>

        <p className="text-sm leading-relaxed">
          نؤمن بأن نجاح عملائنا هو أساس نجاحنا، ونعمل لبناء شراكات طويلة الأمد
          تقوم على الثقة والاحترافية
        </p>

      </div>

  
      <div className="relative bg-[#f4f2e8] rounded-2xl shadow-lg p-8 text-center text-gray-800">

        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#8c8868] w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl shadow">
          ⚙️
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3 text-[#8c8868]">
          حلول مخصصة
        </h3>

        <p className="text-sm leading-relaxed">
          نقدم خدمات مالية تلبي احتياجات كل عميل بدقة، ونساعد عملاءنا على تحقيق
          أهدافهم بكفاءة واستدامة
        </p>

      </div>


      <div className="relative bg-[#f4f2e8] rounded-2xl shadow-lg p-8 text-center text-gray-800">

        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#8c8868] w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl shadow">
          📖
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3 text-[#8c8868]">
          خبرة موثوقة
        </h3>

        <p className="text-sm leading-relaxed">
          نمتلك خبرة واسعة في المحاسبة والمراجعة، ونلتزم بتطبيق أعلى المعايير
          لضمان الدقة والموثوقية
        </p>

      </div>

    </div>

  </div>
</section>
  )
}

export default WhyChooseUs