import AboutUs from "../components/pages/AboutUs";
import WhyChooseUs from "../components/pages/WhyChooseUs";
import Pane from "../components/Pane";

function page() {
  return (
    <div>
      <Pane
        title="لماذا تختارنا؟"
        details="تعرف علينا عن قرب واكتشف كيف نصنع الفرق في عالم المحاسبة"
      />
      <AboutUs />
      <WhyChooseUs />
    </div>
  );
}

export default page;
