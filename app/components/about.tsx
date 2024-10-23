
export default function AboutPage() {
  return (
    <main
      className="flex flex-col w-full h-full bg-cover bg-center flex-wrap"
      style={{ backgroundImage: "url(/one.webp)" }}
    >
      <div className="w-full h-full justify-center items-center flex bg-black/50">
        <div className=" text-white flex flex-col justify-center items-center gap-3  pt-4  w-2/3 lg:w-2/4">
          <h2 className="  pt-4 text-5xl lg:text-7xl text-center  font-bold ">
            About Galaxy of Horrors
          </h2>
          <p className="lg:text-xl text-center">
            "Galaxy of Horrors" is a captivating anthology film that weaves
            together a collection of spine-chilling horror stories set in a
            sci-fi universe. Each segment explores the darker aspects of
            humanity, blending traditional horror elements with futuristic and
            cosmic themes. From alien encounters to societal breakdowns, the
            stories are characterized by unsettling visuals and
            thought-provoking narratives that challenge viewers' perceptions of
            fear and existence. The film effectively combines suspense,
            surrealism, and psychological terror, making it an engaging
            experience for fans of both genres. Through its diverse storytelling
            and atmospheric direction, "Galaxy of Horrors" delivers a haunting
            reflection on the unknown and the monsters both in and out of
            ourselves.
          </p>
        </div>
      </div>
    </main>
  );
}
