"use client";

import { motion } from "framer-motion";
import OurServices from "../pages/OurServices";

function OurServicesSection() {
 return (
      <div className="relative">
         <OurServices className="pt-60 pb-20" />
         <div className="text-center absolute top-20 left-0 right-0 ">
           <motion.div
             initial={{ opacity: 0, scale: 0.6 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
             className="text-3xl md:text-4xl font-bold text-[#6B6A55] mb-4"
           >
             خدماتنا
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 2 }}
             viewport={{ once: true }}
             className="text-gray-600 max-w-2xl mx-auto w-80"
           >
             عملكم محل اهتمامنا لذلك نقدم لكم مجموعة من الخدمات المتميزة لنساهم
             في تنمية أعمالكم
           </motion.div>
         </div>
       </div>
   )
}

export default OurServicesSection