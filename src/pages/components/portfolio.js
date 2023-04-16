export default function Portfolio() {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center gap-16"
      id="portfolio"
    >
      <div className="flex">
        <h1>Latest </h1>
        &nbsp;&nbsp;
        <h1 className="text-primary">Projects</h1>
      </div>
      <div className="w-full h-[460px] flex flex-col justify-between">
        <div className="flex gap-8">
          <div className="image-card"> </div>
          <div className="image-card"> </div>
          <div className="image-card"> </div>
        </div>
        <div className="flex gap-8">
          <div className="image-card"> </div>
          <div className="image-card"> </div>
          <div className="image-card"> </div>
        </div>
      </div>
    </div>
  );
}
