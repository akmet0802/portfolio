import About from "./components/about";
import Base from "./components/home";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full h-auto bg-secondary flex flex-col justify-start items-start px-28 relative">
        <div
          id="body"
          className="w-full h-screen flex flex-col justify-start items-start  "
        >
          <Base />
        </div>
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
