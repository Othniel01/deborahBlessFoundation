import Image from "next/image";

import Button from "@/lib/components/button";

export default function SectionThree() {
  return (
    <div className="">
      <div className="text-center">
        <p className="text-sm text-[#F25353] font-semibold">Our Impact</p>
        <h1 className="text-3xl leading-[1.2] mt-2 ">
          Ways We Help Around The World
        </h1>
      </div>

      <div className="flex flex-col gap-12 min-[1055px]:gap-14 min-[1055px]:flex-row mt-[60px] sm:mt-[120px]  min-[1055px]:items-center  items-start ">
        <div className=" p-2 shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] bg-white min-[1132px]:w-[593px] w-full min-[1055px]:w-[500px] h-[394px]">
          <Image
            src={"/image/image-six.png"}
            alt="Cover Image"
            className="object-cover w-full h-full filter grayscale  
          rounded-t-[0px]"
            width={2740}
            height={2740}
            quality={75}
          />
        </div>

        <div className="">
          <p className="text-sm text-[#F25353] font-semibold">Highlight</p>
          <h1
            className="text-3xl leading-[1.2] w-full mt-2 
          min-[1055px]:w-[370px]"
          >
            The Current Flooding in Borno Nigeria
          </h1>
          <p
            className="mt-[15px] text-[#666666] 
              
              3xl:w-[550px]
              w-full
              min-[1055px]:w-[450px]"
          >
            Floods in the Sahel region are becoming more frequent and
            widespread. Since early July, intense rainfall has affected
            communities along the Niger-Nigeria border, triggering flooding
            which has damaged homes, displaced families and impacted food
            sources and livelihoods.
          </p>
          <p className="mt-5 gap-3 flex items-center text-[#F25353]">
            Learn More
            <object
              className="w-[24px]"
              type="image/svg+xml"
              data={"/svg/arrow.svg"}
            ></object>
          </p>
        </div>
      </div>

      <div
        className="w-full min-[834px]:mt-14 mt-28 min-[1055px]:mt-0 bg-[#131313]  min-[1055px]:rounded-tl-none rounded-[0px] min-[834px]:pt-0 min-[834px]:pb-0 pt-20 pb-20  min-[834px]:h-[170px] h-fit  flex flex-col  min-[834px]:gap-0 gap-16
      min-[834px]:flex-row min-[834px]:text-start  text-center  items-center min-[834px]:justify-evenly"
      >
        <div className="text-white">
          <h1 className="  min-[962px]:text-4xl text-2xl">20M</h1>
          <p className="min-[962px]:text-lg  text-base font-light">
            Children Supported
          </p>
        </div>
        <div className="text-white">
          <h1 className=" min-[962px]:text-4xl text-2xl">80k</h1>
          <p className="min-[962px]:text-lg  text-base font-light">
            Workshops Held
          </p>
        </div>
        <div className="text-white">
          <h1 className=" min-[962px]:text-4xl text-2xl">100+</h1>
          <p className="min-[962px]:text-lg  text-base font-light">
            Tools Distributed
          </p>
        </div>
        <div className="text-white">
          <h1 className=" min-[962px]:text-4xl text-2xl">10</h1>
          <p className="min-[962px]:text-lg  text-base font-light">
            Countries Worldwide
          </p>
        </div>
      </div>

      <div
        className="w-full flex justify-center
      min-[571px]:justify-end pr-4 pl-4 min-[571px]:pr-0  min-[571px]:pl-0 items-center  mt-[40px] relative h-[424px]"
      >
        <Image
          src={"/image/image-five.png"}
          alt="Cover Image"
          className=" filter absolute grayscale  w-full h-full object-cover rounded-[0px]"
          width={2740}
          height={2740}
          quality={75}
        />

        <div className="absolute rounded-[0px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.6138830532212884)_0%)] sm:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(0,0,0,1)_100%)] w-full h-full"></div>

        <div className="relative flex flex-col items-center gap-5 pr-0  min-[571px]:pr-[80px] ">
          <div className="">
            <object
              className="w-[34px] absolute 
              min-[571px]:top-0 top-[-40px] 
              min-[571px]:left-[-50px] left-[-10px]"
              type="image/svg+xml"
              data={"/svg/quote.svg"}
            ></object>
            <p
              className="font-medium text-white 
            sm:text-[28px] text-[22px] min-[571px]:w-[340px] w-full text-center"
            >
              Children need you to be a part of change in this world
            </p>

            <object
              className="w-[34px] absolute 
              min-[571px]:right-[50px] right-[10px] -scale-x-100"
              type="image/svg+xml"
              data={"/svg/quote.svg"}
            ></object>
          </div>

          <Button className="w-[142px] h-[49px] btn-gradient">
            Partner with us
          </Button>
        </div>
      </div>
    </div>
  );
}
