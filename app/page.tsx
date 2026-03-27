import Hero from "./components/Hero";
import AboutUs from "./components/pages/AboutUs";

import WhyChooseUs from "./components/pages/WhyChooseUs";
import OurServicesSection from "./components/sections/OurServicesSection";
import OurBlogSection from "./components/sections/OurBlogSection";

function page() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <WhyChooseUs />

      <OurServicesSection />
      <OurBlogSection />
    </main>
  );
}

export default page;
