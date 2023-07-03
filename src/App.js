import {
  Navbar,
  Header,
  AboutUs,
  SpecialMenu,
  Chef,
  Laurels,
  FindUs,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Laurels />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
