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
        content="Explore our gallery, where extraordinary moments unfold within each photo as immersed in our studies with growth mind. Join us as the ordinary transforms into captivating experiences during Cohort-10."
        data={dayInLife} />
      
      <Portfolio 
        anchorID="portfolio"
        title="Portfolio"
        data={portfolio} />
      
      <CarouselBanner
        anchorID="nom-nom"
        title="Nom Nom"
        content="We feasted and partied, strengthening our bond! The energy flowed generously, fueling our code with each delicious bite. Our taste buds rejoiced and our connection flourished, creating memories sweeter than a cupcake!"
        data={nomNom} />
    </AppLayout>
  );
}