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
        anchorID="day-in-life"
        title="Day in the Life"
        content="Enter the whimsical realm of Cohort-10, where animated discussions and laughter blend in harmonious camaraderie. Each snapshot captures the essence of this enchanting journey—determined faces absorbed in studies, minds brimming with knowledge and growth. Explore our gallery and witness the magic as the ordinary transcends into extraordinary moments within the captivating world of Cohort-10."
        data={dayInLife} />
      
      <Portfolio />
      
      <CarouselBanner
        anchorID="nom-nom"
        title="Nom Nom"
        content="In this cohort of ours, we feasted and partied, strengthening our bond! The food flowed generously, fueling our connection with each delicious bite. Our taste buds rejoiced as we savored scrumptious treats, and our friendship flourished. We became a squad of food enthusiasts, creating memories sweeter than a cupcake!"
        data={nomNom} />
    </AppLayout>
  );
}