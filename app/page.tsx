import Hero from "./components/Hero";
import AboutUs from "./components/pages/AboutUs";
import OurServices from "./components/pages/OurServices";
import WhyChooseUs from "./components/pages/WhyChooseUs";

function page() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <div className="relative">
        <OurServices className="pt-50" />
        <div className="text-center absolute top-20 left-0 right-0 ">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6B6A55] mb-4">
            خدماتنا
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            عملكم محل اهتمامنا لذلك نقدم لكم مجموعة من الخدمات المتميزة لنساهم
            في تنمية أعمالكم
          </p>
        </div>
      </div>
      
    </main>
  );
}

export default page;
