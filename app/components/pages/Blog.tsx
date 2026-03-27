"use client";

import { motion } from "framer-motion";

import Image from "next/image";

function Blog({ className }: { className?: string }) {
  const articles = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dijoz9ie7/image/upload/v1774624001/posts3-768x512_cu7ws9.webp",
      title: "المحتوى المحلي ودوره في دعم الاقتصاد الوطني ورؤية 2030",
      desc: "يُعد المحتوى المحلي من المفاهيم الحديثة التي اكتسبت أهمية متزايدة في السنوات الأخيرة، خصوصًا بعد إطلاق رؤية المملكة 2030 التي تهدف إلى تنويع الاقتصاد الوطني وتعزيز الاعتماد على الموارد المحلية.",
      date: "نوفمبر 6, 2025",
    },

    {
      id: 2,
      image:
        "https://res.cloudinary.com/dijoz9ie7/image/upload/v1774624000/posts2-768x512_zrh45p.webp",
      title: "الزكاة والضرائب في المملكة: بين الالتزام والفرص المالية",
      desc: "تُعتبر الزكاة والضرائب من أهم الركائز التي تنظم العلاقة بين المنشآت والدولة، وهي ليست مجرد التزام مالي، بل أداة لتحقيق العدالة الاقتصادية والمساهمة في التنمية الوطنية. ومن هذا المنطلق، تزداد",
      date: "نوفمبر 6, 2025",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dijoz9ie7/image/upload/v1774624000/posts1-768x512_x6ap2n.webp",
      title: "أهمية المراجعة وتدقيق الحسابات في تعزيز الثقة المالية",
      desc: "تُعد المراجعة وتدقيق الحسابات أحد أهم العناصر التي تساهم في استقرار واستدامة بيئة الأعمال، فهي ليست مجرد إجراء محاسبي روتيني، بل وسيلة أساسية لضمان الشفافية وبناء الثقة بين المنشأة وأصحابها",
      date: "نوفمبر 6, 2025",
    },
  ];
  return (
    <section
      className={`py-16 px-4 sm:px-8 md:px-10 lg:px-15 2xl:px-50 ${className || ""}`}
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center">
        {articles.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden w-85 lg:w-110 xl:w-85 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-b from-black/5 to-black/35 "></div>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                priority
                className="w-full h-full object-cover "
              />
            </div>

            <div className="p-6 flex flex-col items-start">
              <h3 className="text-lg sm:text-lg font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-4 text-[#b89b6b] font-semibold hover:underline">
                اقرأ المزيد
              </button>
            </div>

            <div className="border-t px-6 py-4 text-sm text-gray-400">
              {item.date}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
