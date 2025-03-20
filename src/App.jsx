import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import HiringPartners from "./components/HiringPartners.jsx";
import ProgramsOffer from "./components/ProgramsOffer.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
import Marquee from "./components/MarqueeText.jsx";

function App() {
  return (
    <>
      <Header />
      <Content />
      <HiringPartners />
      <ProgramsOffer />
      <WhyChooseUs />
      <Testimonials />
      <Marquee
        text=" 🚀 Code, Create & Conquer – Your Learning Adventure Begins Here! 💻✨"
        speed="5s"
      />
      <Footer />
    </>
  );
}

export default App;
