import ImageCarousel from "@/lib/components/image-carousel";
import FirstSection from "@/lib/components/section-one";
import SectionThree from "@/lib/components/section-three";
import SectionTwo from "@/lib/components/section-two";
// import Image from "next/image";
// import Button from "@/lib/components/button";
import SectionFour from "@/lib/components/section-four";
import Button from "@/lib/components/button";

export default function Home() {
  return (
    <div className="w-full  ">
      <div className="w-full z-0 absolute top-0 flex justify-evenly h-full ">
        <hr className="w-[1px] hidden min-[634px]:block h-[70vh] bg-[#ECECEC]" />
        <hr className="w-[1px] block h-[70vh] bg-[#ECECEC]" />
        <hr className="w-[1px] hidden min-[634px]:block h-[70vh] bg-[#ECECEC]" />
        <hr className="w-[1px] block h-[70vh] bg-[#ECECEC]" />
        <hr className="w-[1px]  hidden min-[634px]:block  h-[70vh] bg-[#ECECEC]" />
        <hr className="w-[1px] hidden min-[634px]:block h-[70vh] bg-[#ECECEC]" />
        <hr className="w-[1px] block h-[70vh] bg-[#ECECEC]" />
      </div>
      <div className="relative w-full">
        <div className="w-full flex mt-24 min-[431px]:mt-28 justify-center  ">
          <h1 className="min-[890px]:text-[55px] min-[890px]:pl-0 min-[890px]:pr-0 pl-8 pr-8 text-[38px] text-[#3E3E3E] font-light text-center leading-[1.2] w-[1100px] ">
            <span className="font-semibold text-[#F25353]  ">
              EMPOWERING LIVES
            </span>
            , FIGHTING MALNUTRITION,
            <span className="font-semibold"> REDUCING CHILD MORTALITY</span>
          </h1>
        </div>
        <div className="w-full mt-32  relative">
          <div
            className="btn-gradient cursor-pointer mx-auto my-0 inset-x-0 absolute top-[-90px] rounded-full w-[150px] h-[150px] min-[890px]:w-[190px] min-[890px]:h-[190px] flex flex-col z-20 justify-center items-center border-[8px] 
          min-[890px]:border-[11px] border-solid border-white"
          >
            <div className="text-white font-medium min-[890px]:text-xl text-lg">
              <span className="block ">Donate</span>
              <span className="flex gap-2">
                Now
                <object
                  className="w-[32px] pointer-events-none"
                  type="image/svg+xml"
                  data={"/svg/arrow.svg"}
                ></object>
              </span>
            </div>
          </div>
          <ImageCarousel />
          <div className="bg-white mx-auto my-0 inset-x-0 rounded-[51%_49%_50%_50%_/_56%_56%_44%_44%] w-full absolute h-[120px] bottom-[-61px]"></div>
          {/* <div className="bottom-[-230px] overflow-hidden bg-clip-content   w-full absolute">
            <div className=" translate-x-[-290px]  bg-white w-[2500px]  h-[290px] rounded-[51%_49%_50%_50%_/_56%_56%_44%_44%]"></div>
          </div> */}
        </div>

        <div className=" mt-[4rem]  min-[1055px]:mt-[11rem] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] relative w-full ">
          <FirstSection />
        </div>

        <div className=" w-full pt-[12rem] 3xl:pr-[17rem] 3xl:pl-[17rem]     min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] mt-[10rem] min-[1055px]:mt-[14rem] bg-[#ef52520d] h-fit pb-16">
          <SectionTwo />
        </div>

        <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem]     min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem]  min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] mt-[8rem] sm:mt-[10rem]  min-[1055px]:mt-[12rem]  h-fit pb-16">
          <SectionThree />
        </div>

        <div
          className=" w-full   3xl:pr-[18rem] 3xl:pl-[18rem]   min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] 
          mt-[5rem] 
        min-[507px]:mt-[8rem] [1055px]:mt-[10rem]  h-fit pb-16"
        >
          <SectionFour />
        </div>

        <div
          className="w-full relative flex flex-col 
         min-[870px]:h-[500px] sm:h-[700px] h-[980px]  min-[507px]:mt-40 mt-20 bg-[#131313]"
        >
          <div className=" w-full pt-[6rem]   3xl:pr-[18rem] 3xl:pl-[18rem]   min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem]  h-fit pb-16">
            <div
              className="flex gap-20  
              min-[870px]:gap-0  justify-between 
               min-[870px]:items-start items-center
            min-[870px]:flex-row flex-col"
            >
              <div className="text-white">
                <h1
                  className="text-3xl w-[full]
                min-[982px]:w-[450px]"
                >
                  The Deborah Bless Foundation
                </h1>
                <p
                  className="mt-4  w-[280px]  
                min-[1066px]:w-[320px] min-[1132px]:w-[450px]"
                >
                  We believe every child should have a chance at a good life,
                  good food and overall a great future tha
                </p>
                <Button className="mt-12 w-[142px] h-[49px] btn-gradient">
                  Donate Now
                </Button>
              </div>
              <div
                className="flex flex-col sm:flex-row gap-20
              min-[1066px]:gap-40"
              >
                <div className=" flex w-[99px] flex-col gap-4 text-white">
                  <h1 className="text-lg font-semibold">Short Links</h1>
                  <h1 className="text-base font-normal">About us</h1>
                  <h1 className="text-base  font-normal">Donate</h1>
                  <h1 className="text-base font-normal">Latest News</h1>
                </div>

                <div className="flex flex-col gap-2 text-white">
                  <h1 className="text-lg font-semibold">Contact us</h1>
                  <p className="flex font-normal flex-row gap-3">
                    <object
                      className="w-[24px]"
                      type="image/svg+xml"
                      data={"/svg/location.svg"}
                    ></object>
                    1st Avenue, gwarinpa
                  </p>
                  <p className="flex mt-2 font-normal flex-row gap-3">
                    <object
                      className="w-[24px]"
                      type="image/svg+xml"
                      data={"/svg/mail.svg"}
                    ></object>
                    Hello@DeborahBlessFoundation
                  </p>
                  <p className="flex mt-2 font-normal flex-row gap-3">
                    <object
                      className="w-[24px]"
                      type="image/svg+xml"
                      data={"/svg/phone.svg"}
                    ></object>
                    +1200 456 897
                  </p>
                </div>
              </div>
            </div>
            <hr className="h-[1px] left-0 absolute min-[1132px]:mt-28 mt-[6rem] w-full bg-white" />

            <div className="flex 3xl:pr-[18rem] 3xl:pl-[18rem] sm:flex-row flex-col min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] left-0 bottom-5 w-full absolute items-center justify-between">
              <div className="flex text-xs text-white items-center gap-4">
                <p>Terms of use</p>|<p>Privacy policy</p>
              </div>
              <p className="text-white text-xs">
                Copyright 2022 Deborah Bless Foundation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
