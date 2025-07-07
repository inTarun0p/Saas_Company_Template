
'use client';

import dynamic from 'next/dynamic';
import LazyLoad from './Components/LazyLoad';

// Dynamically import components with proper named exports
const Hero = dynamic(() => import('./Components/Main Hero.jsx/Hero').then(mod => mod.Hero), { ssr: false });
const MarqueeDemo = dynamic(() => import('./Components/Marquee/MarqueeDemo').then(mod => mod.MarqueeDemo), { ssr: false });
const HoverSliderDemo = dynamic(() => import('./Components/Slider/Slide').then(mod => mod.HoverSliderDemo), { ssr: false });
const FeatureDemo = dynamic(() => import('./Components/FeatureDemo/Component').then(mod => mod.FeatureDemo), { ssr: false });
const Features = dynamic(() => import('./Components/Featurs/features-4').then(mod => mod.Features), { ssr: false });
const ShuffleHeroDemo = dynamic(() => import('./Components/Shuffle/Shuffle').then(mod => mod.ShuffleHeroDemo), { ssr: false });
const Accordion_02 = dynamic(() => import('./Components/Accordions/ruixen-accordian02'), { ssr: false });
const AnimatedTestimonialsDemo = dynamic(() => import('./Components/Testinomials/Testimonials').then(mod => mod.AnimatedTestimonialsDemo), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full px-35">
        <LazyLoad>
          <MarqueeDemo />
        </LazyLoad>
        
        <LazyLoad>
          <HoverSliderDemo />
        </LazyLoad>
        
        <LazyLoad>
          <FeatureDemo />
        </LazyLoad>
        
        <LazyLoad>
          <Features />
        </LazyLoad>
        
        <LazyLoad>
          <ShuffleHeroDemo />
        </LazyLoad>
        
        <LazyLoad>
          <Accordion_02 />
        </LazyLoad>
        
        <LazyLoad>
          <AnimatedTestimonialsDemo />
        </LazyLoad>
      </div>
    </>
  );
}
