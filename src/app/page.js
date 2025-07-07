
import Accordion_02 from "./Components/Accordions/ruixen-accordian02";
import { FeatureDemo } from "./Components/FeatureDemo/Component";
import { Hero } from "./Components/Main Hero.jsx/Hero";
import { MarqueeDemo } from "./Components/Marquee/MarqueeDemo";
import { ShuffleHeroDemo } from "./Components/Shuffle/Shuffle";
import { HoverSliderDemo } from "./Components/Slider/Slide";
import { AnimatedTestimonialsDemo } from "./Components/Testinomials/Testimonials";

export default function Home() {
  return (
    <>
    
      <Hero />
      <div className="w-full px-35">
      <MarqueeDemo />
      <HoverSliderDemo />
      <FeatureDemo/>
      <ShuffleHeroDemo/>
      <Accordion_02/>
      <AnimatedTestimonialsDemo/>
      </div>
    </>
  );
}
