import NavMenu from "./NavMenu";
import Footer from "./Footer";

export default function AppLayout( {children} ) {
  return (
    <div className="App">
      <NavMenu />
        {children}
      <Footer />
    </div>
  );
}