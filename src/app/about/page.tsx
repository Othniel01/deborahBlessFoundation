import SectionFour from "@/lib/components/section-four";
import Image from "next/image";

export default function AboutPage() {
  return (
    // <div className="w-full">
    //   <div className="mt-[4rem]  min-[1055px]:mt-[8rem] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] relative w-full">
    //     <div className="flex flex-col items-center">
    //       <h1 className="text-2xl text-center font-medium">ABOUT US</h1>

    //       <div className="w-full mt-[3rem] p-3 min-[1093px]:h-[690px] h-[450px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white">
    //         <Image
    //           src={"/image/image-five.png"}
    //           alt="Cover Image"
    //           className="filter  object-cover w-full h-full"
    //           width={2740}
    //           height={2740}
    //           quality={75}
    //         />
    //       </div>

    //       <p className="mt-[4rem] text-[#666666] text-center w-[88%] text-lg">
    //         {" "}
    //         The Deborah Bless Foundation was established to carry out programs,
    //         events and conferences aimed at spreading the gospel of Jesus christ
    //         WORLDWIDE The Deborah Bless Foundation was established to carry out
    //         programs, events and conferences aimed at spreading the gospel of
    //         Jesus christ. The Deborah Bless Foundation was established to carry
    //         out programs, events and conferences aimed at spreading the gospel
    //         of Jesus christ
    //       </p>
    //     </div>

    //     <div className=" w-full min-[1093px]:mt-[14rem] mt-[8rem] flex flex-col items-center">
    //       <p className="text-sm text-center text-[#F25353] font-semibold">
    //         Our Work
    //       </p>
    //       <h1
    //         className="text-3xl text-center font-semibold w-full leading-[1.2] mt-2
    //       min-[491px]:w-[370px]"
    //       >
    //         Centred Around Seven Solid Pillars
    //       </h1>
    //     </div>
    //   </div>
    //   <div className="w-full pl-[2rem] pr-[2rem] min-[997px]:pr-0 min-[997px]:pl-0 min-[997px]:mt-[9rem] mt-[6rem] flex flex-col gap-[6rem] min-[997px]:gap-[18rem]">
    //     {/* //// */}
    //     <div className="w-full h-fit min-[997px]:pt-0 pt-[5rem] min-[997px]:h-[400px] relative bg-[#ef52520d]">
    //       <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex min-[997px]:flex-row flex-col-reverse   h-full">
    //         <div className=" min-[997px]:h-[540px] h-[340px] min-[997px]:w-[380px] w-full min-[997px]:mt-0 mt-[4rem] invisible "></div>
    //         <div className="bg-white absolute z-20 p-2 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] min-[997px]:top-[-70px]  h-[340px]  bottom-0 min-[997px]:h-[540px] left-0 min-[997px]:left-auto w-full min-[997px]:w-[380px]">
    //           <Image
    //             src={"/image/image-five.png"}
    //             alt="Cover Image"
    //             className="filter  object-cover w-full h-full"
    //             width={2740}
    //             height={2740}
    //             quality={75}
    //           />
    //         </div>
    //         <div className="min-[997px]:mt-[4rem]  mt-[0rem] ">
    //           <div className="min-[1137px]:ml-[10.5rem] min-[997px]:ml-[13rem] ml-0">
    //             <h1 className="text-2xl font-semibold">
    //               Spreading The Gospel of Jesus
    //             </h1>
    //             <p className="mt-7 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //             <p className="mt-1 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //           </div>

    //           <div className="w-full h-[10px] z-10 btn-gradient  min-[997px]:top-auto absolute bottom-auto top-[-90px] left-0 min-[997px]:bottom-0  "></div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full h-fit min-[997px]:pt-0 pt-[5rem] min-[997px]:h-[400px] relative bg-[#ef52520d]">
    //       <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex min-[997px]:flex-row flex-col-reverse   h-full">
    //         <div className=" min-[997px]:h-[540px] h-[340px] min-[997px]:w-[380px] w-full min-[997px]:mt-0 mt-[4rem] invisible"></div>
    //         <div className="bg-white absolute z-20 p-2 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] min-[997px]:top-[-70px]  h-[340px]  bottom-0 min-[997px]:h-[540px] left-0 min-[997px]:left-auto w-full min-[997px]:w-[380px]">
    //           <Image
    //             src={"/image/image-five.png"}
    //             alt="Cover Image"
    //             className="filter  object-cover w-full h-full"
    //             width={2740}
    //             height={2740}
    //             quality={75}
    //           />
    //         </div>
    //         <div className="min-[997px]:mt-[4rem]  mt-[0rem] ">
    //           <div className="min-[1137px]:ml-[10.5rem] min-[997px]:ml-[13rem] ml-0">
    //             <h1 className="text-2xl font-semibold">
    //               Spreading The Gospel of Jesus
    //             </h1>
    //             <p className="mt-7 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //             <p className="mt-1 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //           </div>

    //           <div className="w-full h-[10px] z-10 btn-gradient  min-[997px]:top-auto absolute bottom-auto top-[-90px] left-0 min-[997px]:bottom-0  "></div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full h-fit min-[997px]:pt-0 pt-[5rem] min-[997px]:h-[400px] relative bg-[#ef52520d]">
    //       <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex min-[997px]:flex-row flex-col-reverse   h-full">
    //         <div className=" min-[997px]:h-[540px] h-[340px] min-[997px]:w-[380px] w-full min-[997px]:mt-0 mt-[4rem] invisible"></div>
    //         <div className="bg-white absolute z-20 p-2 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] min-[997px]:top-[-70px]  h-[340px]  bottom-0 min-[997px]:h-[540px] left-0 min-[997px]:left-auto w-full min-[997px]:w-[380px]">
    //           <Image
    //             src={"/image/image-five.png"}
    //             alt="Cover Image"
    //             className="filter  object-cover w-full h-full"
    //             width={2740}
    //             height={2740}
    //             quality={75}
    //           />
    //         </div>
    //         <div className="min-[997px]:mt-[4rem]  mt-[0rem] ">
    //           <div className="min-[1137px]:ml-[10.5rem] min-[997px]:ml-[13rem] ml-0">
    //             <h1 className="text-2xl font-semibold">
    //               Spreading The Gospel of Jesus
    //             </h1>
    //             <p className="mt-7 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //             <p className="mt-1 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //           </div>

    //           <div className="w-full h-[10px] z-10 btn-gradient  min-[997px]:top-auto absolute bottom-auto top-[-90px] left-0 min-[997px]:bottom-0  "></div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full h-fit min-[997px]:pt-0 pt-[5rem] min-[997px]:h-[400px] relative bg-[#ef52520d]">
    //       <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex min-[997px]:flex-row flex-col-reverse   h-full">
    //         <div className=" min-[997px]:h-[540px] h-[340px] min-[997px]:w-[380px] w-full min-[997px]:mt-0 mt-[4rem] invisible"></div>
    //         <div className="bg-white absolute z-20 p-2 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] min-[997px]:top-[-70px]  h-[340px]  bottom-0 min-[997px]:h-[540px] left-0 min-[997px]:left-auto w-full min-[997px]:w-[380px]">
    //           <Image
    //             src={"/image/image-five.png"}
    //             alt="Cover Image"
    //             className="filter  object-cover w-full h-full"
    //             width={2740}
    //             height={2740}
    //             quality={75}
    //           />
    //         </div>
    //         <div className="min-[997px]:mt-[4rem]  mt-[0rem] ">
    //           <div className="min-[1137px]:ml-[10.5rem] min-[997px]:ml-[13rem] ml-0">
    //             <h1 className="text-2xl font-semibold">
    //               Spreading The Gospel of Jesus
    //             </h1>
    //             <p className="mt-7 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //             <p className="mt-1 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //           </div>

    //           <div className="w-full h-[10px] z-10 btn-gradient  min-[997px]:top-auto absolute bottom-auto top-[-90px] left-0 min-[997px]:bottom-0 "></div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full h-fit min-[997px]:pt-0 pt-[5rem] min-[997px]:h-[400px] relative bg-[#ef52520d]">
    //       <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex min-[997px]:flex-row flex-col-reverse   h-full">
    //         <div className=" min-[997px]:h-[540px] h-[340px] min-[997px]:w-[380px] w-full min-[997px]:mt-0 mt-[4rem] invisible"></div>
    //         <div className="bg-white absolute z-20 p-2 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] min-[997px]:top-[-70px]  h-[340px]  bottom-0 min-[997px]:h-[540px] left-0 min-[997px]:left-auto w-full min-[997px]:w-[380px]">
    //           <Image
    //             src={"/image/image-five.png"}
    //             alt="Cover Image"
    //             className="filter  object-cover w-full h-full"
    //             width={2740}
    //             height={2740}
    //             quality={75}
    //           />
    //         </div>
    //         <div className="min-[997px]:mt-[4rem]  mt-[0rem] ">
    //           <div className="min-[1137px]:ml-[10.5rem] min-[997px]:ml-[13rem] ml-0">
    //             <h1 className="text-2xl font-semibold">
    //               Spreading The Gospel of Jesus
    //             </h1>
    //             <p className="mt-7 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //             <p className="mt-1 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //           </div>

    //           <div className="w-full h-[10px] z-10 btn-gradient  min-[997px]:top-auto absolute bottom-auto top-[-90px] left-0 min-[997px]:bottom-0 "></div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full h-fit min-[997px]:pt-0 pt-[5rem] min-[997px]:h-[400px] relative bg-[#ef52520d]">
    //       <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex min-[997px]:flex-row flex-col-reverse   h-full">
    //         <div className=" min-[997px]:h-[540px] h-[340px] min-[997px]:w-[380px] w-full min-[997px]:mt-0 mt-[4rem] invisible"></div>
    //         <div className="bg-white absolute z-20 p-2 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] min-[997px]:top-[-70px]  h-[340px]  bottom-0 min-[997px]:h-[540px] left-0 min-[997px]:left-auto w-full min-[997px]:w-[380px]">
    //           <Image
    //             src={"/image/image-five.png"}
    //             alt="Cover Image"
    //             className="filter  object-cover w-full h-full"
    //             width={2740}
    //             height={2740}
    //             quality={75}
    //           />
    //         </div>
    //         <div className="min-[997px]:mt-[4rem]  mt-[0rem] ">
    //           <div className="min-[1137px]:ml-[10.5rem] min-[997px]:ml-[13rem] ml-0">
    //             <h1 className="text-2xl font-semibold">
    //               Spreading The Gospel of Jesus
    //             </h1>
    //             <p className="mt-7 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //             <p className="mt-1 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //           </div>

    //           <div className="w-full h-[10px] z-10 btn-gradient min-[997px]:top-auto absolute bottom-auto top-[-90px] left-0 min-[997px]:bottom-0 "></div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full h-fit min-[997px]:pt-0 pt-[5rem] min-[997px]:h-[400px] relative bg-[#ef52520d]">
    //       <div className=" w-full  3xl:pr-[17rem] 3xl:pl-[17rem] relative    min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex min-[997px]:flex-row flex-col-reverse   h-full">
    //         <div className=" min-[997px]:h-[540px] h-[340px] min-[997px]:w-[380px] w-full min-[997px]:mt-0 mt-[4rem] invisible"></div>
    //         <div className="bg-white absolute z-20 p-2 shadow-[2px_3px_28px_4px_rgba(0,0,0,0.1)] min-[997px]:top-[-70px]  h-[340px]  bottom-0 min-[997px]:h-[540px] left-0 min-[997px]:left-auto w-full min-[997px]:w-[380px]">
    //           <Image
    //             src={"/image/image-five.png"}
    //             alt="Cover Image"
    //             className="filter  object-cover w-full h-full"
    //             width={2740}
    //             height={2740}
    //             quality={75}
    //           />
    //         </div>
    //         <div className="min-[997px]:mt-[4rem]  mt-[0rem] ">
    //           <div className="min-[1137px]:ml-[10.5rem] min-[997px]:ml-[13rem] ml-0">
    //             <h1 className="text-2xl font-semibold">
    //               Spreading The Gospel of Jesus
    //             </h1>
    //             <p className="mt-7 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //             <p className="mt-1 w-full min-[997px]:w-[60%]">
    //               The Deborah Bless Foundation was established to carry out
    //               programs, events and conferences aimed at spreading the gospel
    //               of Jesus christ.
    //             </p>
    //           </div>

    //           <div className="w-full h-[10px] z-10 btn-gradient  min-[997px]:top-auto absolute bottom-auto top-[-90px] left-0 min-[997px]:bottom-0 "></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className=" w-full   3xl:pr-[18rem] 3xl:pl-[18rem]   min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem]
    //       mt-[5rem]
    //     min-[507px]:mt-[8rem] min-[1055px]:mt-[18rem]  h-fit pb-16"
    //   >
    //     <SectionFour />
    //   </div>
    // </div>

    <div className="w-full">
      <div className="w-full relative">
        <Image
          src={"/image/image-five.png"}
          alt="Cover Image"
          className="filter grayscale  object-cover w-full min-[1093px]:h-[520px] h-[310px]"
          width={6740}
          height={6740}
          quality={100}
        />

        <div className="absolute top-0 left-0 z-[8] opacity-[.6] bg-black w-full h-full"></div>

        <div className="absolute z-[10] 3xl:pr-[17rem] 3xl:pl-[17rem] min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] bottom-[2rem]  min-[1093px]:bottom-[5rem] ">
          <h1
            className="min-[1093px]:text-[45px]
          text-[28px]
          font-semibold text-white"
          >
            About Us
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
          <div className="w-full mt-10 flex ">
            <div className="">
              <h1 className="font-medium text-lg">Our Four Core Tenents</h1>
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
              <ul className="mt-4 pl-5">
                <li className="mt-1 w-[91%] list-disc  text-[14px] text-[#666666]">
                  <span className="font-semibold text-black">
                    {" "}
                    Evangelism{"   "}
                  </span>{" "}
                  the gospel of Jesus christ . established to carry out
                  programs, events and conferences aimed at spreading the gospel
                  of Jesus christ WORLDWIDE The Deborah Bless Foundation was
                  established to carry out programs,
                </li>
                <li className="mt-2 w-[91%] list-disc  text-[14px] text-[#666666]">
                  <span className="font-semibold text-black">
                    {" "}
                    Fedding{"   "}
                  </span>{" "}
                  the gospel of Jesus christ . established to carry out
                  programs, events and conferences aimed at spreading the gospel
                  of Jesus christ WORLDWIDE The Deborah Bless Foundation was
                  established to carry out programs,
                </li>
                <li className="mt-2 w-[91%] list-disc  text-[14px] text-[#666666]">
                  <span className="font-semibold text-black">
                    {" "}
                    Fedding{"   "}
                  </span>{" "}
                  the gospel of Jesus christ . established to carry out
                  programs, events and conferences aimed at spreading the gospel
                  of Jesus christ WORLDWIDE The Deborah Bless Foundation was
                  established to carry out programs,
                </li>
                <li className="mt-2 w-[91%] list-disc  text-[14px] text-[#666666]">
                  <span className="font-semibold text-black">
                    {" "}
                    Fedding{"   "}
                  </span>{" "}
                  the gospel of Jesus christ . established to carry out
                  programs, events and conferences aimed at spreading the gospel
                  of Jesus christ WORLDWIDE The Deborah Bless Foundation was
                  established to carry out programs,
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-40">
          <p className="text-sm text-[#F25353] font-semibold">Our Founder</p>
          <h1 className="text-semibold text-3xl mt-2 ">Meet Debbie</h1>
          <div className="w-full">
            <div className="w-full mt-[3rem] p-3 min-[1093px]:h-[690px] h-[450px] shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white">
              <Image
                src={"/image/image-five.png"}
                alt="Cover Image"
                className="filter  object-cover w-full h-full"
                width={2740}
                height={2740}
                quality={75}
              />
            </div>
            <div className="w-full p-5 text-center flex flex-col items-center pb-10 min-[577px]:pb-0 pt-10 min-[725px]:pt-20 min-[577px]:h-[340px] h-fit bg-[rgba(62,77,98,0.11)]">
              <h1
                className="font-bold 
              min-[1066px]:text-3xl text-xl min-[577px]:text-2xl"
              >
                &rdquo;I believe every child should have a chance at a good
                life, good food and overall a great future that is why we try
                everything in our power to provide, nurture and cater for each
                child.&rdquo;
              </h1>
              <p className="min-[577px]:mt-10 mt-10 font-medium  min-[1066px]:text-[22px] text-[18px] text-[#666666]">
                DEBORAH ANUOLUWA OGWUCHE
              </p>
              <p className="mt-1 text-[14px]   min-[1066px]:text-[18px] text-[#666666]">
                Founder, Director, The Deborah Bless Foundation
              </p>
            </div>
          </div>
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
