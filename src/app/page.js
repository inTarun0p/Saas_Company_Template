
'use client';

import dynamic from 'next/dynamic';
import LazyLoad from './Components/LazyLoad';

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-[50vh] w-full">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
  </div>
);

// Dynamically import components with loading states and proper intersection observer
const Hero = dynamic(
  () => import('./Components/Main Hero.jsx/Hero').then(mod => mod.Hero),
  { 
    ssr: false,
    loading: () => <div className="min-h-screen" /> // Reserve space for hero
  }
);

const MarqueeDemo = dynamic(
  () => import('./Components/Marquee/MarqueeDemo').then(mod => mod.MarqueeDemo),
  { ssr: false, loading: () => <div className="h-24" /> }
);

const HoverSliderDemo = dynamic(
  () => import('./Components/Slider/Slide').then(mod => mod.HoverSliderDemo),
  { ssr: false, loading: () => <LoadingSpinner /> }
);

const FeatureDemo = dynamic(
  () => import('./Components/FeatureDemo/Component').then(mod => mod.FeatureDemo),
  { ssr: false, loading: () => <LoadingSpinner /> }
);

const Features = dynamic(
  () => import('./Components/Featurs/features-4').then(mod => mod.Features),
  { ssr: false, loading: () => <LoadingSpinner /> }
);

const ShuffleHeroDemo = dynamic(
  () => import('./Components/Shuffle/Shuffle').then(mod => mod.ShuffleHeroDemo),
  { ssr: false, loading: () => <LoadingSpinner /> }
);

const Accordion_02 = dynamic(
  () => import('./Components/Accordions/ruixen-accordian02'),
  { ssr: false, loading: () => <LoadingSpinner /> }
);

const AnimatedTestimonialsDemo = dynamic(
  () => import('./Components/Testinomials/Testimonials').then(mod => mod.AnimatedTestimonialsDemo),
  { ssr: false, loading: () => <LoadingSpinner /> }
);

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-20 px-25">
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
