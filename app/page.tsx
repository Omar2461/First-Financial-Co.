import Hero from "./components/Hero"
import AboutUs from "./components/pages/AboutUs"
import WhyChooseUs from "./components/pages/WhyChooseUs"

function page() {
  return (
    <main>
      <Hero/>
      <AboutUs/>
      <WhyChooseUs/>
    </main>
  )
}

export default page