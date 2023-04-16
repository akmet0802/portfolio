export default function Services() {
  return (
    <div>
      {" "}
      <div
        id="services"
        className="h-screen w-full flex flex-col  justify-around items-center"
      >
        <div className="w-full h-full flex flex-col justify-around items-center">
          <div className="flex">
            <h1>Our</h1>&nbsp;&nbsp; <h1 className="text-primary">Services</h1>
          </div>
          <div className="w-full h-[420px] flex flex-row justify-around items-center gap-8">
            <div className="card">
              <div className="flex justify-around gap-4">
                {" "}
                <h1 className="text-primary">
                  <i class="fa-solid fa-code"></i>
                </h1>
                <h2>Web Development</h2>
              </div>

              <p className="text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button className="button">Read More</button>
            </div>
            <div className="card">
              <div className="flex justify-around gap-4">
                {" "}
                <h1 className="text-primary">
                  <i class="fa-solid fa-code"></i>
                </h1>
                <h2>Web Development</h2>
              </div>

              <p className="text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button className="button">Read More</button>
            </div>
            <div className="card">
              <div className="flex justify-around gap-4">
                {" "}
                <h1 className="text-primary">
                  <i class="fa-solid fa-code"></i>
                </h1>
                <h2>Web Development</h2>
              </div>

              <p className="text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button className="button">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
