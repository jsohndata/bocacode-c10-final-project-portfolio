import Intro from "../layout/Intro";
import ThreeThings from "../layout/ThreeThings";
import CarouselBanner from "../layout/CarouselBanner";
import AppLayout from "../layout/AppLayout.jsx";
import Portfolio from "../layout/Portfolio/Portfolio";

export default function Home() {
  return (
    <AppLayout>      
      <Intro />
      <ThreeThings />
      <CarouselBanner />
      <Portfolio />
    </AppLayout>
  );
}