import AboutUs from "../components/pages/AboutUs";
import WhyChooseUs from "../components/pages/WhyChooseUs";
import Pane from "../components/Pane";
import ClientsSection from "../components/sections/ClientsSection";

function page() {
  return (
    <div>
      <Pane
        title="لماذا تختارنا؟"
        details="تعرف علينا عن قرب واكتشف كيف نصنع الفرق في عالم المحاسبة"
      />
      <AboutUs />
      <WhyChooseUs />
      <ClientsSection />
    </div>
  );
}

export default page;
