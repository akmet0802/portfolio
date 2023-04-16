export default function Base() {
  return (
    <div id="home" className="w-full h-screen flex flex-col justify-center ">
      <div
        id="text"
        className="w-2/5 h-[320px] flex flex-col justify-between items-start"
      >
        <h2>Hello,It's Me</h2>
        <h1>Temuulen</h1>
        <div className="flex">
          <h2>and I'm a</h2> &nbsp;{" "}
          <h2 className="text-primary"> Fullstack Developer</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
          magna tristique nulla egestas porttitor.
        </p>
        <div id="icon" className="flex w-64 justify-between ">
          <a href="https://www.facebook.com/mamoru.endo.108">
            <i id="logo" className="fa-brands fa-facebook"></i>{" "}
          </a>
          <i id="logo" className="fa-brands fa-twitter"></i>
          <i id="logo" className="fa-brands fa-instagram"></i>
          <i id="logo" className="fa-brands fa-linkedin"></i>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
