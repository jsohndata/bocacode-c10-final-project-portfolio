import Footer from "./Footer";

export default function AppLayout( {children} ) {
  return (
    <div className="App">
      <main>{children}</main>
      <Footer />
    </div>
  );
}