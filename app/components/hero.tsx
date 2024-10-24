import Header from "./reusable/header";

export default function HeroSection() {
  return (
    <>
      <Header></Header>
      <div
        className=" text-white  w-full h-full bg-center bg-cover "
        style={{ backgroundImage: "url(/back.jpg)" }}
      >
        <div className="w-full h-full  bg-black/50">
          <main className=" flex items-center w-full h-full">
            <div className=" pl-11 flex flex-col w-2/3 md:w-2/4 gap-3">
              <h1 className=" text-7xl lg:text-8xl font-bold ">
                Galaxy of Horrors
              </h1>
              <p className="text-lg mb-14">
                Take a tour of some of the most terrifying and mind-blowing
                destinations in our galaxy … and beyond. After a visit to these
                nightmare worlds, you may never want to leave Earth again! You
                can also download our free posters — based on real NASA science
                — if you dare.
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
