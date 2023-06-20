import NavMenu from "./NavMenu";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  return (
    <>
      <NavMenu />
        {children}
      <Footer />
    </>
  );
}