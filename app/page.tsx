import Footer from "./components/reusable/footer";
import HeroSection from "./components/hero";

import AboutPage from "./components/about";
export default function Home() {
  return (
    <>
      <main className=" w-screen h-screen relative">
        <div
          className=" text-white  w-full h-full bg-center bg-cover "
          style={{ backgroundImage: "url(/back.jpg)" }}
        >
          <div className="w-full h-full  bg-black/50">
            <HeroSection></HeroSection>
          </div>
        </div>
        <div className="h-4 bg-black"></div>
        <div className="w-full h-full">
          <AboutPage></AboutPage>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
