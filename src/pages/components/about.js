export default function About() {
  return (
    <div
      id="about"
      className="w-full h-screen flex flex-row justify-start items-center"
    >
      <div className="w-1/2 h-full  ">img</div>
      <div className="w-1/2 h-72 flex flex-col justify-between items-start">
        <h1>About Me</h1>
        <h2 className="text-primary">Fullstack Developer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          ullamcorper ligula enim, eu venenatis metus tempor at. Duis quam orci,
          condimentum dapibus porta quis, suscipit nec libero. Nunc gravida a.
        </p>
        <button className="button">Read More</button>
      </div>
    </div>
  );
}
