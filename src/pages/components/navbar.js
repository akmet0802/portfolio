export default function Navbar() {
  return (
    <div
      id="navbar"
      className="fixed px-28 top-0 left-0 z-20 flex flex-row justify-between items-center w-full h-16  bg-secondary "
    >
      <h1 className="text-white font-bold text-3xl">.Portfolio</h1>
      <div className="  justify-between ">
        <a className="navbtn" href="#home">
          <button>Home</button>
        </a>
        <a className="navbtn" href="#about">
          <button>About</button>
        </a>
        <a className="navbtn" href="#services">
          <button>Services</button>
        </a>
        <a className="navbtn" href="#portfolio">
          <button>Portfolio</button>
        </a>
        <a className="navbtn" href="#contact">
          <button>Contact</button>
        </a>
      </div>
    </div>
  );
}
