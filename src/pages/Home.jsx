import Intro from "../layout/Intro";
import ThreeThings from "../layout/ThreeThings";
import CarouselBanner from "../layout/CarouselBanner";
import AppLayout from "../layout/AppLayout.jsx";
import Portfolio from "../layout/Portfolio/Portfolio";

import dayInLife from '../data/day-in-life.json';
import nomNom from '../data/nom-nom.json';

export default function Home() {
  return (
    <AppLayout>      
      <Intro />
      <ThreeThings />
      <CarouselBanner
        title="Day in the Life"
        content="111 Step into the whimsical realm of Cohort-10, where animated discussions and laughter create a symphony of camaraderie. Each snapshot captures the essence of this enchanting journey—determined faces immersed in studies, minds swirling with knowledge and growth. Explore our gallery and witness the magic as the ordinary transforms into extraordinary moments within the captivating world of Cohort-10."
        data={dayInLife} />
      
      <Portfolio />
      
      <CarouselBanner
        title="Nom Nom"
        content="222 Step into the whimsical realm of Cohort-10, where animated discussions and laughter create a symphony of camaraderie. Each snapshot captures the essence of this enchanting journey—determined faces immersed in studies, minds swirling with knowledge and growth. Explore our gallery and witness the magic as the ordinary transforms into extraordinary moments within the captivating world of Cohort-10."
        data={nomNom} />
    </AppLayout>
  );
}