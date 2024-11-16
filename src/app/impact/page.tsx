// import SectionFour from "@/lib/components/section-four";
import { MainLayout } from "@/lib/components/layout";
import MakeMap from "@/lib/components/map";
// import SectionFour from "@/lib/components/section-four";
import Image from "next/image";

export default function ImpactPage() {
  return (
    <MainLayout>
      <div className="w-full min-[1161px]:pb-[8rem] pb-[18rem]">
        <div className="w-full relative">
          <Image
            src={"/image/image-seven.png"}
            alt="Cover Image"
            className="filter  object-cover w-full min-[1093px]:h-[320px] h-[310px]"
            width={6740}
            height={6740}
            quality={100}
          />

          <div className="absolute z-[10] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] bottom-[2rem]  min-[1093px]:bottom-[3rem] ">
            <h1
              className="min-[1093px]:text-[39px]
          text-[28px]
          font-semibold text-white"
            >
              Our Impact
            </h1>
            <p className="text-white w-full min-[674px]:w-[590px] text-[14px]">
              The Deborah Bless Foundation was established to carry outprograms,
              events and conferences aimed at spreading the gospel of Jesus
              christ Wweeee
            </p>
          </div>
        </div>
        <div className="mt-[4rem]  min-[1055px]:mt-[4rem] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] relative w-full">
          <div className="w-full">
            <h1 className="text-[24px] font-semibold">What Have We Done?</h1>
            <p className="mt-2 text-[16px] text-[#666666]">
              Since our founding, the Deborah Bless Foundation has touched the
              lives of countless individuals through our various programs. Our
              work has empowered families, supported children, and strengthened
              communities across Nigeria. We have donated millions of Naira to
              fund vocational training programs, provided essential health and
              nutrition support for infants and young children, and delivered
              income-generating tools to families in need. Each life we impact
              is a testament to our commitment to transforming communities and
              building a better future.
            </p>
            <div className="w-full mt-10 flex min-[997px]:flex-row flex-col ">
              <div className="">
                <h1 className="font-medium text-lg">Our Impact Map</h1>
                <p className="mt-2 w-[91%]  text-[14px] text-[#666666]">
                  spreading the gospel of Jesus christ . established to carry
                  out programs, events and conferences aimed at spreading the
                  gospel of Jesus christ WORLDWIDE The Deborah Bless Foundation
                  was established to carry out programs, events and conferences
                  aimed at spreading the gospel of Jesus christ established to
                  carry out programs, events and conferences aimed at spreading
                  the gospel of Jesus christ WORLDWIDE The Deborah Bless
                  Foundation was established to carry out programs, events and
                  conferences aimed at spreading the gospel of Jesus christ.
                </p>
                <div className="mt-4">
                  <p className="mt-1 w-[91%]  text-[14px] text-[#666666]">
                    <span className="font-semibold text-black">
                      {" "}
                      Operation OGD{"   "}
                    </span>{" "}
                    the gospel of Jesus christ . established to carry out
                    programs, events and conferences aimed at spreading the
                    gospel of Jesus christ WORLDWIDE The Deborah Bless
                    Foundation was established to carry out programs,
                  </p>
                  <p className="mt-1 w-[91%]  text-[14px] text-[#666666]">
                    <span className="font-semibold text-black">
                      {" "}
                      Operation SGM{"   "}
                    </span>{" "}
                    the gospel of Jesus christ . established to carry out
                    programs, events and conferences aimed at spreading the
                    gospel of Jesus christ WORLDWIDE The Deborah Bless
                    Foundation was established to carry out programs,
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
                  className="filter   object-cover shrink-0 w-full h-full"
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
                  established to carry out programs, events and conferences
                  aimed at spreading the gospel of Jesus christ .
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
                  className="filter   object-cover shrink-0 w-full h-full"
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
                  established to carry out programs, events and conferences
                  aimed at spreading the gospel of Jesus christ .
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
                  className="filter   object-cover shrink-0 w-full h-full"
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
                  established to carry out programs, events and conferences
                  aimed at spreading the gospel of Jesus christ .
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
          <div
            className="flex min-[1161px]:flex-row flex-col min-[1161px]:pr-[12rem] pr-0 
         min-[1161px]:items-center gap-40 min-[1161px]:gap-0 items-start justify-between mt-60 bg-red-00 w-full"
          >
            <div className="">
              <h1 className="text-3xl font-extrabold">Join Our Revolution</h1>
              <p className="mt-2 w-[80%] text-lg">
                Get the latest information on our work and be part of the
                solution.
              </p>
              <div
                className="grid mt-16 min-[546px]:grid-cols-[repeat(2,0.3fr)] grid-cols-[repeat(1,1fr)] 
      grid-rows-[repeat(1,1fr)]
      min-[546px]:grid-rows-[repeat(1,1fr)] gap-10"
              >
                <div className="">
                  <object
                    className="w-[51px]"
                    type="image/svg+xml"
                    data={"/svg/suitcase.svg"}
                  ></object>
                  <h1 className="mt-[15px] font-semibold text-2xl">
                    Get Involved
                  </h1>

                  <p className="mt-[15px] gap-3 flex items-center text-[#F25353]">
                    Learn More
                    <object
                      className="w-[24px]"
                      type="image/svg+xml"
                      data={"/svg/arrow.svg"}
                    ></object>
                  </p>
                </div>

                <div className="">
                  <object
                    className="w-[51px]"
                    type="image/svg+xml"
                    data={"/svg/income.svg"}
                  ></object>
                  <h1 className="mt-[15px] font-semibold text-2xl">
                    Support DBF
                  </h1>

                  <p className="mt-[15px] gap-3 flex items-center text-[#F25353]">
                    Learn More
                    <object
                      className="w-[24px]"
                      type="image/svg+xml"
                      data={"/svg/arrow.svg"}
                    ></object>
                  </p>
                </div>

                <div className="">
                  <object
                    className="w-[51px]"
                    type="image/svg+xml"
                    data={"/svg/church.svg"}
                  ></object>
                  <h1 className="mt-[15px] font-semibold text-2xl">
                    Buy A Plate
                  </h1>

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
            </div>
            <div className="min-[1161px]:mt-0 mt-20">
              <div className=" rounded-[19px] relative w-[317px] h-[356px] border-dashed border-2 border-[#F25353]">
                <div
                  className="top-[-140px] min-[1161px]:top-[-90px] right-[29px] 
              min-[1161px]:right-[-190px] bg-white p-2 w-[251px] absolute shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)]  h-[350px]"
                >
                  <Image
                    src={"/image/image-four.png"}
                    alt="Cover Image"
                    className=" filter  object-cover h-full w-full"
                    width={2740}
                    height={2740}
                    quality={75}
                  />
                </div>

                <div
                  className="absolute bg-white p-2 min-[1161px]:bottom-[-90px] bottom-[-230px] left-[31px] 
              min-[1161px]:left-[-90px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] w-[251px] h-[350px]  "
                >
                  <Image
                    src={"/image/image-two.png"}
                    alt="Cover Image"
                    className=" filter object-cover w-full h-full "
                    width={2740}
                    height={2740}
                    quality={75}
                  />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </MainLayout>
  );
}
