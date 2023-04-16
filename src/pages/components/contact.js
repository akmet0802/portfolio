export default function Contact() {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center py-4 items-center gap-4"
      id="contact"
    >
      <div className="flex">
        <h1>Contact </h1>
        &nbsp;&nbsp;
        <h1 className="text-primary">Me!</h1>
      </div>
      <div className="w-2/3 h-2/3 flex flex-col justify-around font-mono text-base text-white  ">
        <div className="w-full h-12 flex justify-between gap-4">
          <input
            placeholder="Full Name"
            type="text"
            className="w-1/2 h-full bg-[#313743] rounded-md px-6"
          ></input>
          <input
            type="email"
            placeholder="Email Address"
            className="w-1/2 h-full bg-[#313743] rounded-md px-6"
          ></input>
        </div>
        <div className="w-full h-12 flex gap-4">
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-1/2 h-full bg-[#313743] rounded-md px-6"
          ></input>
          <input
            placeholder="Email Subject"
            type="text"
            className="w-1/2 h-full bg-[#313743] rounded-md px-6"
          ></input>
        </div>
        <textarea
          placeholder="Enter Message"
          type="text"
          className="w-full h-72 bg-[#313743] rounded-md flex justify-start px-6 py-4"
        ></textarea>
      </div>
      <button className="button">Send Message</button>
    </div>
  );
}
