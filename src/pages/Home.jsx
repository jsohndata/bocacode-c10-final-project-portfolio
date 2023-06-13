import NavMenu from "../layout/NavMenu";
import Intro from "../layout/Intro";
import ThreeThings from "../layout/ThreeThings";
import AppLayout from "../layout/AppLayout.jsx";


export default function Home() {
  return (
    <AppLayout>
      <NavMenu />
      <Intro />
      <ThreeThings />
    </AppLayout>
  );
}