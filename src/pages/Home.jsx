import portfolio from '../data/portfolio.json';
import dayInLife from '../data/day-in-life.json';
import nomNom from '../data/nom-nom.json';

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
      <CarouselBanner
        anchorID="day-in-life"
        title="Day in the Life"
        content="Step into Cohort-10's whimsical realm, where lively discussions and laughter intertwine. Explore our gallery, where extraordinary moments unfold within this enchanting journey. Discover determined faces immersed in profound studies, minds brimming with growth. Join us as the ordinary transforms into captivating experiences in Cohort-10's world."
        data={dayInLife} />
      
      <Portfolio 
        anchorID="portfolio"
        title="Portfolio"
        data={portfolio} />
      
      <CarouselBanner
        anchorID="nom-nom"
        title="Nom Nom"
        content="In this cohort of ours, we feasted and partied, strengthening our bond! The food flowed generously, fueling our connection with each delicious bite. Our taste buds rejoiced as we savored scrumptious treats, and our friendship flourished. We became a squad of food enthusiasts, creating memories sweeter than a cupcake!"
        data={nomNom} />
    </AppLayout>
  );
}