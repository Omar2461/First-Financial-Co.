"use client";

import { motion } from "framer-motion";
import Blog from "../pages/Blog";

function OurBlogSection() {
  return (
   <div className="relative bg-[#ebebe7]">
        <Blog className="pt-60 pb-20"/>
        <div className=" text-center md:flex md:items-center md:right-20 xl:right-70 absolute top-30 left-0 right-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-4xl font-bold text-[#6B6A55] mb-4"
          >
            آخر المقالات
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto w-75 md:w-110 lg:w-120 lg:text-lg xl:w-150"
          >
            تابع آخر مقالاتنا واكتشف أحدث الأخبار والنصائح المحاسبية التي تساعدك
            على تطوير أعمالك واتخاذ قرارات مالية أكثر دقة ووعيًا
          </motion.div>
        </div>
      </div>
  )
}

export default OurBlogSection