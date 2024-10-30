// import SectionFour from "@/lib/components/section-four";
import MakeMap from "@/lib/components/map";
import SectionFour from "@/lib/components/section-four";
import Image from "next/image";

export default function ImpactPage() {
  return (
    <div className="w-full">
      <div className="w-full relative">
        <Image
          src={"/image/image-seven.png"}
          alt="Cover Image"
          className="filter grayscale  object-cover w-full min-[1093px]:h-[520px] h-[310px]"
          width={6740}
          height={6740}
          quality={100}
        />

        <div className="absolute z-[10] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] bottom-[2rem]  min-[1093px]:bottom-[5rem] ">
          <h1
            className="min-[1093px]:text-[45px]
          text-[28px]
          font-semibold text-white"
          >
            Our Impact
          </h1>
          <p className="text-white w-full min-[674px]:w-[590px] text-[14px]">
            The Deborah Bless Foundation was established to carry outprograms,
            events and conferences aimed at spreading the gospel of Jesus christ
            Wweeee
          </p>
        </div>
      </div>
      <div className="mt-[4rem]  min-[1055px]:mt-[4rem] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] relative w-full">
        <div className="w-full">
          <h1 className="text-[24px] font-semibold">Guess What</h1>
          <p className="mt-2 text-[14px] text-[#666666]">
            The Deborah Bless Foundation was established to carry out programs,
            events and conferences aimed at spreading the gospel of Jesus christ
            WORLDWIDE The Deborah Bless Foundation was established to carry out
            programs, events and conferences aimed at spreading the gospel of
            Jesus christ . established to carry out programs, events and
            conferences aimed at spreading the gospel of Jesus christ WORLDWIDE
            The Deborah Bless Foundation was established to carry out programs,
            events and conferences aimed at spreading the gospel of Jesus christ
            established to carry out programs, events and conferences aimed at
            spreading the gospel of Jesus christ WORLDWIDE The Deborah Bless
            Foundation was established to carry out programs, events and
            conferences aimed at spreading the gospel of Jesus christ.
          </p>
          <div className="w-full mt-10 flex min-[997px]:flex-row flex-col ">
            <div className="">
              <h1 className="font-medium text-lg">Our Impact Map</h1>
              <p className="mt-2 w-[91%]  text-[14px] text-[#666666]">
                spreading the gospel of Jesus christ . established to carry out
                programs, events and conferences aimed at spreading the gospel
                of Jesus christ WORLDWIDE The Deborah Bless Foundation was
                established to carry out programs, events and conferences aimed
                at spreading the gospel of Jesus christ established to carry out
                programs, events and conferences aimed at spreading the gospel
                of Jesus christ WORLDWIDE The Deborah Bless Foundation was
                established to carry out programs, events and conferences aimed
                at spreading the gospel of Jesus christ.
              </p>
              <div className="mt-4">
                <p className="mt-1 w-[91%]  text-[14px] text-[#666666]">
                  <span className="font-semibold text-black">
                    {" "}
                    Operation OGD{"   "}
                  </span>{" "}
                  the gospel of Jesus christ . established to carry out
                  programs, events and conferences aimed at spreading the gospel
                  of Jesus christ WORLDWIDE The Deborah Bless Foundation was
                  established to carry out programs,
                </p>
                <p className="mt-1 w-[91%]  text-[14px] text-[#666666]">
                  <span className="font-semibold text-black">
                    {" "}
                    Operation SGM{"   "}
                  </span>{" "}
                  the gospel of Jesus christ . established to carry out
                  programs, events and conferences aimed at spreading the gospel
                  of Jesus christ WORLDWIDE The Deborah Bless Foundation was
                  established to carry out programs,
                </p>
              </div>
            </div>
            <div className="min-[997px]:mt-0 mt-10 min-[778px]:mt-20">
              <MakeMap />
            </div>
          </div>
        </div>
        <div className="w-full mt-24">
          <div className="flex pb-10 min-[893px]:pb-0 flex-col min-[893px]:flex-row   bg-[rgba(62,77,98,0.11)] gap-10">
            <div className="min-[893px]:w-[513px] w-full shrink-0 shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white p-2 h-[306px] min-[893px]:h-[442px]">
              <Image
                src={"/image/image-six.png"}
                alt="Cover Image"
                className="filter grayscale  object-cover shrink-0 w-full h-full"
                width={6740}
                height={6740}
                quality={100}
              />
            </div>

            <div className="min-[893px]:pt-16 pt-0 min-[893px]:pr-10 pl-5 min-[893px]:pl-0 pr-5 min-[1041px]:pr-40">
              <h1 className="text-[22px] w-full min-[1041px]:w-[310px]  font-semibold">
                The Ashley Muntengo Project
              </h1>
              <p className="mt-4 text-[#666666] w-full text-[14px]">
                The Deborah Bless Foundation was established to carry out
                programs, events and conferences aimed at spreading the gospel
                of Jesus christ WORLDWIDE The Deborah Bless Foundation was
                established to carry out programs, events and conferences aimed
                at spreading the gospel of Jesus christ .
              </p>
              <p className="mt-[15px] gap-3 flex items-center text-[#F25353]">
                Learn More
                <object
                  className="w-[24px]"
                  type="image/svg+xml"
                  data={"/svg/arrow.svg"}
                ></object>
              </p>
            </div>
          </div>

          {/*  */}

          <div className="flex mt-20 pb-10 min-[893px]:pb-0 flex-col min-[893px]:flex-row   bg-[rgba(62,77,98,0.11)] gap-10">
            <div className="min-[893px]:w-[513px] w-full shrink-0 shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white p-2 h-[306px] min-[893px]:h-[442px]">
              <Image
                src={"/image/image-six.png"}
                alt="Cover Image"
                className="filter grayscale  object-cover shrink-0 w-full h-full"
                width={6740}
                height={6740}
                quality={100}
              />
            </div>

            <div className="min-[893px]:pt-16 pt-0 min-[893px]:pr-10 pl-5 min-[893px]:pl-0 pr-5 min-[1041px]:pr-40">
              <h1 className="text-[22px] w-full min-[1041px]:w-[310px]  font-semibold">
                The Ashley Muntengo Project
              </h1>
              <p className="mt-4 text-[#666666] w-full text-[14px]">
                The Deborah Bless Foundation was established to carry out
                programs, events and conferences aimed at spreading the gospel
                of Jesus christ WORLDWIDE The Deborah Bless Foundation was
                established to carry out programs, events and conferences aimed
                at spreading the gospel of Jesus christ .
              </p>
              <p className="mt-[15px] gap-3 flex items-center text-[#F25353]">
                Learn More
                <object
                  className="w-[24px]"
                  type="image/svg+xml"
                  data={"/svg/arrow.svg"}
                ></object>
              </p>
            </div>
          </div>

          {/*  */}

          <div className="flex mt-20 pb-10 min-[893px]:pb-0 flex-col min-[893px]:flex-row   bg-[rgba(62,77,98,0.11)] gap-10">
            <div className="min-[893px]:w-[513px] w-full shrink-0 shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white p-2 h-[306px] min-[893px]:h-[442px]">
              <Image
                src={"/image/image-six.png"}
                alt="Cover Image"
                className="filter grayscale  object-cover shrink-0 w-full h-full"
                width={6740}
                height={6740}
                quality={100}
              />
            </div>

            <div className="min-[893px]:pt-16 pt-0 min-[893px]:pr-10 pl-5 min-[893px]:pl-0 pr-5 min-[1041px]:pr-40">
              <h1 className="text-[22px] w-full min-[1041px]:w-[310px]  font-semibold">
                The Ashley Muntengo Project
              </h1>
              <p className="mt-4 text-[#666666] w-full text-[14px]">
                The Deborah Bless Foundation was established to carry out
                programs, events and conferences aimed at spreading the gospel
                of Jesus christ WORLDWIDE The Deborah Bless Foundation was
                established to carry out programs, events and conferences aimed
                at spreading the gospel of Jesus christ .
              </p>
              <p className="mt-[15px] gap-3 flex items-center text-[#F25353]">
                Learn More
                <object
                  className="w-[24px]"
                  type="image/svg+xml"
                  data={"/svg/arrow.svg"}
                ></object>
              </p>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
      <div
        className=" w-full   3xl:pr-[18rem] 3xl:pl-[18rem]   min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] 
          mt-[5rem] 
        min-[507px]:mt-[8rem] min-[1055px]:mt-[10rem]  h-fit pb-16"
      >
        <SectionFour />
      </div>
    </div>
  );
}
