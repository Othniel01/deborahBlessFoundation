import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full">
      <div className="mt-[4rem]  min-[1055px]:mt-[8rem] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] relative w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-center font-medium">ABOUT US</h1>

          <div className="w-full mt-[3rem] p-5 h-[690px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white">
            <Image
              src={"/image/image-five.png"}
              alt="Cover Image"
              className="filter  object-cover w-full h-full"
              width={2740}
              height={2740}
              quality={75}
            />
          </div>

          <p className="mt-[4rem] text-center w-[88%] text-lg">
            {" "}
            The Deborah Bless Foundation was established to carry out programs,
            events and conferences aimed at spreading the gospel of Jesus christ
            WORLDWIDE The Deborah Bless Foundation was established to carry out
            programs, events and conferences aimed at spreading the gospel of
            Jesus christ. The Deborah Bless Foundation was established to carry
            out programs, events and conferences aimed at spreading the gospel
            of Jesus christ
          </p>
        </div>

        <div className=" w-full mt-[14rem] flex flex-col items-center">
          <p className="text-sm text-center text-[#F25353] font-semibold">
            Our Work
          </p>
          <h1
            className="text-3xl text-center w-full leading-[1.2] mt-2 
          min-[491px]:w-[370px]"
          >
            Centred Around Seven Solid Pillars
          </h1>
        </div>
      </div>
      <div className="w-full mt-[9rem]">
        <div className="w-full h-[440px] bg-[#ef52520d]">
          <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex flex-row gap-[10rem]   h-fit">
            <div className=" h-[540px] w-[380px] invisible"></div>
            <div className="bg-white absolute p-5 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] top-[-50px] h-[540px] w-[380px]">
              <Image
                src={"/image/image-five.png"}
                alt="Cover Image"
                className="filter  object-cover w-full h-full"
                width={2740}
                height={2740}
                quality={75}
              />
            </div>
            <div className="mt-[4rem]">
              <h1 className="text-2xl font-medium">
                Spreading The Gospel of Jesus
              </h1>
              <p className="mt-2 w-[70%]">
                The Deborah Bless Foundation was established to carry out
                programs, events and conferences aimed at spreading the gospel
                of Jesus christ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
